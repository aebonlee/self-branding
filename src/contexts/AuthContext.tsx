import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import getSupabase, { updateLastLogin, setSharedSession, getSharedSession, clearSharedSession } from '../utils/supabase';
import { getProfile, updateProfile, signOut as authSignOut, signInWithGoogle, signInWithKakao } from '../utils/auth';
import { ADMIN_EMAILS } from '../config/admin';
import { useIdleTimeout } from '../hooks/useIdleTimeout';

interface UserType {
  id: string;
  email?: string;
  user_metadata?: Record<string, string>;
  identities?: Array<{ identity_data?: { email?: string } }>;
}

interface ProfileType {
  id: string;
  display_name?: string;
  email?: string;
  signup_domain?: string;
  role?: string;
  visited_sites?: string[];
  provider?: string;
  avatar_url?: string;
}

interface AccountBlockType {
  status: string;
  reason: string;
  suspended_until: string | null;
}

interface AuthContextType {
  user: UserType | null;
  profile: ProfileType | null;
  loading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  signInWithGoogle: typeof signInWithGoogle;
  signInWithKakao: typeof signInWithKakao;
  accountBlock: AccountBlockType | null;
  clearAccountBlock: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [accountBlock, setAccountBlock] = useState<AccountBlockType | null>(null);

  const loadProfile = useCallback(async (authUser: UserType) => {
    if (!authUser) {
      setProfile(null);
      return;
    }
    const p = await getProfile(authUser.id) as ProfileType | null;
    if (p) {
      const updates: Record<string, unknown> = {};
      if (!p.signup_domain) updates.signup_domain = window.location.hostname;
      if (!p.role || p.role === 'user') updates.role = 'member';
      // 현재 도메인이 visited_sites에 없으면 자동 추가
      const currentDomain = window.location.hostname;
      const sites = Array.isArray(p.visited_sites) ? p.visited_sites : [];
      if (!sites.includes(currentDomain)) {
        updates.visited_sites = [...sites, currentDomain];
      }
      if (Object.keys(updates).length > 0) {
        try {
          const updated = await updateProfile(authUser.id, updates) as ProfileType | null;
          setProfile(updated);
        } catch {
          setProfile(p);
        }
      } else {
        setProfile(p);
      }
    }

    updateLastLogin(authUser.id);

    try {
      const client = getSupabase();
      if (client) {
        const { data: statusData } = await client.rpc('check_user_status', {
          target_user_id: authUser.id,
          current_domain: window.location.hostname,
        });
        if (statusData && statusData.status && statusData.status !== 'active') {
          setAccountBlock({
            status: statusData.status,
            reason: statusData.reason || '',
            suspended_until: statusData.suspended_until || null,
          });
          await authSignOut();
          setUser(null);
          setProfile(null);
          return;
        }
      }
    } catch {
      // check_user_status 함수 미존재 시 무시
    }
  }, []);

  useEffect(() => {
    const client = getSupabase();
    if (!client) {
      setLoading(false);
      return;
    }

    const { data: { subscription } } = client.auth.onAuthStateChange(async (event: string, session: { user?: UserType } | null) => {
      const u = (session?.user as UserType) ?? null;
      setUser(u);
      if (u) {
        loadProfile(u);
        if (event === 'SIGNED_IN') {
          const c = getSupabase();
          if (c) {
            c.from('user_profiles')
              .update({ last_sign_in_at: new Date().toISOString() })
              .eq('id', u.id)
              .then(() => {});
          }
        }
      } else {
        setProfile(null);
      }
      // SSO: INITIAL_SESSION에서 세션 없으면 공유 쿠키로 복원
      if (event === 'INITIAL_SESSION') {
        if (!session) {
          const rt = getSharedSession();
          if (rt) {
            try {
              const { data } = await client.auth.refreshSession({ refresh_token: rt });
              if (!data.session) clearSharedSession();
            } catch { clearSharedSession(); }
          }
        }
        setLoading(false);
      }

      // SSO: 쿠키 동기화
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (event === 'SIGNED_OUT') clearSharedSession();
    });

    const fallbackTimer = setTimeout(() => {
      setLoading((prev) => {
        if (prev) console.warn('Auth: INITIAL_SESSION timeout, forcing loading=false');
        return false;
      });
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      subscription.unsubscribe();
    };
  }, [loadProfile]);

  const signOut = useCallback(async () => {
    await authSignOut();
    setUser(null);
    setProfile(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) await loadProfile(user);
  }, [user, loadProfile]);

  const allEmails = [
    user?.email,
    user?.user_metadata?.email,
    user?.identities?.[0]?.identity_data?.email,
    profile?.email,
  ].filter((e): e is string => typeof e === 'string').map((e) => e.toLowerCase());
  const isAdmin = allEmails.some((e) => ADMIN_EMAILS.includes(e));
  const isLoggedIn = !!user;


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: isLoggedIn,
  onTimeout: () => {
  authSignOut().catch(() => {});
  clearSharedSession();
  },
  });

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isLoggedIn,
      isAdmin,
      signOut,
      refreshProfile,
      signInWithGoogle,
      signInWithKakao,
      accountBlock,
      clearAccountBlock: () => setAccountBlock(null),
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

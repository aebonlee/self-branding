import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/* ── SSO 크로스도메인 쿠키 헬퍼 ── */
const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt: string): void {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession(): string | null {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession(): void {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}

let supabase: SupabaseClient | null = null;

const getSupabase = (): SupabaseClient | null => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

const POSTS_PER_PAGE = 10;
const SITE_DOMAIN = window.location.hostname;

// Common record type for Supabase query results
export interface PostRecord {
  id: number;
  title: string;
  content: string;
  category: string;
  user_id: string;
  author_name: string;
  created_at: string;
  views: number;
  site_domain: string;
}

export interface CommentRecord {
  id: number;
  post_id: number;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
  site_domain: string;
}

export interface LectureRecord {
  id: number;
  title: string;
  week_number: number;
  content: string;
  description: string;
  file_url: string;
  slide_url: string;
  cover_image: string;
  tags: string[];
  is_published: boolean;
  views: number;
  created_at: string;
  updated_at: string;
  site_domain: string;
  user_id: string;
}

export interface ProfileRecord {
  id: string;
  display_name: string;
  email: string;
  provider: string;
  role: string;
  signup_domain: string;
  visited_sites: string[];
  created_at: string;
  last_login_at: string;
  last_sign_in_at: string;
}

export interface GalleryRecord {
  id: number;
  title: string;
  category: string;
  image_url: string;
  link_url: string;
  description: string;
  user_id: string;
  author_name: string;
  views: number;
  created_at: string;
  site_domain: string;
}

export interface GalleryCommentRecord {
  id: number;
  gallery_id: number;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
  site_domain: string;
}

export interface PortfolioRecord {
  id: number;
  title: string;
  summary: string;
  cover_image: string;
  content: string;
  tags: string;
  user_id: string;
  author_name: string;
  views: number;
  created_at: string;
  site_domain: string;
}

export interface PortfolioCommentRecord {
  id: number;
  portfolio_id: number;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
  site_domain: string;
}

export interface WebsiteRecord {
  id: number;
  title: string;
  url: string;
  image_url: string;
  description: string;
  category: string;
  user_id: string;
  author_name: string;
  views: number;
  created_at: string;
  site_domain: string;
}

export interface WebsiteCommentRecord {
  id: number;
  website_id: number;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
  site_domain: string;
}

export interface SearchResultRecord {
  id: number;
  title: string;
  author_name: string;
  created_at: string;
}

/**
 * 게시글 목록 조회
 */
export const getPosts = async (page = 1, category: string | null = null): Promise<{ posts: PostRecord[]; total: number }> => {
  const client = getSupabase();
  if (!client) return { posts: [], total: 0 };

  let query = client
    .from('brand_posts')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getPosts error:', error);
    return { posts: [], total: 0 };
  }

  return { posts: (data as PostRecord[]) || [], total: count || 0 };
};

/**
 * 게시글 상세 조회
 */
export const getPostById = async (id: string | undefined): Promise<PostRecord | null> => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('brand_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getPostById error:', error);
    return null;
  }

  return data as PostRecord;
};

/**
 * 게시글 작성
 */
export const createPost = async (postData: Record<string, unknown>): Promise<PostRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_posts')
    .insert({ ...postData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as PostRecord;
};

/**
 * 게시글 삭제
 */
export const deletePost = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 조회수 증가
 */
export const incrementViews = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('brand_increment_views', { post_id: id });
  } catch {
    // RPC 미존재 시 직접 업데이트
    try {
      await client
        .from('brand_posts')
        .update({ views: 0 })
        .eq('id', id);
    } catch {
      // ignore
    }
  }
};

/**
 * 댓글 목록 조회
 */
export const getComments = async (postId: string | undefined): Promise<CommentRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('brand_comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getComments error:', error);
    return [];
  }

  return (data as CommentRecord[]) || [];
};

/**
 * 댓글 작성
 */
export const createComment = async (commentData: Record<string, unknown>): Promise<CommentRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as CommentRecord;
};

/**
 * 댓글 삭제
 */
export const deleteComment = async (id: number): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 게시글 검색
 */
export const searchPosts = async (query: string): Promise<SearchResultRecord[]> => {
  const client = getSupabase();
  if (!client || !query.trim()) return [];

  const pattern = `%${query.trim()}%`;

  const { data, error } = await client
    .from('brand_posts')
    .select('id, title, author_name, created_at')
    .eq('site_domain', SITE_DOMAIN)
    .or(`title.ilike.${pattern},content.ilike.${pattern}`)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('searchPosts error:', error);
    return [];
  }

  return (data as SearchResultRecord[]) || [];
};

/**
 * 강의안 목록 조회
 */
export const getLectures = async (): Promise<LectureRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('brand_lectures')
    .select('*')
    .eq('site_domain', SITE_DOMAIN)
    .eq('is_published', true)
    .order('week_number', { ascending: true });

  if (error) {
    console.error('getLectures error:', error);
    return [];
  }

  return (data as LectureRecord[]) || [];
};

/**
 * 강의안 상세 조회
 */
export const getLectureById = async (id: string | undefined): Promise<LectureRecord | null> => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('brand_lectures')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getLectureById error:', error);
    return null;
  }

  return data as LectureRecord;
};

/**
 * 강의안 등록
 */
export const createLecture = async (lectureData: Record<string, unknown>): Promise<LectureRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_lectures')
    .insert({ ...lectureData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as LectureRecord;
};

/**
 * 강의안 수정
 */
export const updateLecture = async (id: string | undefined, lectureData: Record<string, unknown>): Promise<LectureRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_lectures')
    .update({ ...lectureData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as LectureRecord;
};

/**
 * 강의안 삭제
 */
export const deleteLecture = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_lectures')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 강의안 조회수 증가
 */
export const incrementLectureViews = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('brand_increment_lecture_views', { lecture_id: id });
  } catch {
    // ignore
  }
};

/**
 * 전체 회원 프로필 조회 (관리자 전용 — RLS 정책 필요)
 */
export const getAllProfiles = async (): Promise<ProfileRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const domain = window.location.hostname;

  const { data, error } = await client
    .from('user_profiles')
    .select('*')
    .eq('signup_domain', domain)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getAllProfiles error:', error);
    return [];
  }

  return (data as ProfileRecord[]) || [];
};

/**
 * 최근 접속 시간 업데이트 (RPC: update_last_login)
 */
export const updateLastLogin = async (userId: string): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('update_last_login', { target_user_id: userId });
  } catch {
    // ignore
  }
};

// ─── Gallery ───

const GALLERY_PER_PAGE = 12;

export const getGalleryItems = async (page = 1, category: string | null = null): Promise<{ items: GalleryRecord[]; total: number }> => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  let query = client
    .from('brand_gallery')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * GALLERY_PER_PAGE;
  const to = from + GALLERY_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getGalleryItems error:', error);
    return { items: [], total: 0 };
  }

  return { items: (data as GalleryRecord[]) || [], total: count || 0 };
};

export const getGalleryItemById = async (id: string | undefined): Promise<GalleryRecord | null> => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('brand_gallery')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getGalleryItemById error:', error);
    return null;
  }

  return data as GalleryRecord;
};

export const createGalleryItem = async (itemData: Record<string, unknown>): Promise<GalleryRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_gallery')
    .insert({ ...itemData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as GalleryRecord;
};

export const updateGalleryItem = async (id: string | undefined, itemData: Record<string, unknown>): Promise<GalleryRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_gallery')
    .update(itemData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as GalleryRecord;
};

export const deleteGalleryItem = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_gallery')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementGalleryViews = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('brand_increment_gallery_views', { item_id: id });
  } catch {
    // ignore
  }
};

export const getGalleryComments = async (galleryId: string | undefined): Promise<GalleryCommentRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('brand_gallery_comments')
    .select('*')
    .eq('gallery_id', galleryId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getGalleryComments error:', error);
    return [];
  }

  return (data as GalleryCommentRecord[]) || [];
};

export const createGalleryComment = async (commentData: Record<string, unknown>): Promise<GalleryCommentRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_gallery_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as GalleryCommentRecord;
};

export const deleteGalleryComment = async (id: number): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_gallery_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// ─── Portfolio ───

const PORTFOLIO_PER_PAGE = 12;

export const getPortfolios = async (page = 1): Promise<{ items: PortfolioRecord[]; total: number }> => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  const from = (page - 1) * PORTFOLIO_PER_PAGE;
  const to = from + PORTFOLIO_PER_PAGE - 1;

  const { data, error, count } = await client
    .from('brand_portfolio')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    console.error('getPortfolios error:', error);
    return { items: [], total: 0 };
  }

  return { items: (data as PortfolioRecord[]) || [], total: count || 0 };
};

export const getPortfolioById = async (id: string | undefined): Promise<PortfolioRecord | null> => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('brand_portfolio')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getPortfolioById error:', error);
    return null;
  }

  return data as PortfolioRecord;
};

export const createPortfolio = async (portfolioData: Record<string, unknown>): Promise<PortfolioRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_portfolio')
    .insert({ ...portfolioData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as PortfolioRecord;
};

export const updatePortfolio = async (id: string | undefined, portfolioData: Record<string, unknown>): Promise<PortfolioRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_portfolio')
    .update(portfolioData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as PortfolioRecord;
};

export const deletePortfolio = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_portfolio')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementPortfolioViews = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('brand_increment_portfolio_views', { item_id: id });
  } catch {
    // ignore
  }
};

export const getPortfolioComments = async (portfolioId: string | undefined): Promise<PortfolioCommentRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('brand_portfolio_comments')
    .select('*')
    .eq('portfolio_id', portfolioId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getPortfolioComments error:', error);
    return [];
  }

  return (data as PortfolioCommentRecord[]) || [];
};

export const createPortfolioComment = async (commentData: Record<string, unknown>): Promise<PortfolioCommentRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_portfolio_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as PortfolioCommentRecord;
};

export const deletePortfolioComment = async (id: number): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_portfolio_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// ─── Websites (웹 추천사이트) ───

const WEBSITES_PER_PAGE = 12;

export const getWebsites = async (page = 1, category: string | null = null): Promise<{ items: WebsiteRecord[]; total: number }> => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  let query = client
    .from('brand_websites')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * WEBSITES_PER_PAGE;
  const to = from + WEBSITES_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getWebsites error:', error);
    return { items: [], total: 0 };
  }

  return { items: (data as WebsiteRecord[]) || [], total: count || 0 };
};

export const getWebsiteById = async (id: string | undefined): Promise<WebsiteRecord | null> => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('brand_websites')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getWebsiteById error:', error);
    return null;
  }

  return data as WebsiteRecord;
};

export const createWebsite = async (itemData: Record<string, unknown>): Promise<WebsiteRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_websites')
    .insert({ ...itemData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as WebsiteRecord;
};

export const updateWebsite = async (id: string | undefined, itemData: Record<string, unknown>): Promise<WebsiteRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_websites')
    .update(itemData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as WebsiteRecord;
};

export const deleteWebsite = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_websites')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementWebsiteViews = async (id: string | undefined): Promise<void> => {
  const client = getSupabase();
  if (!client) return;

  try {
    await client.rpc('brand_increment_website_views', { item_id: id });
  } catch {
    // ignore
  }
};

export const getWebsiteComments = async (websiteId: string | undefined): Promise<WebsiteCommentRecord[]> => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('brand_websites_comments')
    .select('*')
    .eq('website_id', websiteId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getWebsiteComments error:', error);
    return [];
  }

  return (data as WebsiteCommentRecord[]) || [];
};

export const createWebsiteComment = async (commentData: Record<string, unknown>): Promise<WebsiteCommentRecord> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('brand_websites_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data as WebsiteCommentRecord;
};

export const deleteWebsiteComment = async (id: number): Promise<void> => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('brand_websites_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export default getSupabase;

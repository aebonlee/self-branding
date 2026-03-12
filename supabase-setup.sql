-- ============================================================
-- 셀프 브랜딩 마케팅 학습 사이트 — Supabase 테이블 & RPC 설정
-- ============================================================
-- 이 SQL을 Supabase Dashboard > SQL Editor 에서 실행하세요.
-- koreatech 프로젝트와 동일한 DB 인스턴스를 공유합니다.
-- ============================================================

-- ─── 1. user_profiles (사용자 프로필) ───────────────────────
-- Supabase Auth의 auth.users 와 1:1 매핑
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  signup_domain TEXT DEFAULT '',
  is_blocked BOOLEAN DEFAULT FALSE,
  is_suspended BOOLEAN DEFAULT FALSE,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 신규 사용자 자동 프로필 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, avatar_url, signup_domain)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    COALESCE(NEW.raw_user_meta_data->>'signup_domain', '')
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = COALESCE(EXCLUDED.full_name, user_profiles.full_name),
    avatar_url = COALESCE(EXCLUDED.avatar_url, user_profiles.avatar_url),
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ─── 2. posts (자유게시판) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT DEFAULT 'free',      -- 'notice', 'question', 'free'
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 3. comments (게시판 댓글) ──────────────────────────────
CREATE TABLE IF NOT EXISTS comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 4. lectures (참고자료/강의안) ──────────────────────────
CREATE TABLE IF NOT EXISTS lectures (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  week_number INTEGER,
  file_url TEXT,
  file_name TEXT,
  is_published BOOLEAN DEFAULT TRUE,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 5. gallery (갤러리) ────────────────────────────────────
CREATE TABLE IF NOT EXISTS gallery (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  category TEXT DEFAULT 'artwork',   -- 'artwork', 'project', 'screenshot', 'coding'
  image_url TEXT,
  thumbnail_url TEXT,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 6. gallery_comments (갤러리 댓글) ──────────────────────
CREATE TABLE IF NOT EXISTS gallery_comments (
  id BIGSERIAL PRIMARY KEY,
  gallery_id BIGINT REFERENCES gallery(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 7. portfolio (포트폴리오) ──────────────────────────────
CREATE TABLE IF NOT EXISTS portfolio (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  project_url TEXT,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 8. portfolio_comments (포트폴리오 댓글) ────────────────
CREATE TABLE IF NOT EXISTS portfolio_comments (
  id BIGSERIAL PRIMARY KEY,
  portfolio_id BIGINT REFERENCES portfolio(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 9. websites (추천 웹사이트) ────────────────────────────
CREATE TABLE IF NOT EXISTS websites (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  category TEXT DEFAULT 'reference', -- 'education', 'devtool', 'design', 'ai', 'reference'
  url TEXT,
  image_url TEXT,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 10. websites_comments (웹사이트 댓글) ──────────────────
CREATE TABLE IF NOT EXISTS websites_comments (
  id BIGSERIAL PRIMARY KEY,
  website_id BIGINT REFERENCES websites(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT DEFAULT '',
  author_email TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- RPC 함수 (조회수 증가, 최근 접속 업데이트)
-- ============================================================

-- 게시판 조회수 증가
CREATE OR REPLACE FUNCTION increment_views(post_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE posts SET views = views + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 강의안 조회수 증가
CREATE OR REPLACE FUNCTION increment_lecture_views(lecture_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE lectures SET views = views + 1 WHERE id = lecture_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 갤러리 조회수 증가
CREATE OR REPLACE FUNCTION increment_gallery_views(item_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE gallery SET views = views + 1 WHERE id = item_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 포트폴리오 조회수 증가
CREATE OR REPLACE FUNCTION increment_portfolio_views(item_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE portfolio SET views = views + 1 WHERE id = item_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 웹사이트 조회수 증가
CREATE OR REPLACE FUNCTION increment_website_views(item_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE websites SET views = views + 1 WHERE id = item_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 최근 접속 시간 업데이트
CREATE OR REPLACE FUNCTION update_last_login(target_user_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE user_profiles SET last_login = NOW() WHERE id = target_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- RLS (Row Level Security) 정책
-- ============================================================

-- user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admin can view all profiles" ON user_profiles FOR SELECT USING (TRUE);

-- posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read posts" ON posts FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated users can create posts" ON posts FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own posts" ON posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own posts" ON posts FOR DELETE USING (auth.uid() = author_id);

-- comments
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read comments" ON comments FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated users can create comments" ON comments FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can delete own comments" ON comments FOR DELETE USING (auth.uid() = author_id);

-- lectures
ALTER TABLE lectures ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published lectures" ON lectures FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Authenticated users can create lectures" ON lectures FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own lectures" ON lectures FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own lectures" ON lectures FOR DELETE USING (auth.uid() = author_id);

-- gallery
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read gallery" ON gallery FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated users can create gallery" ON gallery FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own gallery" ON gallery FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own gallery" ON gallery FOR DELETE USING (auth.uid() = author_id);

-- gallery_comments
ALTER TABLE gallery_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read gallery comments" ON gallery_comments FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can create gallery comments" ON gallery_comments FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can delete own gallery comments" ON gallery_comments FOR DELETE USING (auth.uid() = author_id);

-- portfolio
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read portfolio" ON portfolio FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated users can create portfolio" ON portfolio FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own portfolio" ON portfolio FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own portfolio" ON portfolio FOR DELETE USING (auth.uid() = author_id);

-- portfolio_comments
ALTER TABLE portfolio_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read portfolio comments" ON portfolio_comments FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can create portfolio comments" ON portfolio_comments FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can delete own portfolio comments" ON portfolio_comments FOR DELETE USING (auth.uid() = author_id);

-- websites
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read websites" ON websites FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated users can create websites" ON websites FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own websites" ON websites FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own websites" ON websites FOR DELETE USING (auth.uid() = author_id);

-- websites_comments
ALTER TABLE websites_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read website comments" ON websites_comments FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can create website comments" ON websites_comments FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can delete own website comments" ON websites_comments FOR DELETE USING (auth.uid() = author_id);

-- ============================================================
-- 완료!
-- Supabase Auth > Providers 에서 Google, Kakao OAuth도 설정하세요.
-- ============================================================

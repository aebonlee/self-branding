# 셀프 브랜딩 마케팅 학습 사이트 - 개발일지

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 셀프 브랜딩 마케팅 (Self-Branding Marketing) |
| **설명** | 기업홍보부터 개인브랜딩까지 - 셀프 브랜딩 마케팅 종합 학습 플랫폼 |
| **기술 스택** | React 19 + Vite 7 + React Router Dom 7 + Supabase |
| **배포** | GitHub Pages (aebonlee/self-branding) |
| **도메인** | self-branding.dreamitbiz.com |
| **참고 프로젝트** | D:\koreatech (컴퓨팅 사고 학습 사이트) |

---

## 개발 일정

### 2026-03-13 — 프로젝트 초기화 및 전체 구현

#### Phase 1: 프로젝트 초기화 & 인프라 구축

**생성 파일:**
- `package.json` — React 19, Vite 7, react-router-dom 7, @supabase/supabase-js 의존성
- `vite.config.js` — base: '/self-branding/', 개발 서버 포트 5175, copy-404 plugin (SPA GitHub Pages 지원)
- `index.html` — Noto Sans KR 폰트, 셀프 브랜딩 메타태그, theme-color #0046C8
- `.env.example` — Supabase URL/Key 환경변수 템플릿
- `.gitignore` — node_modules, dist, .env 등 제외
- `public/favicon.svg` — SB 로고 (파란색 #0046C8 배경, 흰색 텍스트)
- `public/CNAME` — selfbranding.dreamitbiz.com

#### Phase 2: 코어 인프라 (koreatech 기반 적응)

**진입점 & 설정:**
- `src/main.jsx` — React DOM createRoot, StrictMode, BrowserRouter (basename="/self-branding")
- `src/App.jsx` — 4개 Provider 감싸기 (Auth → Theme → Language → Toast) + PublicLayout
- `src/config/site.js` — 셀프 브랜딩 전용 네비게이션 메뉴 (브랜딩기초, 12주차, 마케팅도구, 강의자료, 참고자료, 커뮤니티), 브랜드 파츠 (Self/Brand/ing), 푸터 링크
- `src/config/admin.js` — 관리자 이메일 설정

**Contexts (4개, koreatech 동일 패턴):**
- `src/contexts/ThemeContext.jsx` — 다크/라이트/오토 모드 + 5색 컬러 테마 (blue, red, green, purple, orange)
- `src/contexts/LanguageContext.jsx` — 한/영 전환, dot-notation 키 리졸버
- `src/contexts/AuthContext.jsx` — Supabase 인증 (이메일, Google, Kakao OAuth)
- `src/contexts/ToastContext.jsx` — 토스트 알림 시스템

**Hooks (3개, koreatech 동일):**
- `src/hooks/useAOS.js` — IntersectionObserver 기반 스크롤 애니메이션
- `src/hooks/useCodeCopy.js` — 코드 블록 복사 버튼 자동 추가
- `src/hooks/useTableScroller.js` — 반응형 테이블 스크롤 화살표

**Utils (4개):**
- `src/utils/supabase.js` — Supabase CRUD 헬퍼 (posts, gallery, portfolio, websites, lectures, comments)
- `src/utils/auth.js` — 인증 헬퍼 (로그인, 회원가입, 비밀번호 재설정, OAuth)
- `src/utils/searchStorage.js` — 클라이언트 검색 인덱싱
- `src/utils/translations.js` — 한/영 번역 데이터 (전체 UI 텍스트)

#### Phase 3: 공통 컴포넌트 & 레이아웃

**Components (6개):**
- `src/components/layout/Navbar.jsx` — 글라스모피즘 네비바, 드롭다운 메뉴, 반응형 햄버거
- `src/components/layout/Footer.jsx` — 사이트 정보, 퀵 링크, 소셜 링크
- `src/components/AuthGuard.jsx` — 인증 필요 라우트 보호
- `src/components/SearchModal.jsx` — 전체 사이트 검색 모달
- `src/components/Pagination.jsx` — 게시판 페이지네이션
- `src/components/SEOHead.jsx` — 동적 meta 태그, Open Graph

**Layouts:**
- `src/layouts/PublicLayout.jsx` — 전체 라우팅 정의 (lazy loading), Navbar + main + Footer 구조

#### Phase 4: 스타일 시스템 (11개 CSS 파일)

- `src/styles/base.css` — CSS 변수 시스템, 기본 타이포그래피
- `src/styles/navbar.css` — 글라스모피즘 네비바 스타일
- `src/styles/hero.css` — 히어로 섹션 그라디언트
- `src/styles/footer.css` — 푸터 레이아웃
- `src/styles/auth.css` — 로그인/회원가입 폼
- `src/styles/animations.css` — AOS 애니메이션, 트랜지션
- `src/styles/search.css` — 검색 모달 스타일
- `src/styles/toast.css` — 토스트 알림 스타일
- `src/styles/dark-mode.css` — 다크모드 변수 오버라이드
- `src/styles/responsive.css` — 반응형 미디어 쿼리
- `src/styles/site.css` — 메인 콘텐츠 스타일 (page-header, lesson-body, callout-box, exercise-box, lesson-table, lesson-nav, board, gallery, portfolio, admin 등)
- `src/index.css` — CSS 파일 @import 엔트리포인트

#### Phase 5: 학습 콘텐츠 페이지 (새로 작성)

**Home (1개):**
- `src/pages/Home.jsx` — 랜딩 페이지 (Hero, 브랜딩소개, 12주차 카드그리드, 마케팅도구 카드그리드)

**브랜딩 기초 (4개):**
- `src/pages/WhatIsBranding.jsx` — 셀프 브랜딩 정의, 필요성, 기업/개인 브랜딩 차이
- `src/pages/LearningRoadmap.jsx` — 12주 학습 로드맵 시각화
- `src/pages/Syllabus.jsx` — 강의계획서 (주차별 상세 내용)
- `src/pages/PracticeGuide.jsx` — 실습 안내 (도구, 과제 설명)

**12주차 커리큘럼 (13개):**
- `src/pages/BrandingLesson.jsx` — 커리큘럼 허브 페이지 (12주 카드 그리드)
- `src/pages/BrandingWeek1.jsx` — 1주차: 셀프 브랜딩 개론
- `src/pages/BrandingWeek2.jsx` — 2주차: 자기분석 & 핵심가치
- `src/pages/BrandingWeek3.jsx` — 3주차: 타겟 오디언스 분석
- `src/pages/BrandingWeek4.jsx` — 4주차: 브랜드 아이덴티티
- `src/pages/BrandingWeek5.jsx` — 5주차: 디지털 마케팅 기초
- `src/pages/BrandingWeek6.jsx` — 6주차: SNS 마케팅 전략
- `src/pages/BrandingWeek7.jsx` — 7주차: 콘텐츠 마케팅
- `src/pages/BrandingWeek8.jsx` — 8주차: 기업 홍보 & PR
- `src/pages/BrandingWeek9.jsx` — 9주차: 개인 브랜딩 실전
- `src/pages/BrandingWeek10.jsx` — 10주차: 포트폴리오 브랜딩
- `src/pages/BrandingWeek11.jsx` — 11주차: 마케팅 분석 & KPI
- `src/pages/BrandingWeek12.jsx` — 12주차: 종합 프로젝트

**마케팅 도구 가이드 (9개):**
- `src/pages/MarketingToolsHome.jsx` — 마케팅 도구 허브 페이지
- `src/pages/ToolInstagram.jsx` — 인스타그램 마케팅
- `src/pages/ToolYouTube.jsx` — 유튜브 마케팅
- `src/pages/ToolBlog.jsx` — 블로그/SEO 마케팅
- `src/pages/ToolLinkedIn.jsx` — 링크드인 마케팅
- `src/pages/ToolEmail.jsx` — 이메일 마케팅
- `src/pages/ToolAds.jsx` — 광고 마케팅 (Google Ads, Meta Ads)
- `src/pages/ToolDesign.jsx` — 디자인 도구 (Canva, Figma)
- `src/pages/ToolAI.jsx` — AI 활용 마케팅

#### Phase 6: 커뮤니티 & 인증 페이지 (koreatech 기반 적응)

**인증 (4개):**
- `src/pages/Login.jsx` — 로그인 (이메일 + Google/Kakao OAuth)
- `src/pages/Register.jsx` — 회원가입
- `src/pages/ForgotPassword.jsx` — 비밀번호 재설정
- `src/pages/MyPage.jsx` — 마이페이지 (프로필 관리)

**커뮤니티 (15개):**
- `src/pages/Board.jsx` / `BoardDetail.jsx` / `BoardWrite.jsx` — 자유게시판
- `src/pages/Gallery.jsx` / `GalleryDetail.jsx` / `GalleryWrite.jsx` — 갤러리
- `src/pages/Portfolio.jsx` / `PortfolioDetail.jsx` / `PortfolioWrite.jsx` — 포트폴리오
- `src/pages/Websites.jsx` / `WebsiteDetail.jsx` / `WebsiteWrite.jsx` — 웹사이트 추천
- `src/pages/Lectures.jsx` / `LectureDetail.jsx` / `LectureWrite.jsx` — 참고자료
- `src/pages/LectureMaterials.jsx` — 강의자료

**관리자 & 기타:**
- `src/pages/Admin.jsx` — 관리자 페이지 (사용자 관리, 게시물 관리)
- `src/pages/NotFound.jsx` — 404 페이지

---

## 라우팅 구조

| 경로 | 페이지 | 인증필요 |
|------|--------|---------|
| `/` | Home | - |
| `/branding/what-is-branding` | WhatIsBranding | - |
| `/branding/roadmap` | LearningRoadmap | - |
| `/branding/syllabus` | Syllabus | - |
| `/branding/practice-guide` | PracticeGuide | - |
| `/lessons` | BrandingLesson (허브) | - |
| `/lessons/intro` | BrandingWeek1 | - |
| `/lessons/self-analysis` | BrandingWeek2 | - |
| `/lessons/target-audience` | BrandingWeek3 | - |
| `/lessons/brand-identity` | BrandingWeek4 | - |
| `/lessons/digital-marketing` | BrandingWeek5 | - |
| `/lessons/sns-marketing` | BrandingWeek6 | - |
| `/lessons/content-marketing` | BrandingWeek7 | - |
| `/lessons/corporate-pr` | BrandingWeek8 | - |
| `/lessons/personal-branding` | BrandingWeek9 | - |
| `/lessons/portfolio-branding` | BrandingWeek10 | - |
| `/lessons/marketing-analytics` | BrandingWeek11 | - |
| `/lessons/final-project` | BrandingWeek12 | - |
| `/tools` | MarketingToolsHome (허브) | - |
| `/tools/instagram` | ToolInstagram | - |
| `/tools/youtube` | ToolYouTube | - |
| `/tools/blog` | ToolBlog | - |
| `/tools/linkedin` | ToolLinkedIn | - |
| `/tools/email` | ToolEmail | - |
| `/tools/ads` | ToolAds | - |
| `/tools/design` | ToolDesign | - |
| `/tools/ai` | ToolAI | - |
| `/lectures` | LectureMaterials | - |
| `/references` | Lectures | - |
| `/references/:id` | LectureDetail | - |
| `/references/write` | LectureWrite | O |
| `/community/board` | Board | - |
| `/community/board/:id` | BoardDetail | - |
| `/community/board/write` | BoardWrite | O |
| `/community/gallery` | Gallery | - |
| `/community/gallery/:id` | GalleryDetail | - |
| `/community/gallery/write` | GalleryWrite | O |
| `/community/portfolio` | Portfolio | - |
| `/community/portfolio/:id` | PortfolioDetail | - |
| `/community/portfolio/write` | PortfolioWrite | O |
| `/community/websites` | Websites | - |
| `/community/websites/:id` | WebsiteDetail | - |
| `/community/websites/write` | WebsiteWrite | O |
| `/login` | Login | - |
| `/register` | Register | - |
| `/forgot-password` | ForgotPassword | - |
| `/mypage` | MyPage | O |
| `/admin` | Admin | O |

---

## 기술 아키텍처

### 프로젝트 구조 요약
```
D:\self-branding/
├── public/           # 정적 파일 (favicon, CNAME)
├── src/
│   ├── components/   # 공통 컴포넌트 (7개)
│   ├── config/       # 사이트 설정 (2개)
│   ├── contexts/     # React Context (4개)
│   ├── hooks/        # 커스텀 훅 (3개)
│   ├── layouts/      # 레이아웃 (1개)
│   ├── pages/        # 페이지 컴포넌트 (~50개)
│   ├── styles/       # CSS 스타일 (12개)
│   └── utils/        # 유틸리티 (4개)
├── index.html
├── package.json
└── vite.config.js
```

### 총 파일 수: ~80개

| 카테고리 | 파일 수 | 재사용 방식 |
|----------|---------|------------|
| 인프라 (config, contexts, hooks, utils) | 13 | koreatech에서 적응 |
| 컴포넌트 & 레이아웃 | 7 | koreatech에서 적응 |
| 스타일 | 12 | koreatech에서 복사 |
| 학습 콘텐츠 (새로 작성) | ~27 | 완전 신규 작성 |
| 커뮤니티 & 인증 | 19 | koreatech에서 적응 |
| 설정 파일 | 5 | 신규 작성 |

### 주요 특징
- **Lazy Loading**: 모든 페이지 React.lazy() + Suspense로 코드 스플리팅
- **다크모드**: CSS 변수 기반 다크/라이트/오토 + 5색 컬러 테마
- **다국어**: 한/영 전환 (LanguageContext + translations.js)
- **반응형**: 모바일 퍼스트 반응형 디자인
- **SEO**: 동적 메타태그 + Open Graph
- **SPA on GitHub Pages**: 404.html copy plugin으로 클라이언트 사이드 라우팅 지원

---

## 배포 정보

- **GitHub Repository**: aebonlee/self-branding
- **Branch**: main
- **배포 방식**: GitHub Pages (gh-pages branch via `npm run deploy`)
- **커스텀 도메인**: self-branding.dreamitbiz.com (CNAME)
- **빌드 명령어**: `npm run build`
- **개발 서버**: `npm run dev` (포트 5175)

---

## 변경 이력

| 날짜 | 커밋 | 내용 |
|------|------|------|
| 2026-03-13 | `7019dd4` | feat: 셀프 브랜딩 마케팅 학습 사이트 초기 구현 (92파일) |
| 2026-03-13 | `3ef0315` | update: BrandingWeek9, Week12 콘텐츠 보강 |
| 2026-03-13 | `8401ea0` | chore: gh-pages deploy 스크립트 추가 |
| 2026-03-13 | `30e1187` | update: BrandingWeek6, ToolAds, ToolEmail 콘텐츠 보강 |
| 2026-03-13 | `5d17f1e` | fix: base URL '/' 변경 (커스텀 도메인 대응) |
| 2026-03-13 | `da84b7a` | update: BrandingWeek9-10, ToolAI, ToolDesign 콘텐츠 보강 |
| 2026-03-13 | `725d1cb` | fix: CNAME 도메인 수정 (self-branding.dreamitbiz.com) |
| 2026-03-13 | `9c051ac` | docs: 개발일지 업데이트 및 Supabase SQL 설정 파일 추가 |
| 2026-03-13 | `ebe5f7a` | feat: Open Graph 메타 태그 추가 및 BASE URL 수정 |
| 2026-03-13 | `9d1f0e1` | docs: README.md 작성, Supabase 설정 점검 및 수정 |
| 2026-03-13 | `e81bca4` | fix: ErrorBoundary 추가, 빈페이지 문제 분석 및 재배포 |
| 2026-03-13 | `64056d3` | chore: sharp devDependency 추가 (OG 이미지 변환용) |
| 2026-03-14 | — | fix: useAOS 개선 — ScrollToTop, fallback 타이머, 라우트 감지 추가 |

---

## Supabase 설정 점검 결과 (2026-03-13)

### 점검 요약

| 항목 | 상태 | 세부 내용 |
|------|------|-----------|
| **테이블 (10개)** | ✅ 완전 | 코드에서 사용하는 모든 테이블이 SQL에 정의됨 |
| **RPC 함수 (8개)** | ✅ 수정완료 | `check_user_status` 누락 → 추가 완료 |
| **RLS 정책** | ✅ 수정완료 | 댓글 테이블 UPDATE 정책 4개 추가 |
| **인증** | ✅ 완전 | Google, Kakao, Email 모두 설정됨 |
| **환경변수 (5개)** | ✅ 완전 | 모두 문서화됨 |
| **스토리지** | ℹ️ 미사용 | 파일 업로드 기능 없음 (URL 방식) |

### 수정 내역
1. **`check_user_status` RPC 함수 추가** — AuthContext에서 호출하나 SQL에 미정의 → 추가
2. **댓글 테이블 UPDATE 정책 4건 추가** — comments, gallery_comments, portfolio_comments, websites_comments

---

## 빈페이지 문제 분석 및 해결 (2026-03-13)

### 증상
- 12주차 커리큘럼 중 4-12주차 페이지가 배포 사이트에서 빈페이지로 표시
- 마케팅 도구 중 디자인 도구 페이지가 빈페이지로 표시
- 1-3주차 및 나머지 도구 페이지는 정상

### 분석 결과

| 점검 항목 | 결과 |
|-----------|------|
| 소스코드 (20개 파일) | ✅ 모든 파일 268~695줄 정상 콘텐츠 |
| JSX 구조 | ✅ 태그 균형, 프래그먼트 닫힘, export 정상 |
| 빌드 출력 (54개 청크) | ✅ 모든 청크 13-42KB 정상 크기 |
| 라우팅 (PublicLayout) | ✅ 모든 경로 정상 매핑 |
| CSS 클래스 | ✅ 작동/미작동 페이지 동일 패턴 |
| 인코딩/특수문자 | ✅ BOM/NULL/NBSP/ZWS 없음 |
| 컴파일된 JS 비교 | ✅ 구조 동일 (jsxs/jsx/export) |
| GitHub Pages 배포 | ✅ 모든 54개 에셋 HTTP 200 확인 |

### 원인 추정
- GitHub Pages CDN 전파 지연: HTML이 먼저 갱신되고 JS 청크가 아직 전파되지 않은 상태에서 접속 시 빈페이지 발생 가능
- 브라우저 캐시: 이전 배포의 index.html이 캐시되어 존재하지 않는 청크 해시 참조

### 근본 원인
- **ScrollToTop 미구현**: SPA에서 페이지 이동 시 스크롤 위치가 유지되어, 새 페이지의 `[data-aos]` 요소가 뷰포트 밖에 위치
- **AOS IntersectionObserver 미트리거**: `opacity: 0` 상태의 요소가 뷰포트에 들어오지 않으면 영원히 보이지 않음
- 1-3주차는 짧은 페이지라 대부분 뷰포트 안에 있어 정상 작동, 4주차부터 긴 콘텐츠로 인해 문제 발생

### 해결 조치
1. **useAOS 개선** (`src/hooks/useAOS.js`)
   - `useLocation()` 감지하여 라우트 변경 시 `window.scrollTo(0, 0)` 실행
   - `threshold: 0.1 → 0.05`, `rootMargin: -50px → 0px` (더 민감하게)
   - DOM 렌더링 보장을 위해 50ms 딜레이 후 observe 시작
   - **1초 fallback 타이머** — AOS가 실패해도 콘텐츠 강제 표시
   - 라우트 변경 시 이전 `aos-animate` 클래스 초기화 (애니메이션 재생)
2. **ErrorBoundary 컴포넌트 추가** — 런타임 에러 시 오류 메시지 표시
3. **클린 빌드 후 재배포**

---

## Supabase 데이터베이스 구조

### 테이블 목록

| # | 테이블명 | 용도 | 주요 컬럼 |
|---|----------|------|-----------|
| 1 | `user_profiles` | 사용자 프로필 | id(UUID), email, full_name, avatar_url, signup_domain, is_blocked, last_login |
| 2 | `posts` | 자유게시판 | id, title, content, category, author_id, author_name, views |
| 3 | `comments` | 게시판 댓글 | id, post_id(FK), content, author_id, author_name |
| 4 | `lectures` | 참고자료/강의안 | id, title, content, week_number, file_url, is_published, views |
| 5 | `gallery` | 갤러리 | id, title, content, category, image_url, thumbnail_url, views |
| 6 | `gallery_comments` | 갤러리 댓글 | id, gallery_id(FK), content, author_id |
| 7 | `portfolio` | 포트폴리오 | id, title, summary, content, cover_image, tags[], project_url, views |
| 8 | `portfolio_comments` | 포트폴리오 댓글 | id, portfolio_id(FK), content, author_id |
| 9 | `websites` | 추천 웹사이트 | id, title, content, category, url, image_url, views |
| 10 | `websites_comments` | 웹사이트 댓글 | id, website_id(FK), content, author_id |

### RPC 함수

| 함수명 | 파라미터 | 용도 |
|--------|----------|------|
| `increment_views` | post_id (BIGINT) | 게시판 조회수 +1 |
| `increment_lecture_views` | lecture_id (BIGINT) | 강의안 조회수 +1 |
| `increment_gallery_views` | item_id (BIGINT) | 갤러리 조회수 +1 |
| `increment_portfolio_views` | item_id (BIGINT) | 포트폴리오 조회수 +1 |
| `increment_website_views` | item_id (BIGINT) | 웹사이트 조회수 +1 |
| `update_last_login` | target_user_id (UUID) | 최근 접속 시간 갱신 |
| `check_user_status` | target_user_id (UUID), current_domain (TEXT) | 사용자 차단/정지 상태 확인 |
| `handle_new_user` | (트리거) | 신규 가입 시 user_profiles 자동 생성 |

### 인증 설정 (Supabase Auth)

| 항목 | 설정 |
|------|------|
| **이메일 로그인** | 활성화 (이메일/비밀번호) |
| **Google OAuth** | Providers > Google 활성화 필요 |
| **Kakao OAuth** | Providers > Kakao 활성화 필요 |
| **Auth Flow** | PKCE |
| **Redirect URL** | `https://self-branding.dreamitbiz.com` |

### 환경 변수 (.env)

```
VITE_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

### SQL 셋업 파일

`supabase-setup.sql` — 모든 테이블, RPC 함수, RLS 정책이 포함된 SQL 파일.
Supabase Dashboard > SQL Editor에서 실행하여 DB를 초기화할 수 있습니다.

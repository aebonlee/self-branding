# 셀프 브랜딩 마케팅 학습 사이트 - 개발일지

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 셀프 브랜딩 마케팅 (Self-Branding Marketing) |
| **설명** | 기업홍보부터 개인브랜딩까지 - 셀프 브랜딩 마케팅 종합 학습 플랫폼 |
| **기술 스택** | React 19 + Vite 7 + React Router Dom 7 + Supabase |
| **배포** | GitHub Pages (aebonlee/self-branding) |
| **도메인** | selfbranding.dreamitbiz.com |
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
│   ├── components/   # 공통 컴포넌트 (6개)
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
- **커스텀 도메인**: selfbranding.dreamitbiz.com (CNAME)
- **빌드 명령어**: `npm run build`
- **개발 서버**: `npm run dev` (포트 5175)

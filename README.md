# Self-Branding Marketing

**셀프 브랜딩 마케팅 종합 학습 플랫폼**

기업홍보부터 개인브랜딩까지 - 15주차 커리큘럼 기반의 셀프 브랜딩 마케팅 학습 사이트

## Demo

https://self-branding.dreamitbiz.com

## Tech Stack

| 항목 | 기술 |
|------|------|
| Frontend | React 19 + Vite 7 |
| Routing | React Router Dom 7 |
| Backend | Supabase (Auth, Database, RLS) |
| Deployment | GitHub Pages (gh-pages) |
| Domain | self-branding.dreamitbiz.com |

## Features

- **15주차 커리큘럼** - 셀프 브랜딩 개론부터 중간고사, 종합 프로젝트, 기말고사까지 (한국 대학 학기 형식)
- **마케팅 도구 가이드 8종** - Instagram, YouTube, Blog, LinkedIn, Email, Ads, Design, AI
- **커뮤니티** - 자유게시판, 갤러리, 포트폴리오, 웹사이트 추천
- **인증** - 이메일, Google OAuth, Kakao OAuth
- **다크모드** - 라이트/다크/오토 + 5색 컬러 테마
- **다국어** - 한국어/영어 전환
- **반응형** - 모바일 퍼스트 디자인
- **SEO** - Open Graph 메타 태그, 동적 title/description

## 15-Week Curriculum

| 주차 | 주제 |
|------|------|
| 1 | 셀프 브랜딩 개론 |
| 2 | 자기분석 & 핵심가치 |
| 3 | 타겟 오디언스 분석 |
| 4 | 브랜드 아이덴티티 |
| 5 | 디지털 마케팅 기초 |
| 6 | SNS 마케팅 전략 |
| 7 | 콘텐츠 마케팅 |
| **8** | **중간고사** (1~7주차 종합 평가) |
| 9 | 기업 홍보 & PR |
| 10 | 개인 브랜딩 실전 |
| 11 | 포트폴리오 브랜딩 |
| 12 | 마케팅 분석 & KPI |
| 13 | 종합 프로젝트 |
| **14** | **프로젝트 발표 & 피드백** |
| **15** | **기말고사** (9~14주차 종합 평가) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/aebonlee/self-branding.git
cd self-branding
npm install
```

### Environment Variables

`.env` 파일을 생성하고 아래 변수를 설정합니다:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_KAKAO_CLIENT_ID=your-kakao-client-id
VITE_SITE_URL=https://self-branding.dreamitbiz.com
```

### Development

```bash
npm run dev    # http://localhost:5175
```

### Build & Deploy

```bash
npm run build    # dist/ 폴더에 빌드
npm run deploy   # gh-pages 브랜치로 배포
```

## Database Setup

Supabase Dashboard > SQL Editor에서 `supabase-setup.sql`을 실행합니다.

### Tables (10)

`user_profiles`, `posts`, `comments`, `lectures`, `gallery`, `gallery_comments`, `portfolio`, `portfolio_comments`, `websites`, `websites_comments`

### RPC Functions (8)

`increment_views`, `increment_lecture_views`, `increment_gallery_views`, `increment_portfolio_views`, `increment_website_views`, `update_last_login`, `check_user_status`, `handle_new_user`

### Auth Providers

- Email/Password
- Google OAuth
- Kakao OAuth

## Project Structure

```
src/
├── components/     # 공통 컴포넌트 (Navbar, Footer, SEOHead 등)
├── config/         # 사이트 설정, 관리자 설정
├── contexts/       # Theme, Language, Auth, Toast
├── hooks/          # useAOS, useCodeCopy, useTableScroller
├── layouts/        # PublicLayout (라우팅)
├── pages/          # ~50개 페이지 컴포넌트
├── styles/         # CSS 스타일 (12개)
└── utils/          # Supabase CRUD, Auth, 번역, 검색
```

## Documentation

- [DEVLOG.md](./DEVLOG.md) - 개발일지
- [supabase-setup.sql](./supabase-setup.sql) - DB 설정 SQL

## License

This project is for educational purposes.

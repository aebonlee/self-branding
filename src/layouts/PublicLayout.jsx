import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));

// 브랜딩 기초
const WhatIsBranding = lazy(() => import('../pages/WhatIsBranding'));
const LearningRoadmap = lazy(() => import('../pages/LearningRoadmap'));
const Syllabus = lazy(() => import('../pages/Syllabus'));
const PracticeGuide = lazy(() => import('../pages/PracticeGuide'));

// 12주차 커리큘럼
const BrandingLesson = lazy(() => import('../pages/BrandingLesson'));
const BrandingWeek1 = lazy(() => import('../pages/BrandingWeek1'));
const BrandingWeek2 = lazy(() => import('../pages/BrandingWeek2'));
const BrandingWeek3 = lazy(() => import('../pages/BrandingWeek3'));
const BrandingWeek4 = lazy(() => import('../pages/BrandingWeek4'));
const BrandingWeek5 = lazy(() => import('../pages/BrandingWeek5'));
const BrandingWeek6 = lazy(() => import('../pages/BrandingWeek6'));
const BrandingWeek7 = lazy(() => import('../pages/BrandingWeek7'));
const BrandingWeek8 = lazy(() => import('../pages/BrandingWeek8'));
const BrandingWeek9 = lazy(() => import('../pages/BrandingWeek9'));
const BrandingWeek10 = lazy(() => import('../pages/BrandingWeek10'));
const BrandingWeek11 = lazy(() => import('../pages/BrandingWeek11'));
const BrandingWeek12 = lazy(() => import('../pages/BrandingWeek12'));

// 마케팅 도구 가이드
const MarketingToolsHome = lazy(() => import('../pages/MarketingToolsHome'));
const ToolInstagram = lazy(() => import('../pages/ToolInstagram'));
const ToolYouTube = lazy(() => import('../pages/ToolYouTube'));
const ToolBlog = lazy(() => import('../pages/ToolBlog'));
const ToolLinkedIn = lazy(() => import('../pages/ToolLinkedIn'));
const ToolEmail = lazy(() => import('../pages/ToolEmail'));
const ToolAds = lazy(() => import('../pages/ToolAds'));
const ToolDesign = lazy(() => import('../pages/ToolDesign'));
const ToolAI = lazy(() => import('../pages/ToolAI'));

// 인증
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// 커뮤니티
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
const Gallery = lazy(() => import('../pages/Gallery'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetail'));
const GalleryWrite = lazy(() => import('../pages/GalleryWrite'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const PortfolioWrite = lazy(() => import('../pages/PortfolioWrite'));
const Websites = lazy(() => import('../pages/Websites'));
const WebsiteDetail = lazy(() => import('../pages/WebsiteDetail'));
const WebsiteWrite = lazy(() => import('../pages/WebsiteWrite'));
const LectureMaterials = lazy(() => import('../pages/LectureMaterials'));
const Lectures = lazy(() => import('../pages/Lectures'));
const LectureDetail = lazy(() => import('../pages/LectureDetail'));
const LectureWrite = lazy(() => import('../pages/LectureWrite'));

// 관리자 & 기타
const Admin = lazy(() => import('../pages/Admin'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />

            {/* 브랜딩 기초 */}
            <Route path="/branding/what-is-branding" element={<WhatIsBranding />} />
            <Route path="/branding/roadmap" element={<LearningRoadmap />} />
            <Route path="/branding/syllabus" element={<Syllabus />} />
            <Route path="/branding/practice-guide" element={<PracticeGuide />} />

            {/* 12주차 커리큘럼 */}
            <Route path="/lessons" element={<BrandingLesson />} />
            <Route path="/lessons/intro" element={<BrandingWeek1 />} />
            <Route path="/lessons/self-analysis" element={<BrandingWeek2 />} />
            <Route path="/lessons/target-audience" element={<BrandingWeek3 />} />
            <Route path="/lessons/brand-identity" element={<BrandingWeek4 />} />
            <Route path="/lessons/digital-marketing" element={<BrandingWeek5 />} />
            <Route path="/lessons/sns-marketing" element={<BrandingWeek6 />} />
            <Route path="/lessons/content-marketing" element={<BrandingWeek7 />} />
            <Route path="/lessons/corporate-pr" element={<BrandingWeek8 />} />
            <Route path="/lessons/personal-branding" element={<BrandingWeek9 />} />
            <Route path="/lessons/portfolio-branding" element={<BrandingWeek10 />} />
            <Route path="/lessons/marketing-analytics" element={<BrandingWeek11 />} />
            <Route path="/lessons/final-project" element={<BrandingWeek12 />} />

            {/* 마케팅 도구 */}
            <Route path="/tools" element={<MarketingToolsHome />} />
            <Route path="/tools/instagram" element={<ToolInstagram />} />
            <Route path="/tools/youtube" element={<ToolYouTube />} />
            <Route path="/tools/blog" element={<ToolBlog />} />
            <Route path="/tools/linkedin" element={<ToolLinkedIn />} />
            <Route path="/tools/email" element={<ToolEmail />} />
            <Route path="/tools/ads" element={<ToolAds />} />
            <Route path="/tools/design" element={<ToolDesign />} />
            <Route path="/tools/ai" element={<ToolAI />} />

            {/* Lectures */}
            <Route path="/lectures/materials" element={<LectureMaterials />} />
            <Route path="/lectures" element={<LectureMaterials />} />

            {/* References */}
            <Route path="/references" element={<Lectures />} />
            <Route path="/references/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/:id" element={<LectureDetail />} />

            {/* Community — Board */}
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/community/board/:id" element={<BoardDetail />} />

            {/* Community — Gallery */}
            <Route path="/community/gallery" element={<Gallery />} />
            <Route path="/community/gallery/write" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/edit/:id" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/:id" element={<GalleryDetail />} />

            {/* Community — Portfolio */}
            <Route path="/community/portfolio" element={<Portfolio />} />
            <Route path="/community/portfolio/write" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/edit/:id" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/:id" element={<PortfolioDetail />} />

            {/* Community — Websites */}
            <Route path="/community/websites" element={<Websites />} />
            <Route path="/community/websites/write" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/edit/:id" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/:id" element={<WebsiteDetail />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;

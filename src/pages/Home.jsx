import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const curriculumCards = [
    { week: 1, icon: '🎯', path: '/lessons/intro', titleKey: 'site.nav.week1', desc: '브랜딩 정의, 역사, 사례분석' },
    { week: 2, icon: '🔍', path: '/lessons/self-analysis', titleKey: 'site.nav.week2', desc: 'SWOT분석, 핵심역량 발견' },
    { week: 3, icon: '👥', path: '/lessons/target-audience', titleKey: 'site.nav.week3', desc: '페르소나 설정, 시장조사' },
    { week: 4, icon: '🎨', path: '/lessons/brand-identity', titleKey: 'site.nav.week4', desc: '로고, 컬러, 슬로건 설계' },
    { week: 5, icon: '📱', path: '/lessons/digital-marketing', titleKey: 'site.nav.week5', desc: 'SEO, SEM, 퍼널 마케팅' },
    { week: 6, icon: '📸', path: '/lessons/sns-marketing', titleKey: 'site.nav.week6', desc: 'Instagram, YouTube, TikTok' },
    { week: 7, icon: '✍️', path: '/lessons/content-marketing', titleKey: 'site.nav.week7', desc: '블로그, 뉴스레터, 스토리텔링' },
    { week: 8, icon: '📝', path: '/lessons/midterm', titleKey: 'site.nav.week8', desc: '1~7주차 종합 평가' },
    { week: 9, icon: '📢', path: '/lessons/corporate-pr', titleKey: 'site.nav.week9', desc: '보도자료, 미디어 관계, CSR' },
    { week: 10, icon: '💼', path: '/lessons/personal-branding', titleKey: 'site.nav.week10', desc: '온라인 프레즌스, 네트워킹' },
    { week: 11, icon: '📂', path: '/lessons/portfolio-branding', titleKey: 'site.nav.week11', desc: '포트폴리오, 이력서, 웹사이트' },
    { week: 12, icon: '📊', path: '/lessons/marketing-analytics', titleKey: 'site.nav.week12', desc: 'GA4, ROI, A/B 테스트' },
    { week: 13, icon: '🚀', path: '/lessons/final-project', titleKey: 'site.nav.week13', desc: '종합 프로젝트 기획~실행' },
    { week: 14, icon: '🎤', path: '/lessons/presentation', titleKey: 'site.nav.week14', desc: '프로젝트 발표, 동료 피드백' },
    { week: 15, icon: '🏆', path: '/lessons/final-exam', titleKey: 'site.nav.week15', desc: '9~14주차 종합 평가' },
  ];

  const toolCards = [
    { icon: '📸', path: '/tools/instagram', titleKey: 'site.nav.toolInstagram' },
    { icon: '🎬', path: '/tools/youtube', titleKey: 'site.nav.toolYouTube' },
    { icon: '📝', path: '/tools/blog', titleKey: 'site.nav.toolBlog' },
    { icon: '💼', path: '/tools/linkedin', titleKey: 'site.nav.toolLinkedIn' },
    { icon: '📧', path: '/tools/email', titleKey: 'site.nav.toolEmail' },
    { icon: '📣', path: '/tools/ads', titleKey: 'site.nav.toolAds' },
    { icon: '🎨', path: '/tools/design', titleKey: 'site.nav.toolDesign' },
    { icon: '🤖', path: '/tools/ai', titleKey: 'site.nav.toolAI' },
  ];

  return (
    <>
      <SEOHead path="/" />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-up">
              셀프 브랜딩으로 시작하는<br />
              <span className="hero-title-line2">나만의 마케팅 전략</span>
            </h1>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="100">
              기업 홍보(PR)부터 개인 브랜딩, 디지털 마케팅까지 — 15주 커리큘럼으로 체계적으로 배우는 셀프 브랜딩 종합 학습 플랫폼
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
              <Link to="/lessons" className="hero-btn primary">커리큘럼 시작하기</Link>
              <Link to="/branding/what-is-branding" className="hero-btn secondary">브랜딩이란?</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section ct-intro-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">셀프 브랜딩이란?</h2>
            <p className="section-subtitle">
              나만의 강점과 가치를 발견하고, 효과적으로 전달하는 전략적 활동입니다
            </p>
          </div>
          <div className="ct-intro" data-aos="fade-up" data-aos-delay="100">
            <p className="ct-description">
              셀프 브랜딩은 단순한 자기 PR이 아닙니다. 자신만의 고유한 가치를 발견하고,
              타겟 오디언스에게 일관성 있게 전달하며, 디지털 시대에 맞는 마케팅 전략을
              수립하는 종합적인 과정입니다. 이 과정을 통해 기업 홍보 전문가로서,
              또는 개인 브랜드 빌더로서 성장할 수 있습니다.
            </p>
          </div>
          <div className="learning-goals" data-aos="fade-up" data-aos-delay="200">
            <h3>학습 목표</h3>
            <ul className="goals-list">
              <li>브랜딩의 기본 개념과 전략적 프레임워크 이해</li>
              <li>디지털 마케팅 채널별 실전 운영 능력 습득</li>
              <li>기업 홍보(PR) 및 위기관리 역량 개발</li>
              <li>포트폴리오 기반 개인 브랜딩 완성</li>
              <li>데이터 기반 마케팅 분석 및 의사결정 능력 배양</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">15주 커리큘럼</h2>
            <p className="section-subtitle">단계별로 체계적으로 배우는 셀프 브랜딩 & 마케팅</p>
          </div>
          <div className="curriculum-grid">
            {curriculumCards.map((card, i) => (
              <Link
                key={card.week}
                to={card.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 50, 300)}
              >
                <span className="curriculum-step">Week {card.week}</span>
                <span className="curriculum-icon">{card.icon}</span>
                <h3 className="curriculum-card-title">{t(card.titleKey)}</h3>
                <p className="curriculum-card-desc">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section ct-intro-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">마케팅 도구 가이드</h2>
            <p className="section-subtitle">실무에서 바로 활용할 수 있는 마케팅 도구별 완벽 가이드</p>
          </div>
          <div className="curriculum-grid">
            {toolCards.map((card, i) => (
              <Link
                key={card.path}
                to={card.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 50, 300)}
              >
                <span className="curriculum-icon">{card.icon}</span>
                <h3 className="curriculum-card-title">{t(card.titleKey)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

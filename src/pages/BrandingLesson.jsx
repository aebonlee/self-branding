import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingLesson = () => {
  const { t } = useLanguage();
  useAOS();

  const weeks = [
    { week: 1, title: '셀프 브랜딩 개론', desc: '브랜딩의 정의, 역사, 퍼스널 vs 기업 브랜딩, 성공 사례 분석', path: '/lessons/intro' },
    { week: 2, title: '자기분석 & 핵심가치', desc: 'SWOT 분석, 조하리의 창, 브랜드 미션/비전 수립, USP 작성', path: '/lessons/self-analysis' },
    { week: 3, title: '타겟 오디언스 분석', desc: '페르소나 설정, 시장조사, 경쟁 분석, STP 전략, 고객 여정 맵', path: '/lessons/target-audience' },
    { week: 4, title: '브랜드 아이덴티티', desc: '네이밍, 로고, 컬러 심리학, 브랜드 보이스, 가이드라인 문서화', path: '/lessons/brand-identity' },
    { week: 5, title: '디지털 마케팅 기초', desc: 'SEO, SEM, 퍼널 마케팅, 랜딩 페이지 최적화, ROI 계산', path: '/lessons/digital-marketing' },
    { week: 6, title: 'SNS 마케팅 전략', desc: 'Instagram, YouTube, TikTok, LinkedIn 마케팅 및 콘텐츠 캘린더', path: '/lessons/sns-marketing' },
    { week: 7, title: '콘텐츠 마케팅', desc: '블로그, 뉴스레터, 스토리텔링, 콘텐츠 전략 및 제작', path: '/lessons/content-marketing' },
    { week: 8, title: '기업 홍보 & PR', desc: '보도자료 작성, 미디어 관계, 위기관리 커뮤니케이션', path: '/lessons/corporate-pr' },
    { week: 9, title: '개인 브랜딩 실전', desc: '온라인 프레즌스 구축, 네트워킹, 퍼스널 브랜드 관리', path: '/lessons/personal-branding' },
    { week: 10, title: '포트폴리오 브랜딩', desc: '이력서, 포트폴리오 웹사이트, 프레젠테이션 제작', path: '/lessons/portfolio-branding' },
    { week: 11, title: '마케팅 분석 & KPI', desc: 'GA4, ROI 분석, A/B 테스트, 데이터 기반 의사결정', path: '/lessons/marketing-analytics' },
    { week: 12, title: '종합 프로젝트', desc: '브랜딩 프로젝트 기획부터 발표까지 전 과정 실습', path: '/lessons/final-project' },
  ];

  const getPhaseLabel = (week) => {
    if (week <= 4) return { label: '기초', color: '#3b82f6' };
    if (week <= 7) return { label: '실전', color: '#10b981' };
    return { label: '심화', color: '#f59e0b' };
  };

  return (
    <>
      <SEOHead title="셀프 브랜딩 12주 커리큘럼" path="/lessons" />
      <section className="page-header">
        <div className="container">
          <h1>셀프 브랜딩 12주 커리큘럼</h1>
          <p>브랜딩의 기초부터 실전 프로젝트까지, 체계적으로 배우는 12주 학습 여정</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">
            <h2>커리큘럼 소개</h2>
            <p>
              본 커리큘럼은 셀프 브랜딩과 마케팅의 핵심 역량을 12주에 걸쳐 단계적으로 학습할 수 있도록 설계되었습니다.
              각 주차별 이론 학습과 실습 과제를 통해 실무에 바로 적용 가능한 브랜딩 전략을 수립할 수 있습니다.
            </p>

            <div className="callout-box">
              <h3>학습 단계 안내</h3>
              <ul>
                <li><strong style={{ color: '#3b82f6' }}>Phase 1 — 기초 (1~4주)</strong>: 브랜딩 개념 이해, 자기분석, 타겟 설정, 아이덴티티 구축</li>
                <li><strong style={{ color: '#10b981' }}>Phase 2 — 실전 (5~7주)</strong>: 디지털 마케팅, SNS 전략, 콘텐츠 마케팅</li>
                <li><strong style={{ color: '#f59e0b' }}>Phase 3 — 심화 (8~12주)</strong>: PR, 개인 브랜딩, 포트폴리오, 분석, 종합 프로젝트</li>
              </ul>
            </div>

            <h2>주차별 수업</h2>
            <div className="lesson-card-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {weeks.map((w, i) => {
                const phase = getPhaseLabel(w.week);
                return (
                  <Link
                    to={w.path}
                    key={w.week}
                    className="lesson-card"
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    style={{
                      display: 'block',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      background: '#fff',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: phase.color,
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}>
                        {w.week}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        background: `${phase.color}20`,
                        color: phase.color,
                        fontWeight: '600',
                      }}>
                        {phase.label}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1e293b' }}>
                      {w.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                      {w.desc}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="info-box tip" style={{ marginTop: '2rem' }}>
              <h3>학습 팁</h3>
              <p>각 주차별 수업은 순서대로 학습하는 것을 권장합니다. 이전 주차의 내용이 다음 주차의 기초가 됩니다. 각 수업 후 실습 과제를 반드시 수행하여 이론을 실전에 적용해보세요.</p>
            </div>

            <div className="lesson-nav">
              <Link to="/branding/practice-guide" className="lesson-nav-btn prev">&larr; 실습안내</Link>
              <Link to="/lessons/intro" className="lesson-nav-btn next">1주차 시작 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingLesson;

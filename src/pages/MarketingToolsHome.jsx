import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const MarketingToolsHome = () => {
  const { t } = useLanguage();
  useAOS();

  const tools = [
    {
      path: '/tools/instagram',
      icon: '📸',
      title: '인스타그램 마케팅',
      desc: '비주얼 콘텐츠와 릴스를 활용한 브랜드 성장 전략'
    },
    {
      path: '/tools/youtube',
      icon: '🎬',
      title: '유튜브 마케팅',
      desc: '영상 콘텐츠 기획부터 채널 성장, 수익화까지'
    },
    {
      path: '/tools/blog',
      icon: '✍️',
      title: '블로그 & SEO',
      desc: '검색 최적화 글쓰기와 블로그 수익화 전략'
    },
    {
      path: '/tools/linkedin',
      icon: '💼',
      title: '링크드인 마케팅',
      desc: 'B2B 네트워킹과 프로페셔널 브랜딩 전략'
    },
    {
      path: '/tools/email',
      icon: '📧',
      title: '이메일 마케팅',
      desc: '뉴스레터 구축과 이메일 자동화 캠페인'
    },
    {
      path: '/tools/ads',
      icon: '📢',
      title: '광고 마케팅',
      desc: 'Google, Meta, 네이버 광고 플랫폼 활용법'
    },
    {
      path: '/tools/design',
      icon: '🎨',
      title: '디자인 도구',
      desc: 'Canva, Figma 등 비디자이너를 위한 디자인 도구'
    },
    {
      path: '/tools/ai',
      icon: '🤖',
      title: 'AI 활용 마케팅',
      desc: 'ChatGPT, AI 이미지, 자동화로 마케팅 효율 극대화'
    }
  ];

  return (
    <>
      <SEOHead
        title="마케팅 도구 가이드"
        description="실무에서 바로 쓸 수 있는 디지털 마케팅 도구 활용법을 체계적으로 학습합니다."
        path="/tools"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>마케팅 도구 가이드</h1>
          <p>실무에서 바로 쓸 수 있는 디지털 마케팅 도구 활용법</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">
            <h2>디지털 마케팅 도구 총정리</h2>
            <p>
              현대 마케팅은 다양한 디지털 도구를 활용하여 효율적으로 브랜드를 알리고, 고객과 소통하며,
              성과를 측정합니다. 아래 8가지 핵심 도구 카테고리를 통해 실무에서 바로 적용할 수 있는
              마케팅 스킬을 습득하세요.
            </p>

            <div className="info-box tip">
              <strong>학습 팁:</strong> 모든 도구를 한꺼번에 배우기보다, 자신의 브랜드와 타겟에 맞는
              2~3개 도구부터 집중적으로 학습하는 것을 추천합니다. 기초를 탄탄히 다진 후
              점진적으로 활용 범위를 넓혀보세요.
            </div>

            <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {tools.map((tool, i) => (
                <Link
                  to={tool.path}
                  key={i}
                  className="section-card"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '2rem', borderRadius: '12px', transition: 'transform 0.2s, box-shadow 0.2s' }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{tool.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.8 }}>{tool.desc}</p>
                </Link>
              ))}
            </div>

            <div className="info-box" style={{ marginTop: '2.5rem' }}>
              <h3>도구 선택 가이드</h3>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>목표</th>
                    <th>추천 도구</th>
                    <th>난이도</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>브랜드 인지도 향상</td>
                    <td>인스타그램, 유튜브</td>
                    <td>초급~중급</td>
                  </tr>
                  <tr>
                    <td>검색 유입 확보</td>
                    <td>블로그 & SEO, 광고</td>
                    <td>중급</td>
                  </tr>
                  <tr>
                    <td>B2B 리드 생성</td>
                    <td>링크드인, 이메일</td>
                    <td>중급</td>
                  </tr>
                  <tr>
                    <td>전문 콘텐츠 제작</td>
                    <td>디자인 도구, AI 활용</td>
                    <td>초급~중급</td>
                  </tr>
                  <tr>
                    <td>마케팅 자동화</td>
                    <td>이메일, AI 활용</td>
                    <td>중급~고급</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning" style={{ marginTop: '2rem' }}>
              <strong>주의:</strong> 디지털 마케팅 도구는 빠르게 변화합니다. 각 플랫폼의 최신 정책과
              알고리즘 변화를 정기적으로 확인하고, 전략을 업데이트하세요.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingToolsHome;

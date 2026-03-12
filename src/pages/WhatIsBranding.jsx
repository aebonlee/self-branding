import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const WhatIsBranding = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="브랜딩이란?" path="/branding/what-is-branding" />
      <section className="page-header">
        <div className="container">
          <h1>브랜딩이란?</h1>
          <p>셀프 브랜딩의 정의, 필요성, 기업 vs 개인 브랜딩</p>
        </div>
      </section>
      <section className="lesson-content section">
        <div className="container">
          <div className="lesson-body">
            <h2>1. 브랜딩의 정의</h2>
            <p>브랜딩(Branding)이란 제품, 서비스, 기업 또는 개인이 시장에서 고유한 정체성을 구축하고 유지하는 전략적 활동입니다. 단순한 로고나 디자인을 넘어, 고객이 느끼는 총체적 경험과 인식을 의미합니다.</p>

            <div className="callout-box">
              <h3>브랜딩의 핵심 요소</h3>
              <ul>
                <li><strong>브랜드 아이덴티티</strong> — 로고, 컬러, 타이포그래피, 슬로건</li>
                <li><strong>브랜드 포지셔닝</strong> — 시장에서의 차별화된 위치</li>
                <li><strong>브랜드 스토리</strong> — 고객과 공감하는 이야기</li>
                <li><strong>브랜드 경험</strong> — 모든 접점에서의 일관된 경험</li>
              </ul>
            </div>

            <h2>2. 셀프 브랜딩이란?</h2>
            <p>셀프 브랜딩(Self-Branding)은 개인이 자신만의 고유한 가치와 전문성을 발견하고, 이를 전략적으로 포장하여 타겟 오디언스에게 효과적으로 전달하는 과정입니다.</p>
            <p>디지털 시대에는 누구나 자신만의 브랜드를 구축할 수 있으며, 이는 취업, 창업, 프리랜서 활동 등 다양한 영역에서 경쟁력을 높여줍니다.</p>

            <h2>3. 기업 브랜딩 vs 개인 브랜딩</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>기업 브랜딩</th><th>개인 브랜딩</th></tr>
              </thead>
              <tbody>
                <tr><td>주체</td><td>기업/조직</td><td>개인</td></tr>
                <tr><td>목표</td><td>시장 점유율, 매출</td><td>인지도, 영향력</td></tr>
                <tr><td>채널</td><td>광고, PR, 웹사이트</td><td>SNS, 블로그, 포트폴리오</td></tr>
                <tr><td>핵심</td><td>제품/서비스 가치</td><td>개인 전문성/신뢰</td></tr>
                <tr><td>기간</td><td>장기적 투자</td><td>지속적 관리</td></tr>
              </tbody>
            </table>

            <h2>4. 브랜딩이 필요한 이유</h2>
            <ul>
              <li><strong>차별화</strong> — 수많은 경쟁자 속에서 나만의 독특한 가치를 전달</li>
              <li><strong>신뢰 구축</strong> — 일관된 브랜드 경험으로 신뢰도 향상</li>
              <li><strong>가치 창출</strong> — 같은 역량이라도 브랜딩에 따라 가치가 달라짐</li>
              <li><strong>기회 창출</strong> — 강력한 브랜드는 기회를 끌어당김</li>
              <li><strong>커뮤니티 형성</strong> — 공감하는 팔로워/고객 확보</li>
            </ul>

            <div className="exercise-box">
              <h3>생각해보기</h3>
              <p>여러분이 존경하는 개인 브랜드(인플루언서, 전문가, 기업가 등)를 1명 떠올려보세요. 그 사람의 브랜드가 강력한 이유는 무엇일까요?</p>
            </div>

            <div className="lesson-nav">
              <span></span>
              <Link to="/branding/roadmap" className="lesson-nav-btn next">학습 로드맵 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsBranding;

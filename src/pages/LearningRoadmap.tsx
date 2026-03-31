import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const LearningRoadmap = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="학습 로드맵" path="/branding/roadmap" />
      <section className="page-header">
        <div className="container">
          <h1>학습 로드맵</h1>
          <p>15주간의 체계적인 셀프 브랜딩 학습 여정</p>
        </div>
      </section>
      <section className="lesson-content section">
        <div className="container">
          <div className="lesson-body">
            <h2>15주 학습 로드맵</h2>
            <p>본 과정은 브랜딩의 기초부터 실전 프로젝트, 중간·기말 평가까지 한 학기 형식으로 구성되어 있습니다.</p>

            <div className="callout-box">
              <h3>Phase 1: 기초 다지기 (1~4주)</h3>
              <ul>
                <li><strong>1주차</strong> — 셀프 브랜딩 개론: 브랜딩의 정의와 중요성</li>
                <li><strong>2주차</strong> — 자기분석 & 핵심가치: SWOT 분석, 미션/비전 수립</li>
                <li><strong>3주차</strong> — 타겟 오디언스 분석: 페르소나 설정, 시장조사</li>
                <li><strong>4주차</strong> — 브랜드 아이덴티티: 로고, 컬러, 슬로건 디자인</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>Phase 2: 디지털 마케팅 역량 (5~7주)</h3>
              <ul>
                <li><strong>5주차</strong> — 디지털 마케팅 기초: SEO, SEM, 퍼널 마케팅</li>
                <li><strong>6주차</strong> — SNS 마케팅 전략: Instagram, YouTube, TikTok</li>
                <li><strong>7주차</strong> — 콘텐츠 마케팅: 블로그, 뉴스레터, 스토리텔링</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>Phase 3: 중간고사 (8주)</h3>
              <ul>
                <li><strong>8주차</strong> — 중간고사: 1~7주차 학습 내용 종합 점검 및 평가</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>Phase 4: 심화 학습 (9~13주)</h3>
              <ul>
                <li><strong>9주차</strong> — 기업 홍보 & PR: 보도자료, 미디어 관계, 위기관리</li>
                <li><strong>10주차</strong> — 개인 브랜딩 실전: 온라인 프레즌스 구축</li>
                <li><strong>11주차</strong> — 포트폴리오 브랜딩: 이력서, 웹사이트 제작</li>
                <li><strong>12주차</strong> — 마케팅 분석 & KPI: GA4, ROI, A/B 테스트</li>
                <li><strong>13주차</strong> — 종합 프로젝트: 브랜딩 프로젝트 기획~실행</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>Phase 5: 발표 & 기말 (14~15주)</h3>
              <ul>
                <li><strong>14주차</strong> — 프로젝트 발표 & 피드백: 최종 발표, 동료 평가</li>
                <li><strong>15주차</strong> — 기말고사: 9~14주차 심화 과정 종합 평가</li>
              </ul>
            </div>

            <h2>학습 방법</h2>
            <ul>
              <li>각 주차별 이론 학습 + 실습 과제</li>
              <li>실제 사례 분석 및 토론</li>
              <li>포트폴리오 누적 제작</li>
              <li>중간고사 (8주차) + 기말고사 (15주차)</li>
              <li>최종 프로젝트 발표 (14주차)</li>
            </ul>

            <div className="lesson-nav">
              <Link to="/branding/what-is-branding" className="lesson-nav-btn prev">← 브랜딩이란?</Link>
              <Link to="/branding/syllabus" className="lesson-nav-btn next">강의계획서 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningRoadmap;

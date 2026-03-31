import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const Syllabus = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="강의계획서" path="/branding/syllabus" />
      <section className="page-header">
        <div className="container">
          <h1>강의계획서</h1>
          <p>셀프 브랜딩 마케팅 과정 상세 계획</p>
        </div>
      </section>
      <section className="lesson-content section">
        <div className="container">
          <div className="lesson-body">
            <div className="syllabus-info-card">
              <h2>과목 정보</h2>
              <table className="lesson-table">
                <tbody>
                  <tr><th>과목명</th><td>셀프 브랜딩 마케팅</td></tr>
                  <tr><th>학습 기간</th><td>15주 (주 1회, 총 15차시)</td></tr>
                  <tr><th>학습 대상</th><td>마케팅/브랜딩에 관심 있는 누구나</td></tr>
                  <tr><th>학습 목표</th><td>개인/기업 브랜딩 전략 수립 및 실행 능력 배양</td></tr>
                  <tr><th>평가 방식</th><td>중간고사 30% + 실습과제 30% + 기말고사 40%</td></tr>
                </tbody>
              </table>
            </div>

            <h2>주차별 강의 계획</h2>
            <table className="lesson-table weekly-plan-table">
              <thead>
                <tr><th>주차</th><th>주제</th><th>핵심 내용</th><th>과제</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>셀프 브랜딩 개론</td><td>브랜딩 정의, 역사, 사례분석</td><td>브랜드 분석 보고서</td></tr>
                <tr><td>2</td><td>자기분석 & 핵심가치</td><td>SWOT분석, 미션/비전 수립</td><td>개인 SWOT 분석</td></tr>
                <tr><td>3</td><td>타겟 오디언스</td><td>페르소나, 시장조사, STP</td><td>페르소나 설계서</td></tr>
                <tr><td>4</td><td>브랜드 아이덴티티</td><td>로고, 컬러, 슬로건</td><td>브랜드 가이드라인</td></tr>
                <tr><td>5</td><td>디지털 마케팅</td><td>SEO, SEM, 퍼널 마케팅</td><td>SEO 분석 리포트</td></tr>
                <tr><td>6</td><td>SNS 마케팅</td><td>Instagram, YouTube, TikTok</td><td>SNS 콘텐츠 기획안</td></tr>
                <tr><td>7</td><td>콘텐츠 마케팅</td><td>블로그, 뉴스레터, 스토리텔링</td><td>콘텐츠 캘린더</td></tr>
                <tr className="exam-row"><td>8</td><td colSpan={3}>중간고사 — 1~7주차 학습 내용 종합 평가</td></tr>
                <tr><td>9</td><td>기업 홍보 & PR</td><td>보도자료, 미디어, 위기관리</td><td>보도자료 작성</td></tr>
                <tr><td>10</td><td>개인 브랜딩 실전</td><td>온라인 프레즌스, 네트워킹</td><td>LinkedIn 프로필 최적화</td></tr>
                <tr><td>11</td><td>포트폴리오 브랜딩</td><td>이력서, 웹사이트 제작</td><td>포트폴리오 초안</td></tr>
                <tr><td>12</td><td>마케팅 분석</td><td>GA4, ROI, A/B 테스트</td><td>분석 대시보드</td></tr>
                <tr><td>13</td><td>종합 프로젝트</td><td>브랜딩 프로젝트 기획~실행</td><td>프로젝트 보고서</td></tr>
                <tr><td>14</td><td>프로젝트 발표</td><td>발표, 동료 피드백, 개선 계획</td><td>발표 자료 제출</td></tr>
                <tr className="exam-row"><td>15</td><td colSpan={3}>기말고사 — 9~14주차 심화 과정 종합 평가</td></tr>
              </tbody>
            </table>

            <div className="lesson-nav">
              <Link to="/branding/roadmap" className="lesson-nav-btn prev">← 학습 로드맵</Link>
              <Link to="/branding/practice-guide" className="lesson-nav-btn next">실습안내 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;

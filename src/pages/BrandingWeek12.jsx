import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek12 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="12주차: 종합 프로젝트" path="/lessons/final-project" />
      <section className="page-header">
        <div className="container">
          <h1>12주차: 종합 프로젝트</h1>
          <p>12주간의 학습을 총정리하고, 나만의 브랜딩 프로젝트를 완성합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 프로젝트 개요</h2>
            <p>
              12주간의 셀프 브랜딩 마케팅 과정을 마무리하는 종합 프로젝트입니다.
              지금까지 배운 자기분석, 타겟 설정, 브랜드 아이덴티티, 디지털 마케팅, SNS 전략,
              콘텐츠 마케팅, PR, 포트폴리오 브랜딩, 마케팅 분석까지 모든 역량을
              하나의 프로젝트에 통합하여 실행합니다.
            </p>

            <div className="callout-box">
              <h3>프로젝트 목표</h3>
              <ul>
                <li><strong>통합 역량 발휘:</strong> 12주간 배운 이론과 실습을 종합적으로 활용</li>
                <li><strong>실행력 검증:</strong> 기획부터 실행, 측정까지 전체 프로세스 경험</li>
                <li><strong>포트폴리오 구축:</strong> 취업/사업에 활용 가능한 실제 결과물 확보</li>
                <li><strong>발표 역량:</strong> 프레젠테이션을 통한 커뮤니케이션 능력 향상</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. 프로젝트 옵션</h2>

            <h3>옵션 A: 개인 브랜딩 프로젝트</h3>
            <p>자기 자신을 브랜드화하는 프로젝트입니다. 취업 준비생, 프리랜서, 1인 사업자에게 적합합니다.</p>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>활동</th><th>산출물</th></tr>
              </thead>
              <tbody>
                <tr><td>분석</td><td>SWOT 분석, 핵심가치 도출, 타겟 정의</td><td>자기분석 보고서</td></tr>
                <tr><td>전략</td><td>포지셔닝, USP 설정, 브랜드 스토리</td><td>브랜드 전략서</td></tr>
                <tr><td>디자인</td><td>로고, 컬러, 명함, 소셜 프로필</td><td>브랜드 가이드라인</td></tr>
                <tr><td>실행</td><td>SNS 운영 (최소 2주), 콘텐츠 10개+</td><td>콘텐츠 포트폴리오</td></tr>
                <tr><td>측정</td><td>팔로워 증가, 인게이지먼트, 리치 분석</td><td>성과 보고서</td></tr>
              </tbody>
            </table>

            <h3>옵션 B: 기업/가상 기업 브랜딩 프로젝트</h3>
            <p>실제 또는 가상의 기업/브랜드를 대상으로 하는 프로젝트입니다. 마케터, 기획자 지망생에게 적합합니다.</p>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>활동</th><th>산출물</th></tr>
              </thead>
              <tbody>
                <tr><td>분석</td><td>시장조사, 경쟁분석, 타겟 페르소나</td><td>시장분석 보고서</td></tr>
                <tr><td>전략</td><td>STP 전략, 마케팅 믹스, 채널 전략</td><td>마케팅 전략서</td></tr>
                <tr><td>디자인</td><td>브랜드명, CI/BI, 패키지, 웹사이트 기획</td><td>브랜드 아이덴티티 키트</td></tr>
                <tr><td>실행</td><td>캠페인 기획, 콘텐츠 제작, 광고 기획</td><td>캠페인 실행안</td></tr>
                <tr><td>측정</td><td>KPI 설정, 예상 ROI 산출, 대시보드 설계</td><td>성과 측정 프레임워크</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 프로젝트 계획서 작성 가이드</h2>

            <div className="section-card" data-aos="fade-up">
              <h3>계획서 구성 요소</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>항목</th><th>내용</th><th>분량</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>프로젝트명</strong></td><td>브랜딩 프로젝트의 제목</td><td>1줄</td></tr>
                  <tr><td><strong>프로젝트 배경</strong></td><td>왜 이 프로젝트를 하는가</td><td>1~2단락</td></tr>
                  <tr><td><strong>목표</strong></td><td>SMART 기준의 구체적 목표</td><td>3~5개 항목</td></tr>
                  <tr><td><strong>타겟 분석</strong></td><td>페르소나, 니즈, 터치포인트</td><td>1~2페이지</td></tr>
                  <tr><td><strong>전략</strong></td><td>포지셔닝, 메시지, 채널 전략</td><td>2~3페이지</td></tr>
                  <tr><td><strong>실행 계획</strong></td><td>단계별 실행 내용과 일정</td><td>간트 차트</td></tr>
                  <tr><td><strong>예산</strong></td><td>필요 리소스와 비용 추정</td><td>테이블</td></tr>
                  <tr><td><strong>KPI & 측정</strong></td><td>성과 지표와 측정 방법</td><td>테이블</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">4. 최종 발표 준비</h2>
            <p>
              프로젝트 결과를 10~15분 내외의 프레젠테이션으로 발표합니다.
              스토리텔링 기법을 활용하여 청중의 관심을 끌고, 데이터로 뒷받침하세요.
            </p>

            <div className="info-box tip">
              <h3>발표 구성 (권장)</h3>
              <ol>
                <li><strong>오프닝 (2분):</strong> 흥미로운 질문이나 통계로 시작. 프로젝트 개요 소개</li>
                <li><strong>분석 결과 (3분):</strong> 시장/자기 분석, 타겟 정의, 핵심 인사이트</li>
                <li><strong>전략 & 디자인 (3분):</strong> 브랜드 전략, 아이덴티티 시스템 소개</li>
                <li><strong>실행 결과 (4분):</strong> 콘텐츠 예시, 캠페인 결과, 성과 데이터</li>
                <li><strong>교훈 & 다음 단계 (2분):</strong> 배운 점, 향후 계획</li>
                <li><strong>Q&A (1분):</strong> 질의응답</li>
              </ol>
            </div>

            <h2 data-aos="fade-up">5. 평가 기준</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>평가 영역</th><th>배점</th><th>세부 기준</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>분석의 깊이</strong></td><td>20점</td><td>자기/시장 분석의 체계성, 데이터 활용도</td></tr>
                <tr><td><strong>전략의 논리성</strong></td><td>20점</td><td>타겟 명확성, 포지셔닝 차별화, 일관성</td></tr>
                <tr><td><strong>디자인 완성도</strong></td><td>15점</td><td>브랜드 아이덴티티의 전문성과 일관성</td></tr>
                <tr><td><strong>실행력</strong></td><td>20점</td><td>콘텐츠 품질, 채널 운영, 실제 실행 여부</td></tr>
                <tr><td><strong>성과 측정</strong></td><td>15점</td><td>KPI 설정의 적절성, 데이터 분석 역량</td></tr>
                <tr><td><strong>발표</strong></td><td>10점</td><td>스토리텔링, 시각 자료, 전달력</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">6. 12주 핵심 요약</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>주차</th><th>주제</th><th>핵심 키워드</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>셀프 브랜딩 개론</td><td>브랜딩 정의, 퍼스널 vs 기업, 성공 사례</td></tr>
                <tr><td>2</td><td>자기분석 & 핵심가치</td><td>SWOT, 조하리의 창, 미션/비전</td></tr>
                <tr><td>3</td><td>타겟 오디언스 분석</td><td>페르소나, STP, 경쟁분석</td></tr>
                <tr><td>4</td><td>브랜드 아이덴티티</td><td>네이밍, 로고, 컬러, 가이드라인</td></tr>
                <tr><td>5</td><td>디지털 마케팅 기초</td><td>SEO, SEM, 마케팅 퍼널, AARRR</td></tr>
                <tr><td>6</td><td>SNS 마케팅 전략</td><td>플랫폼 선택, 해시태그, 인플루언서</td></tr>
                <tr><td>7</td><td>콘텐츠 마케팅</td><td>스토리텔링, 블로그, 뉴스레터, 캘린더</td></tr>
                <tr><td>8</td><td>기업 홍보 & PR</td><td>보도자료, 미디어 관계, 위기관리</td></tr>
                <tr><td>9</td><td>개인 브랜딩 실전</td><td>온라인 프레즌스, 네트워킹, 강연</td></tr>
                <tr><td>10</td><td>포트폴리오 브랜딩</td><td>포트폴리오, 이력서, 웹사이트</td></tr>
                <tr><td>11</td><td>마케팅 분석 & KPI</td><td>GA4, ROI, A/B 테스트, 대시보드</td></tr>
                <tr><td>12</td><td>종합 프로젝트</td><td>기획→실행→측정→발표</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">7. 졸업 후 로드맵: 지속적 브랜드 관리</h2>

            <div className="callout-box">
              <h3>브랜드 성장 로드맵</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기간</th><th>활동</th><th>목표</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1~3개월</strong></td><td>SNS 정기 운영, 콘텐츠 루틴 확립</td><td>팔로워 500명, 주 3회 게시</td></tr>
                  <tr><td><strong>3~6개월</strong></td><td>네트워킹 확대, 협업 시작</td><td>업계 인맥 10명+, 콜라보 1건+</td></tr>
                  <tr><td><strong>6~12개월</strong></td><td>전문 콘텐츠 심화, 강연/기고 시작</td><td>팔로워 2,000명, 기고 3건+</td></tr>
                  <tr><td><strong>1~2년</strong></td><td>브랜드 확장, 수익 모델 구축</td><td>강의/컨설팅, 부수입 창출</td></tr>
                </tbody>
              </table>
            </div>

            <div className="exercise-box">
              <h3>최종 프로젝트 과제</h3>
              <ol>
                <li><strong>프로젝트 옵션 선택</strong> (개인 브랜딩 또는 기업 브랜딩)</li>
                <li><strong>프로젝트 계획서 작성</strong> (위 가이드 참고, 5페이지 이상)</li>
                <li><strong>프로젝트 실행</strong> (최소 2주간 콘텐츠 운영)</li>
                <li><strong>성과 측정 보고서</strong> (KPI 달성 여부 분석)</li>
                <li><strong>최종 발표 자료</strong> (10~15분 분량 PPT/PDF)</li>
              </ol>
              <p style={{ marginTop: '1rem' }}>
                <strong>제출 기한:</strong> 프로젝트 시작 후 3주 이내<br />
                <strong>발표:</strong> 제출 후 1주 이내 진행
              </p>
            </div>

            <div className="info-box tip">
              <h3>수고하셨습니다!</h3>
              <p>
                12주간의 셀프 브랜딩 마케팅 과정을 모두 마치셨습니다. 이 과정에서 배운 지식과 경험은
                여러분의 커리어와 삶에서 강력한 자산이 될 것입니다. 브랜딩은 단기간에 완성되는 것이 아니라
                꾸준한 노력과 진정성으로 성장하는 여정입니다. 오늘 배운 것을 내일 바로 실천하세요!
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/marketing-analytics" className="lesson-nav-btn prev">&larr; 11주차: 마케팅 분석</Link>
              <Link to="/lessons" className="lesson-nav-btn next">커리큘럼 목록 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek12;

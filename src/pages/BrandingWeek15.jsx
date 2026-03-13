import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek15 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="15주차: 기말고사" path="/lessons/final-exam" />
      <section className="page-header">
        <div className="container">
          <h1>15주차: 기말고사</h1>
          <p>9~14주차 학습 내용을 종합 평가하는 기말고사입니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            {/* ========== 1. 기말고사 개요 ========== */}
            <h2>1. 기말고사 개요</h2>
            <p>
              15주차 기말고사는 9~14주차에 걸쳐 학습한 내용을 종합적으로 평가하는 시험입니다.
              기업 홍보 &amp; PR, 개인 브랜딩 실전, 포트폴리오 브랜딩, 마케팅 분석 &amp; KPI,
              종합 프로젝트, 프로젝트 발표 &amp; 피드백까지 총 6개 주차의 핵심 이론과 실무 역량을
              필기, 실기, 발표평가의 세 가지 영역에서 평가합니다.
              기말고사는 단순한 암기 시험이 아니라, 배운 내용을 실제 상황에 적용할 수 있는
              종합적 역량을 검증하는 것을 목적으로 합니다.
            </p>

            <div className="callout-box">
              <h3>기말고사 범위 (9~14주차)</h3>
              <ul>
                <li><strong>9주차: 기업 홍보 &amp; PR</strong> — 보도자료 작성, 미디어 릴레이션, 위기관리 커뮤니케이션, CSR &amp; ESG</li>
                <li><strong>10주차: 개인 브랜딩 실전</strong> — 온라인 프레즌스, LinkedIn 최적화, 네트워킹 전략, 엘리베이터 피치</li>
                <li><strong>11주차: 포트폴리오 브랜딩</strong> — 포트폴리오 구성, 이력서/자기소개서, STAR 기법, 개인 웹사이트</li>
                <li><strong>12주차: 마케팅 분석 &amp; KPI</strong> — GA4, ROI 분석, A/B 테스트, 대시보드 설계, SMART KPI</li>
                <li><strong>13주차: 종합 프로젝트</strong> — 브랜드 전략서, 비주얼 아이덴티티, 마케팅 플랜, 콘텐츠 제작</li>
                <li><strong>14주차: 프로젝트 발표 &amp; 피드백</strong> — 프레젠테이션 기법, 피칭, 피드백 수렴, PDCA 사이클</li>
              </ul>
            </div>

            {/* ========== 2. 시험 구성 ========== */}
            <h2 data-aos="fade-up">2. 시험 구성</h2>
            <p>
              기말고사는 필기시험, 실기 과제, 발표평가의 세 가지 영역으로 구성되며,
              각 영역의 배점 비중은 아래와 같습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>평가 영역</th><th>배점</th><th>구성</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>필기시험</strong></td>
                  <td><strong>30%</strong></td>
                  <td>객관식 20문항 + 서술형 3문항</td>
                  <td>시험 시간 60분</td>
                </tr>
                <tr>
                  <td><strong>실기 과제</strong></td>
                  <td><strong>40%</strong></td>
                  <td>최종 포트폴리오 제출</td>
                  <td>시험일 1주 전까지 제출</td>
                </tr>
                <tr>
                  <td><strong>발표평가</strong></td>
                  <td><strong>30%</strong></td>
                  <td>프로젝트 발표 결과 반영</td>
                  <td>14주차 발표 성적 반영</td>
                </tr>
                <tr>
                  <td><strong>합계</strong></td>
                  <td><strong>100%</strong></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* ========== 3. 출제 범위 상세 ========== */}
            <h2 data-aos="fade-up">3. 출제 범위 상세</h2>
            <p>
              각 주차별 핵심 키워드와 학습 포인트를 정리한 표입니다.
              시험 준비 시 아래 내용을 중심으로 복습하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>주차</th><th>주제</th><th>핵심 키워드</th><th>학습 포인트</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>9주차</strong></td>
                    <td>기업 홍보 &amp; PR</td>
                    <td>보도자료, 5W1H, PESO 모델, 위기관리</td>
                    <td>역피라미드 구조, 미디어 릴레이션, 사과문 5대 요소, CSR &amp; ESG</td>
                  </tr>
                  <tr>
                    <td><strong>10주차</strong></td>
                    <td>개인 브랜딩 실전</td>
                    <td>온라인 프레즌스, LinkedIn, 네트워킹, 엘리베이터 피치</td>
                    <td>디지털 발자국 관리, 프로필 최적화, 약한 유대 이론, 30초 피치</td>
                  </tr>
                  <tr>
                    <td><strong>11주차</strong></td>
                    <td>포트폴리오 브랜딩</td>
                    <td>포트폴리오, 이력서, STAR 기법, 개인 웹사이트</td>
                    <td>프로젝트 케이스 스터디, 성과 정량화, ATS 최적화, 도메인 전략</td>
                  </tr>
                  <tr>
                    <td><strong>12주차</strong></td>
                    <td>마케팅 분석 &amp; KPI</td>
                    <td>GA4, ROI, A/B 테스트, 대시보드, SMART KPI</td>
                    <td>데이터 기반 의사결정, 전환 퍼널 분석, 통계적 유의성, KPI 설정법</td>
                  </tr>
                  <tr>
                    <td><strong>13주차</strong></td>
                    <td>종합 프로젝트</td>
                    <td>브랜드 전략서, 비주얼 아이덴티티, 마케팅 플랜, 콘텐츠</td>
                    <td>SWOT 기반 전략 수립, 채널 전략, 예산 산정, 콘텐츠 캘린더</td>
                  </tr>
                  <tr>
                    <td><strong>14주차</strong></td>
                    <td>프로젝트 발표 &amp; 피드백</td>
                    <td>프레젠테이션, STAR 구조, PDCA 사이클, 피어 리뷰</td>
                    <td>HOOK 기법, 데이터 시각화, 피드백 수렴, 반복 개선 프로세스</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ========== 4. 필기시험 유형별 안내 ========== */}
            <h2 data-aos="fade-up">4. 필기시험 유형별 안내</h2>
            <p>
              필기시험은 객관식과 서술형으로 구성됩니다. 총 배점 30점(전체의 30%)이며,
              시험 시간은 60분입니다.
            </p>

            <h3>객관식 (20문항, 각 1점 = 총 20점)</h3>
            <div className="section-card" data-aos="fade-up">
              <p>4지선다 형식으로 출제되며, 각 문항당 1점입니다.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>출제 주차</th><th>예상 문항 수</th><th>출제 유형</th></tr>
                </thead>
                <tbody>
                  <tr><td>9주차 (기업 홍보 &amp; PR)</td><td>3~4문항</td><td>보도자료 구성요소, PESO 모델, 위기관리 프로세스</td></tr>
                  <tr><td>10주차 (개인 브랜딩 실전)</td><td>3~4문항</td><td>온라인 프레즌스 전략, LinkedIn 최적화, 네트워킹</td></tr>
                  <tr><td>11주차 (포트폴리오 브랜딩)</td><td>3~4문항</td><td>STAR 기법 적용, 포트폴리오 구성, ATS 이해</td></tr>
                  <tr><td>12주차 (마케팅 분석 &amp; KPI)</td><td>3~4문항</td><td>GA4 지표, ROI 계산, A/B 테스트 설계, SMART KPI</td></tr>
                  <tr><td>13주차 (종합 프로젝트)</td><td>3~4문항</td><td>전략서 구성요소, 채널 전략, 예산 항목</td></tr>
                  <tr><td>14주차 (발표 &amp; 피드백)</td><td>2~3문항</td><td>프레젠테이션 기법, PDCA 사이클, 피드백 방법</td></tr>
                </tbody>
              </table>
            </div>

            <h3>서술형 (3문항, 각 약 3.3점 = 총 10점)</h3>
            <div className="section-card" data-aos="fade-up">
              <p>주어진 상황에 대해 분석하고 전략을 수립하는 서술형 문항입니다. 각 문항당 약 3.3점(총 10점)입니다.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>문항</th><th>출제 유형</th><th>예상 분량</th><th>평가 기준</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>서술형 1</strong></td>
                    <td>위기관리 시나리오 — 주어진 위기 상황에 대한 대응 전략 수립</td>
                    <td>A4 반 페이지</td>
                    <td>4단계 프레임워크 적용, 대응의 적절성, 논리성</td>
                  </tr>
                  <tr>
                    <td><strong>서술형 2</strong></td>
                    <td>마케팅 데이터 분석 — 주어진 데이터를 해석하고 개선안 제시</td>
                    <td>A4 반 페이지</td>
                    <td>데이터 해석 정확성, KPI 설정, 실행 가능한 개선안</td>
                  </tr>
                  <tr>
                    <td><strong>서술형 3</strong></td>
                    <td>브랜드 전략 — 가상 브랜드의 포지셔닝 및 채널 전략 수립</td>
                    <td>A4 반 페이지</td>
                    <td>타겟 분석, 차별화 포인트, 채널 선정 근거</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>필기시험 준비 팁</h3>
              <p>
                객관식은 핵심 개념의 정의와 차이점을 정확히 이해하는 것이 중요합니다.
                단순 암기보다는 각 개념이 왜 중요한지, 어떤 상황에서 적용하는지를 중심으로 학습하세요.
                서술형은 프레임워크(PESO, PDCA, SMART 등)를 활용하여 구조적으로 답변하면 높은 점수를 받을 수 있습니다.
              </p>
            </div>

            {/* ========== 5. 실기 과제 안내 ========== */}
            <h2 data-aos="fade-up">5. 실기 과제 안내</h2>
            <p>
              실기 과제는 15주 과정 전체를 아우르는 최종 포트폴리오 제출입니다.
              배점은 전체의 40%로, 기말고사에서 가장 큰 비중을 차지합니다.
              시험일 1주 전까지 제출해야 하며, 아래 4가지 구성요소를 모두 포함해야 합니다.
            </p>

            <div className="callout-box">
              <h3>최종 포트폴리오 구성요소</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>구성요소</th><th>포함 내용</th><th>분량</th><th>배점</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 브랜드 전략서</strong></td>
                    <td>미션/비전, 핵심가치, 타겟 페르소나, SWOT 분석, 포지셔닝, 브랜드 스토리</td>
                    <td>3~5페이지</td>
                    <td>10점</td>
                  </tr>
                  <tr>
                    <td><strong>2. 비주얼 아이덴티티</strong></td>
                    <td>로고, 컬러 팔레트, 타이포그래피, 브랜드 가이드라인, 적용 사례</td>
                    <td>2~3페이지</td>
                    <td>10점</td>
                  </tr>
                  <tr>
                    <td><strong>3. 마케팅 플랜</strong></td>
                    <td>채널 전략, 콘텐츠 캘린더(4주), 예산, SMART KPI, 타임라인</td>
                    <td>3~5페이지</td>
                    <td>10점</td>
                  </tr>
                  <tr>
                    <td><strong>4. 성과 보고서</strong></td>
                    <td>KPI 달성 현황, 데이터 분석 결과, 개선점 및 향후 계획</td>
                    <td>1~2페이지</td>
                    <td>10점</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>실기 과제 제출 시 유의사항</h3>
              <ul>
                <li>모든 문서는 PDF 형식으로 제출 (파일명: 학번_이름_기말포트폴리오.pdf)</li>
                <li>표지에 이름, 학번, 제출일, 프로젝트명을 명시할 것</li>
                <li>시험일 1주 전 자정(23:59)까지 제출 — 지각 제출 시 일 5% 감점</li>
                <li>표절이 확인될 경우 0점 처리 (표절 검사 시행)</li>
                <li>외부 이미지/자료 사용 시 반드시 출처를 표기할 것</li>
              </ul>
            </div>

            {/* ========== 6. 평가 기준표 ========== */}
            <h2 data-aos="fade-up">6. 평가 기준표</h2>
            <p>
              각 영역별 배점과 채점 기준은 아래와 같습니다. 평가 기준을 미리 확인하고
              빠짐없이 준비하세요.
            </p>

            <div className="callout-box">
              <h3>필기시험 채점 기준 (30점)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>배점</th><th>채점 기준</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>객관식</strong></td>
                    <td>20점</td>
                    <td>정답 1개당 1점, 오답 시 감점 없음</td>
                  </tr>
                  <tr>
                    <td><strong>서술형</strong></td>
                    <td>10점</td>
                    <td>논리성(40%), 정확성(30%), 실무 적용력(30%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>실기 과제 채점 기준 (40점)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>구성요소</th><th>배점</th><th>우수 (9~10점)</th><th>양호 (7~8점)</th><th>보통 (5~6점)</th><th>미흡 (0~4점)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>브랜드 전략서</strong></td>
                    <td>10점</td>
                    <td>데이터 기반의 논리적 전략, 차별화된 USP</td>
                    <td>핵심 요소 포함, 전략의 일관성</td>
                    <td>기본 구성은 갖추었으나 깊이 부족</td>
                    <td>주요 항목 누락 또는 피상적</td>
                  </tr>
                  <tr>
                    <td><strong>비주얼 아이덴티티</strong></td>
                    <td>10점</td>
                    <td>프로페셔널한 디자인, 완벽한 일관성</td>
                    <td>가이드라인 준수, 적절한 디자인</td>
                    <td>기본 요소는 있으나 일관성 부족</td>
                    <td>디자인 미완성 또는 불일치</td>
                  </tr>
                  <tr>
                    <td><strong>마케팅 플랜</strong></td>
                    <td>10점</td>
                    <td>실현 가능한 전략, SMART KPI, 합리적 예산</td>
                    <td>채널별 전략 수립, KPI 설정</td>
                    <td>계획은 있으나 실행 가능성 낮음</td>
                    <td>계획 부재 또는 비현실적</td>
                  </tr>
                  <tr>
                    <td><strong>성과 보고서</strong></td>
                    <td>10점</td>
                    <td>데이터 기반 분석, 인사이트 도출, 개선안 제시</td>
                    <td>주요 지표 측정, 분석 시도</td>
                    <td>데이터는 있으나 분석 미흡</td>
                    <td>데이터 부재 또는 분석 없음</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>발표평가 채점 기준 (30점)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>평가 항목</th><th>배점</th><th>채점 기준</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>스토리텔링 &amp; 구성</strong></td>
                    <td>10점</td>
                    <td>논리적 흐름, 임팩트 있는 오프닝, 명확한 핵심 메시지</td>
                  </tr>
                  <tr>
                    <td><strong>시각 자료 품질</strong></td>
                    <td>8점</td>
                    <td>슬라이드 디자인, 데이터 시각화, 브랜드 일관성</td>
                  </tr>
                  <tr>
                    <td><strong>전달력 &amp; 태도</strong></td>
                    <td>7점</td>
                    <td>목소리, 아이컨택, 제스처, 시간 준수, 자신감</td>
                  </tr>
                  <tr>
                    <td><strong>Q&amp;A 대응</strong></td>
                    <td>5점</td>
                    <td>질문 이해도, 답변의 논리성, 유연한 대처</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ========== 7. 학습 가이드 ========== */}
            <h2 data-aos="fade-up">7. 학습 가이드</h2>
            <p>
              기말고사를 효과적으로 준비하기 위한 학습 전략을 안내합니다.
              아래 가이드를 참고하여 체계적으로 시험을 준비하세요.
            </p>

            <div className="info-box tip">
              <h3>효과적인 시험 준비 방법</h3>
              <ul>
                <li><strong>핵심 개념 정리 (D-14)</strong> — 각 주차별 핵심 키워드를 한 장으로 정리하세요. 개념 간 연결 관계를 마인드맵으로 그리면 효과적입니다.</li>
                <li><strong>프레임워크 암기 (D-10)</strong> — PESO, PDCA, SMART, STAR, SWOT 등 주요 프레임워크를 손으로 직접 써보며 체화하세요.</li>
                <li><strong>사례 분석 연습 (D-7)</strong> — 실제 기업/브랜드 사례에 학습한 이론을 적용해 분석하는 연습을 하세요. 서술형 대비에 효과적입니다.</li>
                <li><strong>포트폴리오 점검 (D-7)</strong> — 실기 과제의 4가지 구성요소가 모두 갖추어졌는지 체크리스트로 확인하세요.</li>
                <li><strong>동료 스터디 (D-5)</strong> — 동료와 함께 주요 개념을 설명하는 연습을 하세요. 남에게 설명할 수 있으면 이해한 것입니다.</li>
                <li><strong>모의 문제 풀이 (D-3)</strong> — 각 주차 수업 자료의 실습 과제를 다시 풀어보세요. 특히 서술형은 시간을 재고 연습하세요.</li>
                <li><strong>최종 점검 (D-1)</strong> — 핵심 키워드 한 장 요약본을 최종 검토하고, 충분한 수면을 취하세요.</li>
              </ul>
            </div>

            <div className="info-box warning">
              <h3>시험 당일 유의사항</h3>
              <ul>
                <li>시험 시작 10분 전까지 입실을 완료하세요</li>
                <li>필기시험 중 전자기기(스마트폰, 태블릿 등) 사용은 금지됩니다</li>
                <li>서술형은 프레임워크를 활용하여 구조적으로 답변하세요</li>
                <li>객관식을 먼저 풀고(20분), 남은 시간(40분)에 서술형에 집중하는 전략을 권장합니다</li>
              </ul>
            </div>

            {/* ========== 8. 15주 과정 총정리 ========== */}
            <h2 data-aos="fade-up">8. 15주 과정 총정리</h2>
            <p>
              1~14주차에 걸쳐 학습한 셀프 브랜딩 마케팅의 핵심 키워드를 요약합니다.
              기말고사 범위는 9~14주차이지만, 전체 과정의 맥락을 이해하면 더 깊이 있는 답변이 가능합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>주차</th><th>주제</th><th>핵심 키워드</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1</strong></td><td>셀프 브랜딩 개론</td><td>브랜딩 정의, 퍼스널 vs 기업, 성공 사례</td></tr>
                  <tr><td><strong>2</strong></td><td>자기분석 &amp; 핵심가치</td><td>SWOT, 조하리의 창, 미션/비전</td></tr>
                  <tr><td><strong>3</strong></td><td>타겟 오디언스 분석</td><td>페르소나, STP, 경쟁분석</td></tr>
                  <tr><td><strong>4</strong></td><td>브랜드 아이덴티티</td><td>네이밍, 로고, 컬러, 가이드라인</td></tr>
                  <tr><td><strong>5</strong></td><td>디지털 마케팅 기초</td><td>SEO, SEM, 마케팅 퍼널, AARRR</td></tr>
                  <tr><td><strong>6</strong></td><td>SNS 마케팅 전략</td><td>플랫폼 선택, 해시태그, 인플루언서</td></tr>
                  <tr><td><strong>7</strong></td><td>콘텐츠 마케팅</td><td>스토리텔링, 블로그, 뉴스레터, 캘린더</td></tr>
                  <tr><td><strong>8</strong></td><td>중간고사</td><td>1~7주차 종합 평가</td></tr>
                  <tr><td><strong>9</strong></td><td>기업 홍보 &amp; PR</td><td>보도자료, 미디어 관계, 위기관리, CSR</td></tr>
                  <tr><td><strong>10</strong></td><td>개인 브랜딩 실전</td><td>온라인 프레즌스, LinkedIn, 네트워킹</td></tr>
                  <tr><td><strong>11</strong></td><td>포트폴리오 브랜딩</td><td>포트폴리오, 이력서, STAR 기법, 웹사이트</td></tr>
                  <tr><td><strong>12</strong></td><td>마케팅 분석 &amp; KPI</td><td>GA4, ROI, A/B 테스트, 대시보드</td></tr>
                  <tr><td><strong>13</strong></td><td>종합 프로젝트</td><td>전략서, 비주얼, 마케팅 플랜, 콘텐츠</td></tr>
                  <tr><td><strong>14</strong></td><td>프로젝트 발표 &amp; 피드백</td><td>프레젠테이션, 피칭, 피드백, PDCA</td></tr>
                </tbody>
              </table>
            </div>

            {/* ========== 9. 수고하셨습니다 ========== */}
            <div className="info-box tip">
              <h3>수고하셨습니다!</h3>
              <p>
                15주간의 셀프 브랜딩 마케팅 과정을 모두 마치셨습니다.
                자기분석에서 시작하여 브랜드 전략, 디지털 마케팅, 콘텐츠 제작, PR, 포트폴리오,
                데이터 분석까지 — 여러분은 이제 자신만의 브랜드를 전략적으로 구축하고
                성장시킬 수 있는 종합적인 역량을 갖추게 되었습니다.
                브랜딩은 시험이 끝나면 멈추는 것이 아니라, 매일의 작은 실천으로 이어지는 평생의 여정입니다.
                이 과정에서 배운 지식과 경험을 토대로 여러분만의 독보적인 브랜드를 만들어 가시길 바랍니다.
                여러분의 브랜드가 세상에 긍정적인 영향을 미치길 진심으로 응원합니다!
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/presentation" className="lesson-nav-btn prev">&larr; 14주차: 프로젝트 발표 &amp; 피드백</Link>
              <Link to="/lessons" className="lesson-nav-btn next">커리큘럼 목록 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek15;

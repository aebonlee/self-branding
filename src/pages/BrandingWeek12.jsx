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
          <p>12주간의 학습을 총정리하고, 나만의 브랜딩 프로젝트를 완성하여 발표합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 프로젝트 개요</h2>
            <p>
              12주간의 셀프 브랜딩 마케팅 과정을 마무리하는 종합 프로젝트입니다.
              지금까지 배운 자기분석, 타겟 설정, 브랜드 아이덴티티, 디지털 마케팅, SNS 전략,
              콘텐츠 마케팅, PR, 개인 브랜딩, 포트폴리오 브랜딩, 마케팅 분석까지 모든 역량을
              하나의 프로젝트에 통합하여 실행합니다. 이 프로젝트는 단순한 과제가 아니라,
              실제로 활용할 수 있는 브랜딩 결과물을 만드는 실전 프로젝트입니다.
            </p>

            <div className="callout-box">
              <h3>프로젝트 목표</h3>
              <ul>
                <li><strong>통합 역량 발휘</strong> — 12주간 배운 이론과 실습을 종합적으로 활용</li>
                <li><strong>실행력 검증</strong> — 기획부터 실행, 측정까지 전체 프로세스 경험</li>
                <li><strong>포트폴리오 구축</strong> — 취업/사업에 활용 가능한 실제 결과물 확보</li>
                <li><strong>발표 역량</strong> — 프레젠테이션을 통한 커뮤니케이션 능력 향상</li>
                <li><strong>피드백 수용</strong> — 동료와 멘토의 피드백을 통해 개선하는 역량 배양</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>프로젝트 일정</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기간</th><th>활동</th><th>산출물</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1주차</strong></td><td>프로젝트 기획, 전략서 작성</td><td>브랜드 전략서, 마케팅 플랜 초안</td></tr>
                  <tr><td><strong>2주차</strong></td><td>비주얼 디자인, 콘텐츠 제작, 채널 운영 시작</td><td>브랜드 가이드라인, 콘텐츠 5개+</td></tr>
                  <tr><td><strong>3주차</strong></td><td>실행 지속, 성과 측정, 발표 준비</td><td>성과 보고서, 발표 자료</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">2. 프로젝트 유형</h2>
            <p>두 가지 프로젝트 유형 중 하나를 선택하세요. 자신의 상황과 목표에 맞는 유형을 선택하면 됩니다.</p>

            <h3>옵션 A: 개인 브랜딩 프로젝트</h3>
            <div className="section-card" data-aos="fade-up">
              <p>자기 자신을 브랜드화하는 프로젝트입니다. 취업 준비생, 프리랜서, 1인 사업자, 크리에이터에게 적합합니다.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>활동</th><th>산출물</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>분석</strong></td><td>SWOT 분석, 핵심가치 도출, 타겟 오디언스 정의</td><td>자기분석 보고서</td></tr>
                  <tr><td><strong>전략</strong></td><td>포지셔닝, USP 설정, 브랜드 스토리, 채널 전략</td><td>브랜드 전략서</td></tr>
                  <tr><td><strong>디자인</strong></td><td>로고, 컬러 팔레트, 소셜 프로필, 명함</td><td>브랜드 가이드라인</td></tr>
                  <tr><td><strong>실행</strong></td><td>SNS 운영 (최소 2주), 콘텐츠 10개 이상 제작</td><td>콘텐츠 포트폴리오</td></tr>
                  <tr><td><strong>측정</strong></td><td>팔로워 증가, 참여율, 도달률, 전환 분석</td><td>성과 보고서</td></tr>
                </tbody>
              </table>
            </div>

            <h3>옵션 B: 가상 기업 브랜딩 프로젝트</h3>
            <div className="section-card" data-aos="fade-up">
              <p>가상의 기업이나 브랜드를 대상으로 하는 프로젝트입니다. 마케터, 기획자, 예비 창업자에게 적합합니다.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>활동</th><th>산출물</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>분석</strong></td><td>시장조사, 경쟁분석, 타겟 페르소나 3개 작성</td><td>시장분석 보고서</td></tr>
                  <tr><td><strong>전략</strong></td><td>STP 전략, 마케팅 믹스(4P), 채널 전략</td><td>마케팅 전략서</td></tr>
                  <tr><td><strong>디자인</strong></td><td>브랜드명, CI/BI, 패키지, 웹사이트 기획</td><td>브랜드 아이덴티티 키트</td></tr>
                  <tr><td><strong>실행</strong></td><td>캠페인 기획, 콘텐츠 제작, 광고 시뮬레이션</td><td>캠페인 실행안</td></tr>
                  <tr><td><strong>측정</strong></td><td>KPI 설정, 예상 ROI 산출, 대시보드 설계</td><td>성과 측정 프레임워크</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">3. 프로젝트 구성요소</h2>
            <p>
              최종 프로젝트는 4가지 핵심 구성요소로 이루어집니다.
              각 요소가 서로 유기적으로 연결되어 하나의 완성된 브랜딩 시스템을 구성해야 합니다.
            </p>

            <div className="callout-box">
              <h4>4대 구성요소</h4>
              <ul>
                <li><strong>브랜드 전략서</strong> — 브랜드의 방향성과 전략적 기반 (미션, 비전, 타겟, 포지셔닝, SWOT)</li>
                <li><strong>비주얼 아이덴티티</strong> — 브랜드의 시각적 표현 체계 (로고, 컬러, 타이포, 가이드라인)</li>
                <li><strong>마케팅 플랜</strong> — 실행 계획서 (채널, 콘텐츠, 일정, 예산, KPI)</li>
                <li><strong>콘텐츠 샘플</strong> — 실제 제작한 콘텐츠 (SNS 포스트, 블로그, 영상 등 10개+)</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 브랜드 전략서 템플릿</h2>
            <p>
              브랜드 전략서는 프로젝트의 핵심 문서입니다.
              아래 템플릿을 참고하여 자신만의 브랜드 전략서를 작성하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>브랜드 전략서 구성</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>섹션</th><th>포함 내용</th><th>작성 가이드</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>미션 (Mission)</strong></td>
                    <td>브랜드의 존재 이유, 핵심 목적</td>
                    <td>"우리는 [타겟]을 위해 [핵심 활동]을 통해 [제공 가치]를 만듭니다"</td>
                  </tr>
                  <tr>
                    <td><strong>비전 (Vision)</strong></td>
                    <td>3~5년 후 달성하고자 하는 모습</td>
                    <td>구체적이고 영감을 주는 미래 목표. 측정 가능하면 더 좋음</td>
                  </tr>
                  <tr>
                    <td><strong>핵심 가치 (Core Values)</strong></td>
                    <td>브랜드가 지키는 3~5개의 가치</td>
                    <td>모든 의사결정의 기준이 되는 가치 (예: 진정성, 혁신, 고객 중심)</td>
                  </tr>
                  <tr>
                    <td><strong>타겟 오디언스</strong></td>
                    <td>페르소나 2~3개, 인구통계, 심리통계</td>
                    <td>이름, 나이, 직업, 고민, 목표, 미디어 소비 습관 포함</td>
                  </tr>
                  <tr>
                    <td><strong>포지셔닝</strong></td>
                    <td>경쟁자 대비 차별화 포인트</td>
                    <td>포지셔닝 맵 작성, USP(고유 판매 제안) 1문장으로 정의</td>
                  </tr>
                  <tr>
                    <td><strong>SWOT 분석</strong></td>
                    <td>강점, 약점, 기회, 위협</td>
                    <td>각 항목 3~5개씩, SWOT에서 도출된 전략 방향 포함</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드 퍼스낼리티</strong></td>
                    <td>브랜드의 성격, 톤앤매너</td>
                    <td>만약 브랜드가 사람이라면? (예: 친근한 멘토, 전문적인 교수, 유쾌한 친구)</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드 스토리</strong></td>
                    <td>히어로즈 저니 기반 브랜드 내러티브</td>
                    <td>시작 → 과제 → 해결 → 변화의 스토리라인</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>브랜드 전략서 작성 팁</h3>
              <p>
                전략서는 화려한 문서가 아니라, 실행의 나침반이 되어야 합니다.
                모든 마케팅 활동에서 "이것이 우리 전략과 일치하는가?"라고 물을 수 있도록
                명확하고 구체적으로 작성하세요. 추상적인 표현보다 구체적인 수치와 사례를 포함하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">5. 마케팅 플랜 템플릿</h2>
            <p>
              마케팅 플랜은 브랜드 전략을 실제 행동으로 옮기는 실행 계획서입니다.
              아래 템플릿을 참고하여 실현 가능한 마케팅 플랜을 수립하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 플랜 구성</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>섹션</th><th>포함 내용</th><th>작성 가이드</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>채널 전략</strong></td>
                    <td>사용할 마케팅 채널과 각 채널의 역할</td>
                    <td>주력 채널 1~2개 + 보조 채널 2~3개 선정. 채널별 목적과 타겟 명시</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 캘린더</strong></td>
                    <td>4주간의 콘텐츠 발행 계획</td>
                    <td>채널별 콘텐츠 유형, 주제, 발행일, 담당자. 월간 테마 설정</td>
                  </tr>
                  <tr>
                    <td><strong>예산</strong></td>
                    <td>마케팅 활동별 예상 비용</td>
                    <td>광고비, 도구 구독료, 콘텐츠 제작비, 인건비 항목별 산정</td>
                  </tr>
                  <tr>
                    <td><strong>KPI</strong></td>
                    <td>SMART 기준의 핵심 성과 지표</td>
                    <td>채널별 2~3개 KPI 설정, 측정 도구 및 주기 명시</td>
                  </tr>
                  <tr>
                    <td><strong>타임라인</strong></td>
                    <td>주간/월간 실행 일정</td>
                    <td>간트 차트 형식으로 단계별 일정 시각화</td>
                  </tr>
                  <tr>
                    <td><strong>위험 요소</strong></td>
                    <td>예상되는 리스크와 대응 방안</td>
                    <td>예산 초과, 일정 지연, 반응 부진 등 시나리오별 대응책</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>채널 전략 예시</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>채널</th><th>역할</th><th>콘텐츠 유형</th><th>발행 빈도</th><th>KPI</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Instagram (주력)</strong></td>
                  <td>인지도 확보, 커뮤니티 구축</td>
                  <td>카드뉴스, 릴스, 스토리</td>
                  <td>주 4~5회</td>
                  <td>참여율 5%+, 월 팔로워 200+</td>
                </tr>
                <tr>
                  <td><strong>블로그 (주력)</strong></td>
                  <td>전문성 증명, SEO 트래픽</td>
                  <td>가이드, 튜토리얼, 사례 분석</td>
                  <td>주 1~2회</td>
                  <td>월 UV 2,000+, 평균 체류 3분+</td>
                </tr>
                <tr>
                  <td><strong>뉴스레터 (보조)</strong></td>
                  <td>리드 너처링, 충성 고객 유지</td>
                  <td>주간 인사이트, 큐레이션</td>
                  <td>주 1회</td>
                  <td>오픈율 25%+, 구독자 100+</td>
                </tr>
                <tr>
                  <td><strong>LinkedIn (보조)</strong></td>
                  <td>B2B 네트워킹, 전문가 브랜딩</td>
                  <td>경험 공유, 인사이트 포스트</td>
                  <td>주 2~3회</td>
                  <td>프로필 조회 주 100+</td>
                </tr>
              </tbody>
            </table>

            <h3>예산 템플릿</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>항목</th><th>세부 내용</th><th>월 예상 비용</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>도구/플랫폼</strong></td><td>Canva Pro, 뉴스레터 도구, 분석 도구</td><td>3~5만 원</td><td>무료 대안 활용 가능</td></tr>
                <tr><td><strong>광고비</strong></td><td>인스타그램/구글 광고 테스트</td><td>5~10만 원</td><td>선택사항</td></tr>
                <tr><td><strong>콘텐츠 제작</strong></td><td>사진, 영상, 디자인 외주</td><td>0~20만 원</td><td>직접 제작 시 절감</td></tr>
                <tr><td><strong>도메인/호스팅</strong></td><td>개인 웹사이트 운영</td><td>1~2만 원</td><td>GitHub Pages 무료</td></tr>
                <tr><td><strong>교육/자료</strong></td><td>참고 서적, 온라인 강의</td><td>2~5만 원</td><td>선택사항</td></tr>
                <tr><td><strong>합계</strong></td><td></td><td><strong>11~42만 원</strong></td><td>규모에 따라 조정</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">6. 발표 준비</h2>
            <p>
              프로젝트 결과를 10~15분 내외의 프레젠테이션으로 발표합니다.
              발표는 프로젝트의 완성도뿐 아니라, 브랜드를 설득력 있게 전달하는 능력을 보여주는 기회입니다.
            </p>

            <h3>프레젠테이션 구성</h3>
            <div className="callout-box">
              <h4>발표 슬라이드 구성 (15분 기준)</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>순서</th><th>내용</th><th>시간</th><th>슬라이드 수</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. 오프닝</strong></td><td>임팩트 있는 시작 (질문, 통계, 에피소드)</td><td>1분</td><td>1~2장</td></tr>
                  <tr><td><strong>2. 프로젝트 소개</strong></td><td>프로젝트 배경, 목표, 타겟</td><td>2분</td><td>2~3장</td></tr>
                  <tr><td><strong>3. 분석 결과</strong></td><td>시장/자기 분석, SWOT, 핵심 인사이트</td><td>2분</td><td>2~3장</td></tr>
                  <tr><td><strong>4. 브랜드 전략</strong></td><td>포지셔닝, USP, 브랜드 아이덴티티</td><td>3분</td><td>3~4장</td></tr>
                  <tr><td><strong>5. 실행 결과</strong></td><td>콘텐츠 예시, 채널 운영 결과, 데이터</td><td>3분</td><td>3~5장</td></tr>
                  <tr><td><strong>6. 성과 &amp; 배운 점</strong></td><td>KPI 달성, ROI, 실패와 교훈</td><td>2분</td><td>2~3장</td></tr>
                  <tr><td><strong>7. 향후 계획</strong></td><td>다음 단계, 확장 계획</td><td>1분</td><td>1장</td></tr>
                  <tr><td><strong>8. Q&amp;A</strong></td><td>질의응답</td><td>1분</td><td>감사 슬라이드</td></tr>
                </tbody>
              </table>
            </div>

            <h3>피칭 기법</h3>
            <ul>
              <li><strong>HOOK 기법</strong>: 첫 30초에 청중의 관심을 사로잡기 (놀라운 통계, 개인 에피소드, 도발적 질문)</li>
              <li><strong>STAR 구조</strong>: 상황(Situation) → 과제(Task) → 행동(Action) → 결과(Result)로 스토리 전개</li>
              <li><strong>규칙의 3</strong>: 핵심 메시지를 3개로 압축 (사람은 3가지까지 기억합니다)</li>
              <li><strong>데이터 시각화</strong>: 숫자를 그래프와 차트로 변환하여 임팩트 극대화</li>
              <li><strong>Before &amp; After</strong>: 프로젝트 전후의 변화를 시각적으로 대비</li>
              <li><strong>CTA로 마무리</strong>: "저를 팔로우해주세요" 등 구체적인 행동 유도로 마무리</li>
            </ul>

            <div className="info-box warning">
              <h3>발표 시 피해야 할 것</h3>
              <ul>
                <li>슬라이드에 텍스트를 빼곡히 채우는 것 (키워드와 비주얼 중심으로)</li>
                <li>슬라이드를 그대로 읽는 것 (발표자는 이야기를 전달하는 사람)</li>
                <li>시간 초과 (연습을 통해 정확히 15분 안에 마무리)</li>
                <li>성과를 과장하거나 실패를 숨기는 것 (진정성이 가장 중요)</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">7. 피드백 &amp; 개선</h2>
            <p>
              좋은 브랜드는 피드백을 통해 성장합니다. 동료, 멘토, 그리고 타겟 오디언스의
              다양한 시각을 수렴하여 지속적으로 개선해 나가세요.
            </p>

            <h3>피드백 수집 방법</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>피드백 유형</th><th>방법</th><th>주요 질문</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>동료 피드백 (Peer Review)</strong></td>
                  <td>동료 2~3명에게 프로젝트 공유, 구조화된 피드백 폼 제공</td>
                  <td>브랜드 메시지가 명확한가? 비주얼이 일관적인가? 콘텐츠가 가치를 제공하는가?</td>
                </tr>
                <tr>
                  <td><strong>멘토링</strong></td>
                  <td>업계 전문가 또는 강사에게 1:1 리뷰 요청</td>
                  <td>전략의 실현 가능성은? 시장에서의 경쟁력은? 개선 우선순위는?</td>
                </tr>
                <tr>
                  <td><strong>타겟 오디언스 검증</strong></td>
                  <td>실제 타겟 대상 5~10명에게 설문조사 또는 인터뷰</td>
                  <td>이 브랜드가 어떤 인상을 주는가? 팔로우/구매 의향이 있는가? 개선점은?</td>
                </tr>
                <tr>
                  <td><strong>데이터 기반 피드백</strong></td>
                  <td>GA4, SNS 인사이트 등 실제 성과 데이터 분석</td>
                  <td>어떤 콘텐츠가 효과적이었는가? 이탈 지점은 어디인가?</td>
                </tr>
              </tbody>
            </table>

            <h3>반복 개선 (Iteration) 프로세스</h3>
            <div className="callout-box">
              <h4>PDCA 사이클 적용</h4>
              <ul>
                <li><strong>Plan (계획)</strong>: 피드백을 기반으로 개선 우선순위 설정</li>
                <li><strong>Do (실행)</strong>: 가장 중요한 개선사항부터 적용</li>
                <li><strong>Check (점검)</strong>: 개선 후 성과 변화 측정</li>
                <li><strong>Act (조치)</strong>: 효과가 있으면 유지, 없으면 다른 방법 시도</li>
              </ul>
              <p>이 사이클을 2주 단위로 반복하면 빠른 속도로 브랜드가 성장합니다.</p>
            </div>

            <div className="info-box tip">
              <h3>피드백을 잘 받는 법</h3>
              <p>
                피드백은 공격이 아니라 선물입니다. 방어적으로 반응하지 말고, 먼저 감사를 표현하세요.
                모든 피드백을 다 수용할 필요는 없지만, 3명 이상에게서 동일한 피드백이 나오면
                그것은 반드시 개선해야 할 부분입니다. 피드백을 기록하고, 우선순위를 매겨 하나씩 개선하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">8. 평가 기준</h2>
            <p>
              최종 프로젝트는 아래 5가지 영역에서 종합적으로 평가됩니다.
              각 영역의 배점을 확인하고, 균형 있게 준비하세요.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>평가 영역</th><th>배점</th><th>세부 기준</th><th>우수 사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 전략</strong></td>
                  <td><strong>30%</strong></td>
                  <td>미션/비전의 명확성, SWOT의 깊이, 포지셔닝 차별화, 타겟 분석 정밀도</td>
                  <td>데이터에 기반한 논리적 전략, 경쟁사 대비 명확한 USP</td>
                </tr>
                <tr>
                  <td><strong>비주얼 아이덴티티</strong></td>
                  <td><strong>20%</strong></td>
                  <td>로고/컬러의 전문성, 모든 채널의 시각적 일관성, 브랜드 가이드라인 완성도</td>
                  <td>프로페셔널한 디자인, 톤앤매너의 일관성</td>
                </tr>
                <tr>
                  <td><strong>마케팅 플랜</strong></td>
                  <td><strong>20%</strong></td>
                  <td>채널 전략의 논리성, 콘텐츠 캘린더의 실현 가능성, 예산의 합리성, KPI 적절성</td>
                  <td>SMART KPI 설정, 채널별 차별화된 전략</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 품질</strong></td>
                  <td><strong>15%</strong></td>
                  <td>콘텐츠의 가치와 완성도, 타겟에 대한 적합성, 다양한 유형 활용</td>
                  <td>실제 반응을 얻은 콘텐츠, 리퍼포징 활용</td>
                </tr>
                <tr>
                  <td><strong>발표</strong></td>
                  <td><strong>15%</strong></td>
                  <td>스토리텔링, 시각 자료 품질, 전달력, 시간 준수, Q&amp;A 대응</td>
                  <td>청중의 관심을 끄는 오프닝, 데이터 기반 설득</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>등급 기준</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>등급</th><th>점수 범위</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>S (탁월)</strong></td><td>90~100점</td><td>모든 영역에서 탁월한 완성도. 실제 비즈니스에 즉시 활용 가능한 수준</td></tr>
                  <tr><td><strong>A (우수)</strong></td><td>80~89점</td><td>대부분의 영역에서 높은 완성도. 약간의 보완으로 실전 활용 가능</td></tr>
                  <tr><td><strong>B (양호)</strong></td><td>70~79점</td><td>기본기가 탄탄하나 일부 영역에서 보완 필요</td></tr>
                  <tr><td><strong>C (보통)</strong></td><td>60~69점</td><td>핵심 요소는 갖추었으나 전반적으로 깊이가 부족</td></tr>
                  <tr><td><strong>D (미흡)</strong></td><td>60점 미만</td><td>주요 구성요소 누락 또는 완성도 부족</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">9. 최종 체크리스트</h2>
            <p>제출 전 아래 체크리스트를 확인하여 빠진 항목이 없는지 점검하세요.</p>

            <div className="exercise-box">
              <h3>제출 전 최종 체크리스트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>체크 항목</th><th>확인</th></tr>
                </thead>
                <tbody>
                  <tr><td rowSpan="5"><strong>브랜드 전략서</strong></td><td>미션과 비전이 명확하게 작성되었는가</td><td></td></tr>
                  <tr><td>타겟 페르소나가 구체적으로 정의되었는가 (2개 이상)</td><td></td></tr>
                  <tr><td>SWOT 분석이 현실적이고 깊이 있게 작성되었는가</td><td></td></tr>
                  <tr><td>포지셔닝이 경쟁자와 차별화되어 있는가</td><td></td></tr>
                  <tr><td>브랜드 스토리가 감정적 연결을 만드는가</td><td></td></tr>
                  <tr><td rowSpan="4"><strong>비주얼 아이덴티티</strong></td><td>로고가 다양한 크기/배경에서도 잘 보이는가</td><td></td></tr>
                  <tr><td>컬러 팔레트가 정의되어 있는가 (주색, 보조색, 강조색)</td><td></td></tr>
                  <tr><td>모든 채널(SNS, 웹사이트, 명함 등)에서 일관된 비주얼인가</td><td></td></tr>
                  <tr><td>브랜드 가이드라인 문서가 있는가</td><td></td></tr>
                  <tr><td rowSpan="4"><strong>마케팅 플랜</strong></td><td>채널 전략과 각 채널의 역할이 명확한가</td><td></td></tr>
                  <tr><td>4주간의 콘텐츠 캘린더가 완성되었는가</td><td></td></tr>
                  <tr><td>예산이 현실적으로 산정되었는가</td><td></td></tr>
                  <tr><td>SMART 기준의 KPI가 3개 이상 설정되었는가</td><td></td></tr>
                  <tr><td rowSpan="3"><strong>콘텐츠</strong></td><td>10개 이상의 콘텐츠를 실제로 제작했는가</td><td></td></tr>
                  <tr><td>교육형, 영감형, 엔터테인먼트형 등 다양한 유형이 포함되었는가</td><td></td></tr>
                  <tr><td>실제 성과 데이터(좋아요, 도달, 댓글 등)가 있는가</td><td></td></tr>
                  <tr><td rowSpan="4"><strong>발표</strong></td><td>15분 이내로 발표를 마칠 수 있는가</td><td></td></tr>
                  <tr><td>시각 자료(PPT/PDF)가 준비되었는가</td><td></td></tr>
                  <tr><td>예상 질문에 대한 답변을 준비했는가</td><td></td></tr>
                  <tr><td>최소 2회 이상 리허설을 했는가</td><td></td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">10. 12주 핵심 요약</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>주차</th><th>주제</th><th>핵심 키워드</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>셀프 브랜딩 개론</td><td>브랜딩 정의, 퍼스널 vs 기업, 성공 사례</td></tr>
                <tr><td>2</td><td>자기분석 &amp; 핵심가치</td><td>SWOT, 조하리의 창, 미션/비전</td></tr>
                <tr><td>3</td><td>타겟 오디언스 분석</td><td>페르소나, STP, 경쟁분석</td></tr>
                <tr><td>4</td><td>브랜드 아이덴티티</td><td>네이밍, 로고, 컬러, 가이드라인</td></tr>
                <tr><td>5</td><td>디지털 마케팅 기초</td><td>SEO, SEM, 마케팅 퍼널, AARRR</td></tr>
                <tr><td>6</td><td>SNS 마케팅 전략</td><td>플랫폼 선택, 해시태그, 인플루언서</td></tr>
                <tr><td>7</td><td>콘텐츠 마케팅</td><td>스토리텔링, 블로그, 뉴스레터, 캘린더</td></tr>
                <tr><td>8</td><td>기업 홍보 &amp; PR</td><td>보도자료, 미디어 관계, 위기관리</td></tr>
                <tr><td>9</td><td>개인 브랜딩 실전</td><td>온라인 프레즌스, LinkedIn, 네트워킹</td></tr>
                <tr><td>10</td><td>포트폴리오 브랜딩</td><td>포트폴리오, 이력서, STAR 기법, 웹사이트</td></tr>
                <tr><td>11</td><td>마케팅 분석 &amp; KPI</td><td>GA4, ROI, A/B 테스트, 대시보드</td></tr>
                <tr><td>12</td><td>종합 프로젝트</td><td>전략서, 비주얼, 마케팅 플랜, 발표</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">11. 졸업 후 로드맵</h2>
            <div className="callout-box">
              <h3>브랜드 성장 로드맵</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기간</th><th>활동</th><th>목표</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1~3개월</strong></td><td>SNS 정기 운영, 콘텐츠 루틴 확립, 네트워킹 시작</td><td>팔로워 500명, 주 3회 게시, 월 1회 네트워킹</td></tr>
                  <tr><td><strong>3~6개월</strong></td><td>네트워킹 확대, 협업 시작, 뉴스레터 론칭</td><td>업계 인맥 20명+, 콜라보 2건+, 구독자 200명</td></tr>
                  <tr><td><strong>6~12개월</strong></td><td>전문 콘텐츠 심화, 강연/기고 시작, 사이드 프로젝트</td><td>팔로워 2,000명, 기고 3건+, 강연 1건+</td></tr>
                  <tr><td><strong>1~2년</strong></td><td>브랜드 확장, 수익 모델 구축, 커뮤니티 형성</td><td>강의/컨설팅, 부수입 월 50만원+, 커뮤니티 100명+</td></tr>
                </tbody>
              </table>
            </div>

            <div className="exercise-box">
              <h3>최종 프로젝트 제출 안내</h3>
              <ol>
                <li><strong>프로젝트 유형 선택</strong> — 옵션 A(개인 브랜딩) 또는 옵션 B(가상 기업 브랜딩)</li>
                <li><strong>브랜드 전략서</strong> — 미션/비전, 타겟, 포지셔닝, SWOT 포함 (3~5페이지)</li>
                <li><strong>비주얼 아이덴티티</strong> — 로고, 컬러 팔레트, 가이드라인 (2~3페이지)</li>
                <li><strong>마케팅 플랜</strong> — 채널 전략, 콘텐츠 캘린더, 예산, KPI (3~5페이지)</li>
                <li><strong>콘텐츠 샘플</strong> — 실제 제작한 콘텐츠 10개 이상 (캡처 또는 링크)</li>
                <li><strong>성과 보고서</strong> — KPI 달성 여부, 데이터 분석 결과 (1~2페이지)</li>
                <li><strong>발표 자료</strong> — PPT/PDF 15~25장, 10~15분 분량</li>
              </ol>
              <p style={{ marginTop: '1rem' }}>
                <strong>제출 기한:</strong> 프로젝트 시작 후 3주 이내<br />
                <strong>발표:</strong> 제출 후 1주 이내 진행<br />
                <strong>총 분량:</strong> 전체 문서 15~25페이지 + 콘텐츠 샘플 + 발표 자료
              </p>
            </div>

            <div className="info-box tip">
              <h3>수고하셨습니다!</h3>
              <p>
                12주간의 셀프 브랜딩 마케팅 과정을 모두 마치셨습니다.
                이 과정에서 배운 지식과 경험은 여러분의 커리어와 삶에서 강력한 자산이 될 것입니다.
                브랜딩은 단기간에 완성되는 것이 아니라, 꾸준한 노력과 진정성으로 성장하는 여정입니다.
                오늘 배운 것을 내일 바로 실천하세요. 여러분의 브랜드가 세상에 긍정적인 영향을 미치길 응원합니다!
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/marketing-analytics" className="lesson-nav-btn prev">&larr; 11주차: 마케팅 분석 &amp; KPI</Link>
              <Link to="/lessons" className="lesson-nav-btn next">커리큘럼 목록 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek12;

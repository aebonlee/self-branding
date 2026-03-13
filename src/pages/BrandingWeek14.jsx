import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek14 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="14주차: 프로젝트 발표 & 피드백" path="/lessons/presentation" />
      <section className="page-header">
        <div className="container">
          <h1>14주차: 프로젝트 발표 &amp; 피드백</h1>
          <p>13주차에 완성한 종합 프로젝트를 발표하고, 동료와 멘토의 피드백을 수렴합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 발표 개요</h2>
            <p>
              14주차는 13주차에 완성한 종합 프로젝트를 동료와 멘토 앞에서 발표하고,
              실질적인 피드백을 수렴하여 브랜드를 한 단계 더 발전시키는 시간입니다.
              발표는 단순히 결과물을 보여주는 것이 아니라, 전체 과정을 총정리하고
              자신의 브랜딩 전략을 설득력 있게 전달하는 기회입니다.
            </p>

            <div className="callout-box">
              <h3>발표 세션 구성</h3>
              <ul>
                <li><strong>프레젠테이션</strong> — 10~15분 분량의 발표 (슬라이드 15~25장)</li>
                <li><strong>Q&amp;A</strong> — 5분간 동료 및 멘토의 질의응답</li>
                <li><strong>피드백 세션</strong> — 발표 직후 구조화된 피드백 수렴</li>
                <li><strong>전체 목표</strong> — 13주간의 학습을 총정리하고, 브랜드를 외부 시각에서 검증받는 것</li>
              </ul>
              <p>
                발표는 브랜딩의 연장선입니다. 발표 자체가 곧 여러분의 브랜드를 보여주는 행위이므로,
                슬라이드 디자인부터 말투, 제스처까지 모두 브랜드 톤앤매너와 일치하도록 준비하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">2. 발표 슬라이드 구성 가이드</h2>
            <p>
              발표 슬라이드는 청중이 여러분의 프로젝트를 빠르게 이해하고 공감할 수 있도록
              논리적으로 구성해야 합니다. 아래 8단계 구성을 참고하여 슬라이드를 설계하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>8단계 슬라이드 구성</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>순서</th><th>섹션</th><th>내용</th><th>시간</th><th>슬라이드 수</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1</strong></td>
                    <td><strong>오프닝</strong></td>
                    <td>임팩트 있는 시작 (놀라운 통계, 개인 에피소드, 도발적 질문)</td>
                    <td>1분</td>
                    <td>1~2장</td>
                  </tr>
                  <tr>
                    <td><strong>2</strong></td>
                    <td><strong>프로젝트 소개</strong></td>
                    <td>프로젝트 배경, 선택 동기, 목표, 타겟 오디언스 정의</td>
                    <td>2분</td>
                    <td>2~3장</td>
                  </tr>
                  <tr>
                    <td><strong>3</strong></td>
                    <td><strong>분석 결과</strong></td>
                    <td>시장/자기 분석, SWOT, 경쟁 분석, 핵심 인사이트 도출</td>
                    <td>2분</td>
                    <td>2~3장</td>
                  </tr>
                  <tr>
                    <td><strong>4</strong></td>
                    <td><strong>브랜드 전략</strong></td>
                    <td>포지셔닝, USP, 브랜드 아이덴티티(로고, 컬러, 톤앤매너)</td>
                    <td>3분</td>
                    <td>3~4장</td>
                  </tr>
                  <tr>
                    <td><strong>5</strong></td>
                    <td><strong>실행 결과</strong></td>
                    <td>콘텐츠 예시, 채널 운영 결과, 캠페인 실행 데이터</td>
                    <td>3분</td>
                    <td>3~5장</td>
                  </tr>
                  <tr>
                    <td><strong>6</strong></td>
                    <td><strong>성과 &amp; 배운 점</strong></td>
                    <td>KPI 달성 여부, ROI, 실패 경험과 교훈, 핵심 러닝</td>
                    <td>2분</td>
                    <td>2~3장</td>
                  </tr>
                  <tr>
                    <td><strong>7</strong></td>
                    <td><strong>향후 계획</strong></td>
                    <td>다음 단계 액션 플랜, 3~6개월 확장 계획, 비전</td>
                    <td>1분</td>
                    <td>1~2장</td>
                  </tr>
                  <tr>
                    <td><strong>8</strong></td>
                    <td><strong>Q&amp;A</strong></td>
                    <td>감사 인사 + 연락처/채널 안내 + 질의응답</td>
                    <td>5분</td>
                    <td>1장</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>슬라이드 디자인 원칙</h3>
              <ul>
                <li><strong>1 슬라이드 = 1 메시지</strong>: 한 장에 하나의 핵심 메시지만 담으세요</li>
                <li><strong>6-6-6 규칙</strong>: 한 줄에 6단어, 한 슬라이드에 6줄, 연속 6장 이상 텍스트 슬라이드 금지</li>
                <li><strong>비주얼 우선</strong>: 텍스트보다 이미지, 그래프, 아이콘 중심으로 구성</li>
                <li><strong>브랜드 일관성</strong>: 슬라이드 전체에 브랜드 컬러, 폰트, 톤앤매너를 통일</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">3. 효과적인 발표 기법</h2>
            <p>
              좋은 콘텐츠도 전달 방식이 나쁘면 힘을 잃습니다.
              아래 6가지 발표 기법을 활용하면 청중의 집중력을 유지하고
              메시지를 강력하게 전달할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>6대 발표 기법</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기법</th><th>설명</th><th>활용 예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>HOOK 기법</strong></td>
                    <td>첫 30초에 청중의 관심을 사로잡는 오프닝 전략. 놀라운 통계, 개인 에피소드, 도발적 질문 중 선택</td>
                    <td>"여러분, 개인 브랜드가 있는 사람은 취업 성공률이 70% 높다는 사실, 알고 계셨나요?"</td>
                  </tr>
                  <tr>
                    <td><strong>STAR 구조</strong></td>
                    <td>상황(Situation) &rarr; 과제(Task) &rarr; 행동(Action) &rarr; 결과(Result)로 스토리를 전개하는 구조</td>
                    <td>"저는 무명 프리랜서였습니다(S). 클라이언트 확보가 절실했죠(T). 링크드인 전략을 세웠고(A), 3개월 만에 문의가 5배 늘었습니다(R)."</td>
                  </tr>
                  <tr>
                    <td><strong>규칙의 3</strong></td>
                    <td>핵심 메시지를 3개로 압축. 인간의 뇌는 3가지까지 쉽게 기억하므로 핵심 포인트를 3개로 정리</td>
                    <td>"이 프로젝트의 핵심은 세 가지입니다: 진정성, 일관성, 그리고 데이터 기반 실행."</td>
                  </tr>
                  <tr>
                    <td><strong>데이터 시각화</strong></td>
                    <td>숫자와 통계를 그래프, 차트, 인포그래픽으로 변환하여 임팩트를 극대화하는 기법</td>
                    <td>팔로워 성장 추이를 꺾은선 그래프로, 채널별 참여율을 막대 그래프로 시각화</td>
                  </tr>
                  <tr>
                    <td><strong>Before &amp; After</strong></td>
                    <td>프로젝트 시작 전과 후의 변화를 시각적으로 대비하여 성과를 극적으로 보여주는 기법</td>
                    <td>프로필 리뉴얼 전/후 비교, 콘텐츠 참여율 변화 비교, 브랜드 인지도 조사 전/후</td>
                  </tr>
                  <tr>
                    <td><strong>CTA 마무리</strong></td>
                    <td>발표를 구체적인 행동 유도(Call-to-Action)로 마무리하여 여운을 남기는 기법</td>
                    <td>"제 채널을 팔로우해주세요", "이 QR코드로 포트폴리오를 확인해보세요"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>비언어적 커뮤니케이션 팁</h3>
              <ul>
                <li><strong>아이 컨택</strong> — 슬라이드가 아닌 청중을 바라보세요. 3~5초씩 다른 사람에게 시선을 옮기세요</li>
                <li><strong>제스처</strong> — 손을 허리 위에서 자연스럽게 움직이며 강조점에서 제스처를 사용하세요</li>
                <li><strong>목소리 변화</strong> — 중요한 부분에서 속도를 줄이고, 핵심 수치에서 톤을 높이세요</li>
                <li><strong>침묵의 힘</strong> — 핵심 메시지 전후에 2~3초 침묵하면 메시지가 더 강렬해집니다</li>
                <li><strong>자세</strong> — 어깨를 펴고 양발을 어깨너비로 벌린 자세가 자신감을 전달합니다</li>
              </ul>
            </div>

            <div className="info-box warning">
              <h3>발표 시 피해야 할 것</h3>
              <ul>
                <li><strong>텍스트 과부하</strong> — 슬라이드에 텍스트를 빼곡히 채우지 마세요. 키워드와 비주얼 중심으로 구성하세요</li>
                <li><strong>슬라이드 낭독</strong> — 슬라이드를 그대로 읽지 마세요. 발표자는 스토리를 전달하는 사람입니다</li>
                <li><strong>시간 초과</strong> — 반드시 리허설을 통해 정해진 시간 안에 마무리하세요. 시간 초과는 감점 요인입니다</li>
                <li><strong>성과 과장</strong> — 성과를 과장하거나 실패를 숨기지 마세요. 진정성이 가장 강력한 설득 도구입니다</li>
                <li><strong>준비 부족</strong> — "여기는 잘 기억이 안 나는데..." 같은 말은 신뢰를 떨어뜨립니다. 최소 2회 리허설하세요</li>
                <li><strong>청중 무시</strong> — 노트북이나 스크린만 보며 발표하지 마세요. 청중과 소통하세요</li>
                <li><strong>사과로 시작</strong> — "준비가 부족하지만..." 같은 사과로 시작하지 마세요. 자신감 있게 시작하세요</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 피드백 세션 가이드</h2>
            <p>
              발표 후 피드백 세션은 프로젝트를 개선할 가장 중요한 기회입니다.
              세 가지 유형의 피드백을 체계적으로 수렴하여 브랜드의 완성도를 높이세요.
            </p>

            <h3>동료 피드백 (Peer Review)</h3>
            <div className="section-card" data-aos="fade-up">
              <p>
                동료 피드백은 같은 과정을 수강한 학습자 2~3명으로부터 받는 피드백입니다.
                동료는 학습자의 시각에서 프로젝트를 평가하므로, 실용적이고 공감 가능한 인사이트를 제공합니다.
              </p>
              <table className="lesson-table">
                <thead>
                  <tr><th>평가 항목</th><th>질문 예시</th><th>평가 척도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>브랜드 메시지</strong></td>
                    <td>브랜드가 전달하려는 메시지가 명확하게 느껴지는가?</td>
                    <td>1~5점</td>
                  </tr>
                  <tr>
                    <td><strong>비주얼 일관성</strong></td>
                    <td>로고, 컬러, 폰트 등 비주얼 요소가 일관되게 사용되었는가?</td>
                    <td>1~5점</td>
                  </tr>
                  <tr>
                    <td><strong>타겟 적합성</strong></td>
                    <td>설정한 타겟 오디언스에게 실제로 매력적일 것 같은가?</td>
                    <td>1~5점</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 품질</strong></td>
                    <td>콘텐츠가 가치를 제공하고, 완성도가 높은가?</td>
                    <td>1~5점</td>
                  </tr>
                  <tr>
                    <td><strong>차별화</strong></td>
                    <td>경쟁자 대비 독특하고 기억에 남는 브랜드인가?</td>
                    <td>1~5점</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>멘토 피드백</h3>
            <div className="section-card" data-aos="fade-up">
              <p>
                멘토(강사 또는 업계 전문가)의 피드백은 전략의 실현 가능성과
                시장에서의 경쟁력을 중심으로 전문적인 관점에서 이루어집니다.
              </p>
              <ul>
                <li><strong>전략 검증</strong> — 브랜드 전략이 시장 현실에 부합하는가?</li>
                <li><strong>실행력 평가</strong> — 계획 대비 실행의 완성도는 어떠한가?</li>
                <li><strong>성장 가능성</strong> — 이 브랜드가 지속 가능하게 성장할 수 있는가?</li>
                <li><strong>개선 우선순위</strong> — 가장 먼저 개선해야 할 1~2가지는 무엇인가?</li>
                <li><strong>업계 벤치마크</strong> — 유사한 성공 사례와 비교했을 때 수준은 어떤가?</li>
              </ul>
            </div>

            <h3>타겟 오디언스 검증 방법</h3>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>방법</th><th>대상</th><th>핵심 질문</th><th>소요 시간</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1:1 인터뷰</strong></td>
                    <td>타겟 페르소나에 해당하는 실제 인물 3~5명</td>
                    <td>이 브랜드를 처음 보았을 때 어떤 인상을 받는가? 팔로우/구매 의향이 있는가?</td>
                    <td>인당 15~20분</td>
                  </tr>
                  <tr>
                    <td><strong>온라인 설문</strong></td>
                    <td>타겟 오디언스 20~50명</td>
                    <td>브랜드 메시지가 공감되는가? 콘텐츠의 어떤 점이 가장 유용한가?</td>
                    <td>설문 5~10분</td>
                  </tr>
                  <tr>
                    <td><strong>랜딩 페이지 테스트</strong></td>
                    <td>불특정 다수 (광고 유입)</td>
                    <td>클릭률, 전환율, 체류 시간으로 브랜드 메시지 효과 검증</td>
                    <td>1~2주 운영</td>
                  </tr>
                  <tr>
                    <td><strong>소셜 미디어 반응</strong></td>
                    <td>실제 팔로워 및 잠재 고객</td>
                    <td>어떤 콘텐츠에 참여율이 높은가? 댓글에서 어떤 반응이 나오는가?</td>
                    <td>2~4주 분석</td>
                  </tr>
                  <tr>
                    <td><strong>A/B 테스트</strong></td>
                    <td>웹사이트/SNS 방문자</td>
                    <td>어떤 메시지/비주얼이 더 높은 전환을 이끌어내는가?</td>
                    <td>1~2주 운영</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>피드백을 잘 받는 법 / 잘 주는 법</h3>
              <h4>피드백을 잘 받는 법</h4>
              <ul>
                <li><strong>방어하지 마세요</strong> — 피드백은 공격이 아니라 선물입니다. 먼저 "감사합니다"로 시작하세요</li>
                <li><strong>기록하세요</strong> — 모든 피드백을 메모하고, 발표 후에 정리하세요. 기억에 의존하지 마세요</li>
                <li><strong>질문하세요</strong> — "좀 더 구체적으로 말씀해 주실 수 있나요?"라고 물어보세요</li>
                <li><strong>패턴을 찾으세요</strong> — 3명 이상에게서 동일한 피드백이 나오면 반드시 개선해야 할 부분입니다</li>
                <li><strong>선택하세요</strong> — 모든 피드백을 수용할 필요는 없습니다. 우선순위를 매겨 핵심만 반영하세요</li>
              </ul>
              <h4>피드백을 잘 주는 법</h4>
              <ul>
                <li><strong>SBI 모델</strong> — 상황(Situation), 행동(Behavior), 영향(Impact)으로 구조화하세요</li>
                <li><strong>샌드위치 기법</strong> — 긍정적 피드백 &rarr; 개선 제안 &rarr; 격려의 순서로 전달하세요</li>
                <li><strong>구체적으로</strong> — "좋았어요" 대신 "SWOT 분석의 기회 파트가 데이터에 근거해서 설득력이 있었어요"</li>
                <li><strong>행동 중심</strong> — 인격이 아닌 행동/결과물에 대해 피드백하세요</li>
                <li><strong>대안 제시</strong> — 문제만 지적하지 말고, 구체적인 개선 방향을 함께 제안하세요</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. 반복 개선(Iteration) 프로세스</h2>
            <p>
              한 번의 발표와 피드백으로 끝나지 않습니다. 피드백을 체계적으로 반영하고
              지속적으로 개선하는 프로세스를 수립해야 진정한 브랜드 성장이 가능합니다.
              PDCA 사이클을 활용하여 반복 개선을 습관화하세요.
            </p>

            <div className="callout-box">
              <h3>PDCA 사이클 적용</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>활동</th><th>브랜딩 적용 예시</th><th>산출물</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Plan (계획)</strong></td>
                    <td>피드백을 분류하고 개선 우선순위를 설정. 가장 임팩트가 큰 항목부터 계획 수립</td>
                    <td>"동료 3명이 브랜드 메시지가 모호하다고 지적 &rarr; USP를 더 명확하게 재정의"</td>
                    <td>개선 계획서 (우선순위 목록)</td>
                  </tr>
                  <tr>
                    <td><strong>Do (실행)</strong></td>
                    <td>계획된 개선사항을 즉시 적용. 가장 중요한 1~2가지부터 실행</td>
                    <td>"새로운 USP 문구 작성, 슬라이드 3~4번 수정, SNS 프로필 업데이트"</td>
                    <td>수정된 결과물</td>
                  </tr>
                  <tr>
                    <td><strong>Check (점검)</strong></td>
                    <td>개선 후 실제로 효과가 있는지 데이터와 반응으로 확인</td>
                    <td>"수정된 USP로 타겟 5명에게 재검증 &rarr; 이해도 점수 3.2에서 4.5로 상승"</td>
                    <td>점검 보고서 (전후 비교)</td>
                  </tr>
                  <tr>
                    <td><strong>Act (조치)</strong></td>
                    <td>효과가 있으면 표준화하여 유지, 없으면 다른 방법을 시도</td>
                    <td>"효과 확인 &rarr; 브랜드 가이드라인에 새 USP 반영 &rarr; 다음 개선 항목으로 이동"</td>
                    <td>업데이트된 브랜드 가이드라인</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                이 사이클을 2주 단위로 반복하면 빠른 속도로 브랜드가 성장합니다.
                완벽을 추구하기보다 빠르게 개선하고 검증하는 것이 핵심입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 발표 평가 기준</h2>
            <p>
              14주차 발표는 아래 4가지 영역에서 종합적으로 평가됩니다.
              각 영역의 배점을 확인하고 균형 있게 준비하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>평가 영역</th><th>배점</th><th>세부 기준</th><th>우수 기준</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>발표력</strong></td>
                    <td><strong>40%</strong></td>
                    <td>스토리텔링 구성, 아이 컨택, 제스처, 목소리 톤 변화, 자신감, 청중 소통</td>
                    <td>청중이 끝까지 집중하고, 핵심 메시지가 명확하게 전달됨</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 품질</strong></td>
                    <td><strong>30%</strong></td>
                    <td>슬라이드 디자인, 데이터 시각화, 논리적 흐름, 정보의 깊이와 정확성</td>
                    <td>비주얼이 프로페셔널하고, 데이터가 설득력 있게 제시됨</td>
                  </tr>
                  <tr>
                    <td><strong>Q&amp;A 대응</strong></td>
                    <td><strong>15%</strong></td>
                    <td>질문 이해력, 답변의 논리성과 구체성, 모르는 것에 대한 솔직한 대응</td>
                    <td>예상 질문을 미리 준비하고, 예상치 못한 질문에도 침착하게 대응함</td>
                  </tr>
                  <tr>
                    <td><strong>시간 준수</strong></td>
                    <td><strong>15%</strong></td>
                    <td>10~15분 내 발표 완료, 섹션별 시간 배분의 적절성</td>
                    <td>정확히 시간 내에 마무리하며, 서두르거나 늘어지지 않음</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>등급 기준</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>등급</th><th>점수</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>S (탁월)</strong></td><td>90~100점</td><td>모든 영역에서 탁월. 프로페셔널 수준의 프레젠테이션으로 청중을 사로잡음</td></tr>
                  <tr><td><strong>A (우수)</strong></td><td>80~89점</td><td>대부분의 영역에서 우수. 약간의 보완으로 실전 발표에 활용 가능한 수준</td></tr>
                  <tr><td><strong>B (양호)</strong></td><td>70~79점</td><td>기본기가 탄탄하나 발표력 또는 콘텐츠 일부에서 보완 필요</td></tr>
                  <tr><td><strong>C (보통)</strong></td><td>60~69점</td><td>핵심 요소는 갖추었으나 전반적으로 완성도와 깊이가 부족</td></tr>
                  <tr><td><strong>D (미흡)</strong></td><td>60점 미만</td><td>주요 구성요소 누락, 시간 초과, 또는 발표 준비 부족</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">7. 최종 체크리스트</h2>
            <p>발표 전 아래 체크리스트를 확인하여 빠진 항목이 없는지 점검하세요.</p>

            <div className="exercise-box">
              <h3>발표 전 확인사항</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>체크 항목</th><th>확인</th></tr>
                </thead>
                <tbody>
                  <tr><td rowSpan="4"><strong>슬라이드</strong></td><td>슬라이드가 15~25장 이내로 구성되었는가</td><td></td></tr>
                  <tr><td>모든 슬라이드에 브랜드 컬러와 폰트가 일관되게 적용되었는가</td><td></td></tr>
                  <tr><td>핵심 데이터가 그래프/차트로 시각화되었는가</td><td></td></tr>
                  <tr><td>오탈자, 정렬 오류, 깨진 이미지가 없는가</td><td></td></tr>
                  <tr><td rowSpan="4"><strong>발표 준비</strong></td><td>오프닝 HOOK이 준비되어 있는가</td><td></td></tr>
                  <tr><td>각 섹션의 전환 멘트가 자연스러운가</td><td></td></tr>
                  <tr><td>CTA로 마무리하는 클로징이 준비되었는가</td><td></td></tr>
                  <tr><td>예상 Q&amp;A 질문 5개 이상에 대한 답변이 준비되었는가</td><td></td></tr>
                  <tr><td rowSpan="3"><strong>리허설</strong></td><td>최소 2회 이상 리허설을 완료했는가</td><td></td></tr>
                  <tr><td>리허설 시 10~15분 이내로 마무리되었는가</td><td></td></tr>
                  <tr><td>타이머를 사용하여 섹션별 시간 배분을 확인했는가</td><td></td></tr>
                  <tr><td rowSpan="3"><strong>장비 &amp; 환경</strong></td><td>발표용 노트북/장비가 정상 작동하는가</td><td></td></tr>
                  <tr><td>슬라이드가 프로젝터/모니터에서 정상 표시되는가 (폰트 깨짐, 비율 확인)</td><td></td></tr>
                  <tr><td>백업 파일(USB, 클라우드)을 준비했는가</td><td></td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>실습 과제 1: 발표 리허설 (최소 2회)</h3>
              <p>발표를 최소 2회 이상 리허설하고, 아래 항목을 기록하세요:</p>
              <ul>
                <li><strong>1차 리허설</strong> — 혼자 진행. 타이머를 켜고 전체 발표를 처음부터 끝까지 실행. 소요 시간 기록</li>
                <li><strong>2차 리허설</strong> — 동료 또는 지인 1~2명 앞에서 진행. 비공식 피드백 수렴</li>
                <li><strong>시간 체크</strong> — 각 섹션별 소요 시간을 기록하고, 10~15분 안에 마무리되도록 조정</li>
                <li><strong>개선 기록</strong> — 리허설에서 발견한 문제점과 개선 내용을 메모</li>
                <li><strong>녹화 추천</strong> — 가능하면 리허설을 영상으로 녹화하여 스스로 점검하세요</li>
              </ul>
              <p><strong>결과물:</strong> 리허설 기록지 (소요 시간, 피드백, 개선 내용)</p>
            </div>

            <div className="exercise-box">
              <h3>실습 과제 2: 피드백 요약 보고서 작성</h3>
              <p>발표 후 수렴한 모든 피드백을 정리하여 요약 보고서를 작성하세요:</p>
              <ol>
                <li><strong>피드백 수집</strong> — 동료 피드백 + 멘토 피드백 + 자기 평가를 모두 기록</li>
                <li><strong>패턴 분석</strong> — 반복적으로 나온 피드백을 식별하고, 우선순위를 매기세요</li>
                <li><strong>개선 계획</strong> — 상위 3개 피드백에 대한 구체적인 개선 계획을 수립하세요</li>
                <li><strong>PDCA 적용</strong> — 각 개선 항목에 PDCA 사이클을 적용한 실행 일정을 작성하세요</li>
                <li><strong>향후 반영</strong> — 15주차 기말고사 또는 실전 활용 시 반영할 핵심 사항을 정리하세요</li>
              </ol>
              <p><strong>결과물:</strong> 피드백 요약 보고서 (A4 1~2매 분량)</p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                15주차는 기말고사입니다. 1주차부터 14주차까지의 전체 커리큘럼을 아우르는
                종합 평가가 진행됩니다. 이번 주 발표에서 받은 피드백을 반영하여
                최종 결과물을 보완하고, 전체 과정의 핵심 개념을 복습하세요.
                14주간의 학습을 최고의 결과물로 완성하는 마지막 기회입니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/final-project" className="lesson-nav-btn prev">&larr; 13주차: 종합 프로젝트</Link>
              <Link to="/lessons/final-exam" className="lesson-nav-btn next">15주차: 기말고사 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek14;

import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek13 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="13주차: 종합 프로젝트" path="/lessons/final-project" />
      <section className="page-header">
        <div className="container">
          <h1>13주차: 종합 프로젝트</h1>
          <p>15주간의 학습을 총정리하고, 나만의 브랜딩 프로젝트를 완성합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 프로젝트 개요</h2>
            <p>
              15주간의 셀프 브랜딩 마케팅 과정을 마무리하는 종합 프로젝트입니다.
              지금까지 배운 자기분석, 타겟 설정, 브랜드 아이덴티티, 디지털 마케팅, SNS 전략,
              콘텐츠 마케팅, PR, 개인 브랜딩, 포트폴리오 브랜딩, 마케팅 분석까지 모든 역량을
              하나의 프로젝트에 통합하여 실행합니다. 이 프로젝트는 단순한 과제가 아니라,
              실제로 활용할 수 있는 브랜딩 결과물을 만드는 실전 프로젝트입니다.
            </p>

            <div className="callout-box">
              <h3>프로젝트 목표</h3>
              <ul>
                <li><strong>통합 역량 발휘</strong> — 15주간 배운 이론과 실습을 종합적으로 활용</li>
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
                  <tr><td><strong>발표 (14주차)</strong></td><td>프로젝트 발표 및 피드백 수렴</td><td>발표 자료, 피드백 보고서</td></tr>
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

            <h2 data-aos="fade-up">6. 평가 기준</h2>
            <p>
              종합 프로젝트는 아래 5가지 영역에서 종합적으로 평가됩니다.
              각 영역의 배점을 확인하고, 균형 있게 준비하세요.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>평가 영역</th><th>배점</th><th>세부 기준</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 전략</strong></td>
                  <td><strong>30%</strong></td>
                  <td>미션/비전의 명확성, SWOT의 깊이, 포지셔닝 차별화, 타겟 분석 정밀도</td>
                </tr>
                <tr>
                  <td><strong>비주얼 아이덴티티</strong></td>
                  <td><strong>20%</strong></td>
                  <td>로고/컬러의 전문성, 모든 채널의 시각적 일관성, 브랜드 가이드라인 완성도</td>
                </tr>
                <tr>
                  <td><strong>마케팅 플랜</strong></td>
                  <td><strong>20%</strong></td>
                  <td>채널 전략의 논리성, 콘텐츠 캘린더의 실현 가능성, 예산의 합리성, KPI 적절성</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 품질</strong></td>
                  <td><strong>15%</strong></td>
                  <td>콘텐츠의 가치와 완성도, 타겟에 대한 적합성, 다양한 유형 활용</td>
                </tr>
                <tr>
                  <td><strong>발표 (14주차)</strong></td>
                  <td><strong>15%</strong></td>
                  <td>스토리텔링, 시각 자료 품질, 전달력, 시간 준수, Q&amp;A 대응</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">7. 최종 체크리스트</h2>
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
                </tbody>
              </table>
            </div>

            <div className="exercise-box">
              <h3>프로젝트 제출 안내</h3>
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
                <strong>제출 기한:</strong> 13주차 수업 종료 시<br />
                <strong>발표:</strong> 14주차에 진행<br />
                <strong>총 분량:</strong> 전체 문서 15~25페이지 + 콘텐츠 샘플 + 발표 자료
              </p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                14주차에서는 완성한 종합 프로젝트를 발표하고 동료 및 멘토의 피드백을 수렴합니다.
                10~15분 프레젠테이션과 5분 Q&amp;A로 진행되며,
                발표 후 피드백을 반영하여 최종 결과물을 보완합니다.
                발표 자료를 꼼꼼히 준비해 주세요.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/marketing-analytics" className="lesson-nav-btn prev">&larr; 12주차: 마케팅 분석 &amp; KPI</Link>
              <Link to="/lessons/presentation" className="lesson-nav-btn next">14주차: 프로젝트 발표 &amp; 피드백 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek13;

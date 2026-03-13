import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek12 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="12주차: 마케팅 분석 & KPI" path="/lessons/marketing-analytics" />
      <section className="page-header">
        <div className="container">
          <h1>12주차: 마케팅 분석 &amp; KPI</h1>
          <p>데이터 기반 의사결정으로 브랜딩 성과를 측정하고 최적화하는 전략을 학습합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 마케팅 분석의 중요성</h2>
            <p>
              마케팅 분석(Marketing Analytics)은 데이터를 수집, 측정, 분석하여 마케팅 활동의 성과를
              평가하고 최적화하는 과정입니다. "측정할 수 없는 것은 관리할 수 없다"는 피터 드러커의
              말처럼, 성공적인 브랜딩과 마케팅은 반드시 데이터에 기반해야 합니다.
            </p>
            <p>
              직관과 경험에만 의존하는 마케팅 시대는 끝났습니다. 오늘날 디지털 환경에서는
              모든 고객 행동이 데이터로 기록되며, 이를 올바르게 분석하는 능력이
              마케터의 핵심 역량이 되었습니다.
            </p>

            <div className="callout-box">
              <h3>데이터 기반 의사결정의 5대 이점</h3>
              <ul>
                <li><strong>객관적 성과 평가</strong> — 감(感)이 아닌 수치로 마케팅 효과를 증명</li>
                <li><strong>예산 최적화</strong> — ROI가 높은 채널에 자원을 집중 배분</li>
                <li><strong>고객 이해 심화</strong> — 행동 패턴, 선호도, 구매 여정을 정밀 파악</li>
                <li><strong>예측 가능성</strong> — 과거 데이터를 통해 미래 트렌드를 예측</li>
                <li><strong>실시간 최적화</strong> — 캠페인 진행 중 즉각적인 수정과 개선이 가능</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>마케팅 분석의 3단계 성숙도 모델</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>분석 유형</th><th>질문</th><th>도구 예시</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1단계: 서술적 분석</strong></td><td>Descriptive</td><td>"무엇이 일어났는가?"</td><td>GA4, 대시보드, 리포트</td></tr>
                  <tr><td><strong>2단계: 진단적 분석</strong></td><td>Diagnostic</td><td>"왜 일어났는가?"</td><td>상관 분석, 세그먼트 분석</td></tr>
                  <tr><td><strong>3단계: 예측적 분석</strong></td><td>Predictive</td><td>"앞으로 어떻게 될 것인가?"</td><td>머신러닝, 회귀 분석</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">2. Google Analytics 4 (GA4) 활용법</h2>
            <p>
              GA4는 구글이 제공하는 차세대 웹/앱 분석 도구로, 이벤트 기반 데이터 모델을 채택하여
              사용자 행동을 더욱 정밀하게 추적합니다. 기존 유니버설 애널리틱스(UA)와 달리
              웹과 앱을 통합 분석할 수 있으며, AI 기반 인사이트를 제공합니다.
            </p>

            <h3>GA4 초기 설정 가이드</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>GA4 설정 5단계</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>작업</th><th>상세 설명</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 계정 생성</strong></td>
                    <td>GA4 속성 만들기</td>
                    <td>analytics.google.com에서 새 속성 생성, 데이터 스트림(웹/앱) 추가</td>
                  </tr>
                  <tr>
                    <td><strong>2. 추적 코드 설치</strong></td>
                    <td>gtag.js 또는 GTM 설정</td>
                    <td>웹사이트 &lt;head&gt;에 추적 코드 삽입 또는 Google Tag Manager 연동</td>
                  </tr>
                  <tr>
                    <td><strong>3. 이벤트 설정</strong></td>
                    <td>핵심 이벤트 정의</td>
                    <td>자동 수집 이벤트 확인 후 맞춤 이벤트(회원가입, 구매 등) 추가 설정</td>
                  </tr>
                  <tr>
                    <td><strong>4. 전환 설정</strong></td>
                    <td>핵심 전환 이벤트 지정</td>
                    <td>비즈니스 목표에 맞는 이벤트를 전환(Key Event)으로 마킹</td>
                  </tr>
                  <tr>
                    <td><strong>5. 보고서 커스터마이징</strong></td>
                    <td>대시보드 구성</td>
                    <td>탐색 분석 보고서, 맞춤 세그먼트, 비교 기능 설정</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>GA4 핵심 지표 이해</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>지표</th><th>정의</th><th>활용 방법</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>사용자 (Users)</strong></td><td>사이트를 방문한 고유 사용자 수</td><td>전체 도달 범위 파악, 신규 vs 재방문 비교</td></tr>
                <tr><td><strong>세션 (Sessions)</strong></td><td>사용자의 방문 단위 (30분 비활동 시 종료)</td><td>방문 빈도와 참여도 측정</td></tr>
                <tr><td><strong>참여율 (Engagement Rate)</strong></td><td>10초 이상 체류하거나 전환/페이지뷰 2+ 세션 비율</td><td>콘텐츠 품질 및 사용자 관심도 평가</td></tr>
                <tr><td><strong>이탈률 (Bounce Rate)</strong></td><td>참여하지 않은 세션의 비율 (= 1 - 참여율)</td><td>랜딩 페이지 최적화 필요성 판단</td></tr>
                <tr><td><strong>평균 참여 시간</strong></td><td>사용자가 사이트에 실제로 집중한 시간</td><td>콘텐츠 깊이 및 가치 평가</td></tr>
                <tr><td><strong>전환율 (Conversion Rate)</strong></td><td>전환 이벤트를 완료한 세션 비율</td><td>마케팅 캠페인 최종 성과 평가</td></tr>
              </tbody>
            </table>

            <h3>GA4 주요 보고서</h3>
            <div className="callout-box">
              <h4>자주 사용하는 GA4 보고서 유형</h4>
              <ul>
                <li><strong>실시간 보고서</strong> — 현재 사이트에 접속 중인 사용자 수, 유입 경로, 조회 페이지 실시간 모니터링</li>
                <li><strong>획득 보고서</strong> — 사용자가 어디서 왔는지 (검색, 소셜, 직접, 추천 등) 채널별 유입 분석</li>
                <li><strong>참여 보고서</strong> — 어떤 페이지/이벤트에 사용자가 가장 많이 참여하는지 분석</li>
                <li><strong>수익 창출 보고서</strong> — 전자상거래 매출, 구매 행동, 상품 성과 분석</li>
                <li><strong>유지 보고서</strong> — 신규 vs 재방문 사용자 비율, 코호트 분석, 생애 가치(LTV)</li>
                <li><strong>탐색 보고서</strong> — 자유 형식, 퍼널 분석, 경로 분석 등 맞춤 심층 분석</li>
              </ul>
            </div>

            <div className="info-box warning">
              <h3>GA4 사용 시 주의사항</h3>
              <ul>
                <li><strong>데이터 샘플링</strong>: 대규모 데이터셋에서는 샘플링이 적용될 수 있으므로 탐색 보고서의 데이터 품질 확인이 필요합니다.</li>
                <li><strong>개인정보 보호</strong>: GDPR, 개인정보보호법 준수를 위해 쿠키 동의 배너를 반드시 구현하세요.</li>
                <li><strong>데이터 보존 기간</strong>: GA4 무료 버전은 이벤트 데이터를 최대 14개월만 보존합니다. BigQuery 연동을 통해 장기 보관하세요.</li>
                <li><strong>내부 트래픽 필터링</strong>: 자사 직원의 접속을 제외하는 IP 필터 설정을 잊지 마세요.</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">3. 소셜 미디어 분석</h2>
            <p>
              각 소셜 미디어 플랫폼은 자체 분석 도구를 제공합니다. 플랫폼별 특성을 이해하고
              적절한 지표를 추적하는 것이 소셜 미디어 마케팅 최적화의 핵심입니다.
            </p>

            <h3>플랫폼별 분석 도구 &amp; 핵심 지표</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>분석 도구</th><th>핵심 지표</th><th>인사이트 활용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인스타그램</strong></td>
                  <td>Instagram Insights (비즈니스/크리에이터 계정)</td>
                  <td>도달률, 참여율, 저장 수, 스토리 조회율, 릴스 재생수</td>
                  <td>최적 게시 시간, 고성과 콘텐츠 유형 파악</td>
                </tr>
                <tr>
                  <td><strong>유튜브</strong></td>
                  <td>YouTube Studio Analytics</td>
                  <td>조회수, 시청 시간, 구독자 증가, CTR(썸네일), 시청 유지율</td>
                  <td>이탈 구간 분석, 추천 알고리즘 최적화</td>
                </tr>
                <tr>
                  <td><strong>블로그</strong></td>
                  <td>네이버 애널리틱스 / Google Search Console</td>
                  <td>방문자 수, 검색 유입 키워드, 평균 체류 시간, 이탈률</td>
                  <td>SEO 키워드 전략, 콘텐츠 개선 방향</td>
                </tr>
                <tr>
                  <td><strong>링크드인</strong></td>
                  <td>LinkedIn Analytics</td>
                  <td>게시물 노출, 참여율, 프로필 조회, 팔로워 인구통계</td>
                  <td>B2B 타겟 오디언스 분석, 네트워킹 효과</td>
                </tr>
                <tr>
                  <td><strong>틱톡</strong></td>
                  <td>TikTok Analytics (Pro 계정)</td>
                  <td>영상 조회수, 좋아요 비율, 공유수, 팔로워 활동 시간</td>
                  <td>바이럴 요인 분석, 트렌드 대응 전략</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">4. 핵심 KPI 설정</h2>
            <p>
              KPI(Key Performance Indicator, 핵심 성과 지표)는 비즈니스 목표 달성 여부를 측정하는
              정량적 지표입니다. 효과적인 KPI는 SMART 원칙에 따라 설정해야 합니다.
            </p>

            <h3>SMART 목표 설정법</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>원칙</th><th>의미</th><th>나쁜 예</th><th>좋은 예</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>S (Specific)</strong></td>
                  <td>구체적</td>
                  <td>"팔로워를 늘리겠다"</td>
                  <td>"인스타그램 팔로워를 늘리겠다"</td>
                </tr>
                <tr>
                  <td><strong>M (Measurable)</strong></td>
                  <td>측정 가능</td>
                  <td>"많이 늘리겠다"</td>
                  <td>"1,000명 늘리겠다"</td>
                </tr>
                <tr>
                  <td><strong>A (Achievable)</strong></td>
                  <td>달성 가능</td>
                  <td>"100만 명 늘리겠다"</td>
                  <td>"현재 500명에서 1,500명으로"</td>
                </tr>
                <tr>
                  <td><strong>R (Relevant)</strong></td>
                  <td>관련성 있는</td>
                  <td>"틱톡 팔로워 (B2B 비즈니스)"</td>
                  <td>"링크드인 연결 (B2B 비즈니스)"</td>
                </tr>
                <tr>
                  <td><strong>T (Time-bound)</strong></td>
                  <td>기한 설정</td>
                  <td>"언젠가 달성"</td>
                  <td>"3개월 이내 달성"</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">5. ROI 계산</h2>
            <p>
              ROI(Return on Investment, 투자 수익률)는 마케팅 투자 대비 얼마나 많은 수익을
              창출했는지를 나타내는 핵심 지표입니다.
            </p>

            <div className="callout-box">
              <h3>마케팅 ROI 계산 공식</h3>
              <p><strong>ROI (%) = [(마케팅으로 인한 수익 - 마케팅 비용) / 마케팅 비용] x 100</strong></p>
              <br />
              <h4>실제 계산 예시</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>항목</th><th>캠페인 A</th><th>캠페인 B</th><th>캠페인 C</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>마케팅 비용</strong></td><td>500만 원</td><td>200만 원</td><td>1,000만 원</td></tr>
                  <tr><td><strong>발생 매출</strong></td><td>2,000만 원</td><td>600만 원</td><td>1,500만 원</td></tr>
                  <tr><td><strong>순수익 (매출-비용)</strong></td><td>1,500만 원</td><td>400만 원</td><td>500만 원</td></tr>
                  <tr><td><strong>ROI</strong></td><td>300%</td><td>200%</td><td>50%</td></tr>
                  <tr><td><strong>판정</strong></td><td>최고 효율</td><td>좋음</td><td>재검토 필요</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">6. A/B 테스트 기초</h2>
            <p>
              A/B 테스트(Split Test)는 두 가지 이상의 변형을 만들어 어떤 것이 더 나은 성과를 내는지
              과학적으로 비교하는 실험 방법입니다.
            </p>

            <h3>A/B 테스트 프로세스</h3>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>활동</th><th>세부 내용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 가설 수립</strong></td>
                    <td>테스트할 가설 정의</td>
                    <td>"CTA 버튼 색상을 파란색에서 빨간색으로 변경하면 클릭률이 15% 증가할 것이다"</td>
                  </tr>
                  <tr>
                    <td><strong>2. 변수 결정</strong></td>
                    <td>독립 변수 1개만 변경</td>
                    <td>한 번에 하나의 요소만 변경해야 정확한 인과관계 파악 가능</td>
                  </tr>
                  <tr>
                    <td><strong>3. 표본 크기 계산</strong></td>
                    <td>통계적 유의성 확보</td>
                    <td>최소 1,000~5,000명의 트래픽이 필요 (95% 신뢰도 기준)</td>
                  </tr>
                  <tr>
                    <td><strong>4. 테스트 실행</strong></td>
                    <td>무작위 배분 및 실행</td>
                    <td>A그룹(원본)과 B그룹(변형)에 트래픽을 50:50으로 무작위 배분</td>
                  </tr>
                  <tr>
                    <td><strong>5. 결과 분석</strong></td>
                    <td>통계적 유의성 확인</td>
                    <td>p-value &lt; 0.05이면 결과가 유의미</td>
                  </tr>
                  <tr>
                    <td><strong>6. 적용 &amp; 반복</strong></td>
                    <td>승자 적용 후 새로운 테스트</td>
                    <td>지속적 최적화 사이클 유지</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">7. 대시보드 구축</h2>
            <p>
              마케팅 대시보드는 흩어진 데이터를 한눈에 볼 수 있도록 시각화한 실시간 보고서입니다.
            </p>

            <h3>대시보드 시각화 도구 비교</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>도구</th><th>특징</th><th>가격</th><th>추천 대상</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Looker Studio</strong></td>
                  <td>Google 제품 연동 최적, 실시간 업데이트</td>
                  <td>무료</td>
                  <td>개인, 스타트업</td>
                </tr>
                <tr>
                  <td><strong>Tableau</strong></td>
                  <td>강력한 시각화, 대규모 데이터 처리</td>
                  <td>유료 (월 $70~)</td>
                  <td>중대형 기업</td>
                </tr>
                <tr>
                  <td><strong>Power BI</strong></td>
                  <td>Microsoft 생태계 연동, AI 인사이트</td>
                  <td>무료/유료</td>
                  <td>MS Office 사용 기업</td>
                </tr>
                <tr>
                  <td><strong>Databox</strong></td>
                  <td>70+ 데이터 소스 연동, 모바일 최적화</td>
                  <td>무료/유료</td>
                  <td>마케팅 에이전시</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">8. 실습: 나의 마케팅 KPI 대시보드 설계</h2>

            <div className="exercise-box">
              <h3>실습 과제 1: 나의 KPI 설정</h3>
              <p>자신의 브랜드(개인 또는 가상 기업)에 맞는 KPI 체계를 설계하세요:</p>
              <ul>
                <li><strong>비전/미션</strong>: 브랜드의 최종 목표를 한 문장으로 정의</li>
                <li><strong>전략 목표 3개</strong>: 비전 달성을 위한 핵심 전략</li>
                <li><strong>KPI 설정 (SMART 원칙)</strong>: 각 전략 목표당 2개의 KPI 설정</li>
                <li><strong>측정 도구</strong>: 각 KPI를 어떤 도구로 측정할지 명시</li>
                <li><strong>리포팅 주기</strong>: 주간/월간/분기별 보고 주기 결정</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습 과제 2: 대시보드 와이어프레임 설계</h3>
              <p>위에서 설정한 KPI를 시각화할 대시보드의 와이어프레임을 설계하세요:</p>
              <ul>
                <li><strong>대시보드 목적</strong>: 이 대시보드로 어떤 의사결정을 내릴 것인지 정의</li>
                <li><strong>핵심 위젯 배치</strong>: 스코어카드, 시계열 차트, 비교 차트 등</li>
                <li><strong>필터 설계</strong>: 날짜 범위, 채널, 캠페인 등 필터 항목 결정</li>
                <li><strong>데이터 소스 맵핑</strong>: 각 위젯이 어떤 데이터 소스에서 데이터를 가져올지 명시</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                13주차에서는 15주간 배운 모든 내용을 종합하는 최종 프로젝트를 진행합니다.
                개인 브랜딩 또는 기업 브랜딩 프로젝트를 완성하고 14주차에 발표합니다.
                이번 주에 설계한 KPI 대시보드가 최종 프로젝트의 성과 측정에 활용되므로
                꼼꼼하게 준비해 주세요.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/portfolio-branding" className="lesson-nav-btn prev">&larr; 11주차: 포트폴리오 브랜딩</Link>
              <Link to="/lessons/final-project" className="lesson-nav-btn next">13주차: 종합 프로젝트 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek12;

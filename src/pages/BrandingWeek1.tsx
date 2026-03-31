import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek1 = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="1주차: 셀프 브랜딩 개론" path="/lessons/intro" />
      <section className="page-header">
        <div className="container">
          <h1>1주차: 셀프 브랜딩 개론</h1>
          <p>브랜딩의 정의부터 성공 사례까지, 셀프 브랜딩의 세계로 첫 발을 내딛습니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 브랜딩이란 무엇인가</h2>
            <p>
              브랜드(Brand)라는 단어는 고대 노르웨이어 "brandr"(불로 지지다)에서 유래했습니다.
              원래 가축에 소유자를 표시하기 위해 낙인을 찍는 행위에서 시작된 이 개념은,
              오늘날 제품, 서비스, 그리고 개인의 정체성과 가치를 대표하는 포괄적 개념으로 발전했습니다.
            </p>

            <div className="callout-box">
              <h3>브랜드의 정의</h3>
              <p>
                <strong>미국마케팅협회(AMA)</strong>에 따르면, 브랜드란 "판매자의 제품이나 서비스를 식별하고,
                경쟁자의 것과 차별화하기 위한 이름, 용어, 디자인, 상징 또는 기타 특징"입니다.
              </p>
              <p>
                그러나 현대의 브랜딩은 이보다 훨씬 넓은 의미를 가집니다. 브랜드는 <strong>고객이 제품이나 사람에 대해
                가지는 총체적인 인식과 감정</strong>을 의미합니다.
              </p>
            </div>

            <h3>브랜딩의 역사와 변천</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>시대</th><th>브랜딩 특징</th><th>핵심 요소</th></tr>
              </thead>
              <tbody>
                <tr><td>산업혁명 이전</td><td>장인의 표식, 길드 마크</td><td>품질 보증, 출처 표시</td></tr>
                <tr><td>19세기 후반</td><td>상표 등록, 패키징 디자인</td><td>제품 식별, 대량 생산</td></tr>
                <tr><td>20세기 중반</td><td>TV 광고, 감성 마케팅</td><td>이미지 구축, 라이프스타일</td></tr>
                <tr><td>2000년대</td><td>인터넷, 소셜미디어 등장</td><td>양방향 소통, 커뮤니티</td></tr>
                <tr><td>2020년대</td><td>퍼스널 브랜딩, 크리에이터 이코노미</td><td>개인 브랜드, 진정성, AI</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">2. 퍼스널 브랜딩 vs 기업 브랜딩</h2>
            <p>
              퍼스널 브랜딩과 기업 브랜딩은 근본적인 목표는 같지만, 접근 방식과 전략에서 중요한 차이가 있습니다.
              아래 비교 테이블을 통해 두 가지를 명확하게 구분해봅시다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>퍼스널 브랜딩</th><th>기업 브랜딩</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>브랜드 주체</strong></td><td>개인 (나 자신)</td><td>기업/조직</td></tr>
                <tr><td><strong>핵심 자산</strong></td><td>전문성, 성격, 스토리</td><td>제품, 서비스, 기술력</td></tr>
                <tr><td><strong>주요 목표</strong></td><td>인지도, 영향력, 신뢰</td><td>시장점유율, 매출, 브랜드 가치</td></tr>
                <tr><td><strong>주요 채널</strong></td><td>SNS, 블로그, YouTube, LinkedIn</td><td>광고, PR, 웹사이트, 오프라인</td></tr>
                <tr><td><strong>톤 & 보이스</strong></td><td>개인적, 진정성 있는 소통</td><td>기업 정체성에 맞는 공식적 톤</td></tr>
                <tr><td><strong>투자 규모</strong></td><td>시간 투자 중심, 저비용</td><td>대규모 예산, 전문 인력</td></tr>
                <tr><td><strong>유연성</strong></td><td>빠른 변화와 피봇 가능</td><td>변화에 시간과 비용 필요</td></tr>
                <tr><td><strong>신뢰 구축</strong></td><td>인간적 교류, 공감</td><td>품질 일관성, 사회적 책임</td></tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>핵심 포인트</h3>
              <p>
                퍼스널 브랜딩과 기업 브랜딩은 대립하는 개념이 아닙니다. 오히려 강력한 퍼스널 브랜드를 가진 CEO나 직원이
                기업 브랜드를 더욱 강화시키는 시너지 효과를 만들 수 있습니다. 일론 머스크와 테슬라, 스티브 잡스와 애플이
                대표적인 사례입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">3. 셀프 브랜딩의 필요성</h2>
            <p>디지털 시대에 셀프 브랜딩이 필요한 이유는 다양합니다. 각 분야별로 살펴보겠습니다.</p>

            <h3>취업시장에서의 셀프 브랜딩</h3>
            <ul>
              <li><strong>차별화된 지원자</strong>: 비슷한 스펙을 가진 수많은 지원자 중에서 나만의 브랜드로 눈에 띄기</li>
              <li><strong>LinkedIn 프로필</strong>: 70% 이상의 채용담당자가 후보자의 온라인 프레즌스를 확인</li>
              <li><strong>포트폴리오 브랜딩</strong>: 이력서를 넘어서는 전문성 증명</li>
              <li><strong>네트워킹 효과</strong>: 강력한 브랜드가 기회를 끌어당김</li>
            </ul>

            <h3>프리랜서에서의 셀프 브랜딩</h3>
            <ul>
              <li><strong>전문가 포지셔닝</strong>: 특정 분야의 전문가로 인식되어 프리미엄 요율 책정 가능</li>
              <li><strong>지속적인 의뢰</strong>: 브랜드 인지도가 높을수록 의뢰가 찾아옴</li>
              <li><strong>신뢰 기반 비즈니스</strong>: 포트폴리오와 후기가 강력한 마케팅 도구</li>
            </ul>

            <h3>인플루언서에서의 셀프 브랜딩</h3>
            <ul>
              <li><strong>팔로워 충성도</strong>: 일관된 브랜드 이미지가 팬덤 형성</li>
              <li><strong>수익화</strong>: 명확한 브랜드가 광고주와 스폰서십 유치</li>
              <li><strong>멀티 플랫폼 확장</strong>: 브랜드 아이덴티티를 기반으로 다양한 채널 운영</li>
            </ul>

            <h2 data-aos="fade-up">4. 성공적인 브랜딩 사례 분석</h2>

            <h3>개인 브랜딩 사례</h3>
            <div className="callout-box">
              <h4>유튜버 사례 — 백종원</h4>
              <p>
                요리 전문가에서 외식 경영인, 그리고 유튜브 크리에이터까지. 백종원은 "서민 음식의 달인"이라는
                명확한 포지셔닝으로 대중에게 친근하면서도 전문적인 이미지를 구축했습니다.
                TV 프로그램, 유튜브, 프랜차이즈 사업 모두에서 일관된 브랜드 메시지를 전달합니다.
              </p>
              <ul>
                <li><strong>핵심 전략</strong>: 쉬운 레시피 + 친근한 소통 + 일관된 캐릭터</li>
                <li><strong>채널</strong>: TV, YouTube(600만+ 구독자), 프랜차이즈</li>
              </ul>
            </div>

            <div className="callout-box">
              <h4>블로거 사례 — 디지털 노마드</h4>
              <p>
                여행과 원격근무를 결합한 라이프스타일 블로거들은 "자유로운 일과 삶의 균형"이라는
                브랜드 메시지로 수백만 팔로워를 확보했습니다. 블로그, Instagram, YouTube를 통해
                일관된 비주얼과 스토리를 전달합니다.
              </p>
            </div>

            <h3>기업 브랜딩 사례</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>기업</th><th>브랜드 가치</th><th>핵심 전략</th><th>슬로건</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>나이키 (Nike)</strong></td>
                  <td>도전, 열정, 승리</td>
                  <td>감성 마케팅 + 스포츠 스타 협업 + 스토리텔링</td>
                  <td>"Just Do It"</td>
                </tr>
                <tr>
                  <td><strong>애플 (Apple)</strong></td>
                  <td>혁신, 심플함, 프리미엄</td>
                  <td>미니멀 디자인 + 생태계 구축 + 감성적 경험</td>
                  <td>"Think Different"</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>사례에서 배우는 공통점</h3>
              <ul>
                <li><strong>명확한 포지셔닝</strong>: 무엇을 대표하는지 분명하게 정의</li>
                <li><strong>일관성</strong>: 모든 채널에서 동일한 메시지와 비주얼</li>
                <li><strong>진정성</strong>: 가식이 아닌 진짜 이야기를 전달</li>
                <li><strong>감정적 연결</strong>: 기능이 아닌 감성으로 소통</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. 브랜딩 프로세스 개요</h2>
            <p>성공적인 브랜딩은 체계적인 프로세스를 따릅니다. 다음 5단계를 반복적으로 수행하여 브랜드를 지속적으로 발전시킵니다.</p>

            <div className="callout-box">
              <h3>브랜딩 5단계 프로세스</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>이름</th><th>핵심 활동</th><th>산출물</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1단계</strong></td>
                    <td>분석 (Analysis)</td>
                    <td>자기분석, 시장조사, 경쟁분석, 타겟 설정</td>
                    <td>SWOT 분석서, 페르소나</td>
                  </tr>
                  <tr>
                    <td><strong>2단계</strong></td>
                    <td>전략 (Strategy)</td>
                    <td>포지셔닝, 차별화, 미션/비전 수립</td>
                    <td>브랜드 전략 문서</td>
                  </tr>
                  <tr>
                    <td><strong>3단계</strong></td>
                    <td>디자인 (Design)</td>
                    <td>로고, 컬러, 폰트, 슬로건, 톤앤매너</td>
                    <td>브랜드 가이드라인</td>
                  </tr>
                  <tr>
                    <td><strong>4단계</strong></td>
                    <td>실행 (Execution)</td>
                    <td>콘텐츠 제작, 채널 운영, 마케팅 캠페인</td>
                    <td>콘텐츠, SNS 운영</td>
                  </tr>
                  <tr>
                    <td><strong>5단계</strong></td>
                    <td>측정 (Measurement)</td>
                    <td>KPI 분석, 피드백 수집, 개선</td>
                    <td>성과 보고서, 개선안</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>주의사항</h3>
              <p>
                브랜딩은 일회성 프로젝트가 아닙니다. 5단계는 순환적으로 반복되어야 하며,
                특히 측정 단계의 결과를 기반으로 분석 단계로 돌아가 지속적인 개선이 이루어져야 합니다.
                브랜드는 살아있는 유기체처럼 계속 성장하고 변화합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 실습 과제: 나의 현재 브랜드 진단 체크리스트</h2>
            <p>아래 체크리스트를 통해 현재 자신의 브랜드 상태를 진단해보세요. 각 항목에 대해 1점(매우 부족)~5점(매우 우수)으로 평가합니다.</p>

            <div className="exercise-box">
              <h3>브랜드 진단 체크리스트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>진단 항목</th><th>점수(1~5)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>정체성</strong></td><td>나를 한 문장으로 설명할 수 있다</td><td></td></tr>
                  <tr><td><strong>전문성</strong></td><td>특정 분야에서 전문가로 인정받고 있다</td><td></td></tr>
                  <tr><td><strong>온라인 존재</strong></td><td>내 이름을 검색하면 긍정적인 결과가 나온다</td><td></td></tr>
                  <tr><td><strong>SNS 활동</strong></td><td>정기적으로 가치 있는 콘텐츠를 공유한다</td><td></td></tr>
                  <tr><td><strong>네트워크</strong></td><td>업계 내 의미 있는 네트워크를 보유하고 있다</td><td></td></tr>
                  <tr><td><strong>포트폴리오</strong></td><td>내 역량을 보여주는 포트폴리오가 있다</td><td></td></tr>
                  <tr><td><strong>일관성</strong></td><td>모든 채널에서 일관된 이미지를 유지한다</td><td></td></tr>
                  <tr><td><strong>차별화</strong></td><td>경쟁자와 구별되는 고유한 가치가 있다</td><td></td></tr>
                  <tr><td><strong>스토리</strong></td><td>나만의 설득력 있는 이야기가 있다</td><td></td></tr>
                  <tr><td><strong>목표</strong></td><td>브랜딩을 통해 달성하려는 명확한 목표가 있다</td><td></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                <strong>결과 해석:</strong> 40점 이상이면 훌륭한 브랜드 기반을 갖추고 있습니다.
                25~39점이면 개선의 여지가 있으며, 24점 이하라면 이 수업을 통해 체계적으로 브랜드를 구축해야 합니다.
              </p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                2주차에서는 자기분석과 핵심가치를 발견하는 방법을 배웁니다. SWOT 분석, 조하리의 창 등
                실용적인 프레임워크를 활용하여 나만의 브랜드 미션과 비전을 수립합니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons" className="lesson-nav-btn prev">&larr; 커리큘럼 목록</Link>
              <Link to="/lessons/self-analysis" className="lesson-nav-btn next">2주차: 자기분석 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek1;

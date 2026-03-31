import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek4 = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="4주차: 브랜드 아이덴티티" path="/lessons/brand-identity" />
      <section className="page-header">
        <div className="container">
          <h1>4주차: 브랜드 아이덴티티</h1>
          <p>이름, 로고, 컬러, 폰트, 슬로건 -- 나의 브랜드를 시각적으로 완성하기</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 브랜드 아이덴티티란</h2>
            <p>
              브랜드 아이덴티티(Brand Identity)는 나의 브랜드가 외부에 보여지는 모든 시각적, 언어적 요소의 총합입니다.
              로고, 컬러, 타이포그래피, 슬로건, 이미지 스타일, 보이스 톤까지 포함하는 포괄적 개념으로,
              일관된 아이덴티티는 전문성과 신뢰감을 높이고 타겟 오디언스의 기억에 남는 브랜드를 만듭니다.
            </p>

            <div className="callout-box">
              <h3>브랜드 아이덴티티 vs 브랜드 이미지</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>브랜드 아이덴티티</th><th>브랜드 이미지</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>정의</strong></td><td>브랜드가 의도적으로 만드는 모습</td><td>소비자가 실제로 인식하는 모습</td></tr>
                  <tr><td><strong>주체</strong></td><td>브랜드 소유자 (나)</td><td>고객 / 오디언스</td></tr>
                  <tr><td><strong>통제</strong></td><td>직접 통제 가능</td><td>간접적으로만 영향</td></tr>
                  <tr><td><strong>목표</strong></td><td>아이덴티티와 이미지가 일치하도록 만드는 것</td><td>긍정적 이미지 형성</td></tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>브랜드 아이덴티티의 6가지 핵심 요소</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>중요도</th><th>우선 작업</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>브랜드명</strong></td><td>브랜드를 대표하는 명칭</td><td>최상</td><td>1순위</td></tr>
                  <tr><td><strong>로고</strong></td><td>시각적 상징물</td><td>최상</td><td>1순위</td></tr>
                  <tr><td><strong>컬러 시스템</strong></td><td>브랜드 대표 색상 체계</td><td>상</td><td>2순위</td></tr>
                  <tr><td><strong>타이포그래피</strong></td><td>텍스트에 사용되는 서체</td><td>중</td><td>2순위</td></tr>
                  <tr><td><strong>슬로건 / 태그라인</strong></td><td>브랜드 가치를 압축한 한 문장</td><td>상</td><td>3순위</td></tr>
                  <tr><td><strong>이미지 스타일</strong></td><td>사진, 일러스트 톤앤매너</td><td>중</td><td>3순위</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">2. 브랜드명 개발 방법</h2>
            <p>
              브랜드 이름은 가장 먼저, 그리고 가장 많이 접하는 브랜드 요소입니다.
              좋은 이름은 기억하기 쉽고, 의미가 있으며, 확장 가능해야 합니다.
              브랜드명은 한 번 정하면 변경이 매우 어렵기 때문에 신중하게 결정해야 합니다.
            </p>

            <h3>좋은 브랜드명의 5가지 조건</h3>
            <div className="callout-box">
              <ol>
                <li><strong>기억 용이성 (Memorability)</strong>: 짧고 발음하기 편해야 합니다. 2~4음절이 이상적이며, 한 번 들으면 떠올릴 수 있어야 합니다.</li>
                <li><strong>의미 전달 (Meaningfulness)</strong>: 브랜드의 핵심 가치나 특성을 암시합니다. 직접적 설명보다 은유적 표현이 더 효과적일 수 있습니다.</li>
                <li><strong>독특함 (Distinctiveness)</strong>: 경쟁자와 혼동되지 않는 고유한 이름이어야 합니다. 상표 검색을 통해 유사 브랜드가 없는지 반드시 확인하세요.</li>
                <li><strong>확장성 (Scalability)</strong>: 다양한 영역으로 확장해도 어색하지 않아야 합니다. 너무 구체적인 이름은 확장을 제한할 수 있습니다.</li>
                <li><strong>디지털 가용성 (Digital Availability)</strong>: 도메인(.com, .kr)과 주요 SNS 핸들을 확보할 수 있는지 확인해야 합니다.</li>
              </ol>
            </div>

            <h3>네이밍 전략 6가지</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>전략</th><th>설명</th><th>장점</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>두문자어 (Acronym)</strong></td>
                  <td>여러 단어의 첫 글자를 조합</td>
                  <td>짧고 전문적 느낌</td>
                  <td>IBM, BMW, KFC</td>
                </tr>
                <tr>
                  <td><strong>합성어 (Compound)</strong></td>
                  <td>두 개 이상의 단어를 결합</td>
                  <td>의미 전달이 직관적</td>
                  <td>Facebook, YouTube, 배달의민족</td>
                </tr>
                <tr>
                  <td><strong>의미 차용 (Metaphor)</strong></td>
                  <td>기존 단어에 새로운 의미를 부여</td>
                  <td>풍부한 연상 작용</td>
                  <td>Apple (혁신), Amazon (거대함)</td>
                </tr>
                <tr>
                  <td><strong>신조어 (Coined Word)</strong></td>
                  <td>완전히 새로운 단어를 만듦</td>
                  <td>독창적, 상표 등록 용이</td>
                  <td>Google, Kakao, Spotify</td>
                </tr>
                <tr>
                  <td><strong>인명/지명 (Eponymous)</strong></td>
                  <td>창업자 이름이나 지역명 활용</td>
                  <td>개인 브랜딩에 적합</td>
                  <td>삼성, 현대, Tesla</td>
                </tr>
                <tr>
                  <td><strong>서술형 (Descriptive)</strong></td>
                  <td>업종이나 기능을 직접 설명</td>
                  <td>이해하기 쉬움</td>
                  <td>General Electric, 한국은행</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>네이밍 체크리스트</h3>
              <p>이름 후보를 정했다면 아래 항목을 하나씩 점검하세요.</p>
              <ul>
                <li>소리 내어 읽었을 때 자연스러운가?</li>
                <li>전화로 철자를 설명할 수 있을 만큼 직관적인가?</li>
                <li>다른 언어에서 부정적 의미가 없는가?</li>
                <li>도메인(.com, .kr, .co.kr)을 확보할 수 있는가?</li>
                <li>Instagram, YouTube, LinkedIn에서 동일한 핸들을 사용할 수 있는가?</li>
                <li>10년 후에도 유효한 이름인가?</li>
                <li>키프리스(KIPRIS)에서 유사 상표가 등록되어 있지 않은가?</li>
              </ul>
            </div>

            <div className="info-box warning">
              <h3>네이밍 실수 주의</h3>
              <ul>
                <li><strong>너무 일반적인 이름</strong>: "마케팅 스쿨"처럼 검색에서 차별화가 안 됩니다</li>
                <li><strong>트렌드에 의존</strong>: 유행어를 넣으면 금방 구식이 됩니다</li>
                <li><strong>발음이 어려운 이름</strong>: 입소문 마케팅에 치명적입니다</li>
                <li><strong>상표 미확인</strong>: 같은 업종에 동일 상표가 있으면 법적 분쟁이 발생할 수 있습니다</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">3. 로고 디자인 원칙</h2>
            <p>
              로고는 브랜드의 얼굴입니다. 소비자가 브랜드를 시각적으로 인식하는 가장 첫 번째 요소이며,
              모든 마케팅 자료, 웹사이트, SNS 프로필에 사용됩니다.
              효과적인 로고는 단순하면서도 기억에 남고, 다양한 크기와 매체에서 잘 작동해야 합니다.
            </p>

            <h3>로고의 4가지 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>설명</th><th>장점</th><th>적합한 경우</th><th>대표 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>워드마크 (Wordmark)</strong></td>
                  <td>브랜드명을 독특한 서체로 표현</td>
                  <td>이름 인지도 높음, 제작 용이</td>
                  <td>브랜드명이 짧고 독특할 때</td>
                  <td>Google, Coca-Cola, Samsung</td>
                </tr>
                <tr>
                  <td><strong>심볼마크 (Symbol)</strong></td>
                  <td>아이콘이나 그래픽으로만 표현</td>
                  <td>강렬한 시각적 임팩트</td>
                  <td>이미 인지도가 높은 브랜드</td>
                  <td>Apple, Nike, Twitter</td>
                </tr>
                <tr>
                  <td><strong>콤비네이션 (Combination)</strong></td>
                  <td>워드마크 + 심볼을 결합</td>
                  <td>유연한 활용, 명확한 전달</td>
                  <td>대부분의 개인 브랜드에 추천</td>
                  <td>Adidas, Burger King, 현대</td>
                </tr>
                <tr>
                  <td><strong>엠블럼 (Emblem)</strong></td>
                  <td>텍스트가 아이콘 안에 포함된 형태</td>
                  <td>전통적이고 권위 있는 느낌</td>
                  <td>교육기관, 전통 브랜드</td>
                  <td>Starbucks, Harvard, BMW</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>5가지 로고 디자인 원칙</h3>
              <ol>
                <li><strong>단순함 (Simple)</strong>: 복잡한 디테일을 줄이고 핵심만 남기기. 팩스로 보내도 인식 가능해야 합니다.</li>
                <li><strong>기억에 남음 (Memorable)</strong>: 한 번 보면 떠올릴 수 있는 독특한 형태를 가져야 합니다.</li>
                <li><strong>시대를 초월 (Timeless)</strong>: 유행 그래디언트나 3D 효과에 의존하지 않는 디자인이 오래갑니다.</li>
                <li><strong>다용도 (Versatile)</strong>: 명함(3cm)에서도, 빌딩 간판(3m)에서도, 흑백에서도 잘 작동해야 합니다.</li>
                <li><strong>적절함 (Appropriate)</strong>: 법률 사무소 로고에 만화 캐릭터는 부적합합니다. 브랜드의 성격과 타겟에 맞아야 합니다.</li>
              </ol>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>로고 제작 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>유형</th><th>가격</th><th>난이도</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Canva</strong></td><td>온라인 디자인 플랫폼</td><td>무료/프로 월 $12.99</td><td>초급</td><td>비디자이너, 빠른 제작</td></tr>
                  <tr><td><strong>Figma</strong></td><td>벡터 디자인 도구</td><td>무료/프로 월 $12</td><td>중급</td><td>세밀한 디자인 원하는 분</td></tr>
                  <tr><td><strong>Adobe Illustrator</strong></td><td>전문 벡터 편집기</td><td>월 약 $22</td><td>고급</td><td>전문 디자이너</td></tr>
                  <tr><td><strong>Looka</strong></td><td>AI 기반 로고 생성</td><td>기본 $20~</td><td>초급</td><td>빠른 시안 필요 시</td></tr>
                  <tr><td><strong>Hatchful (Shopify)</strong></td><td>AI 로고 메이커</td><td>무료</td><td>초급</td><td>초기 프로토타입</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">4. 브랜드 컬러 시스템</h2>
            <p>
              색상은 감정과 인식에 강력한 영향을 미칩니다. 연구에 따르면 소비자의 90%가 제품에 대한
              첫인상을 색상만으로 판단하며, 브랜드 인지도를 최대 80%까지 높일 수 있습니다.
              브랜드 컬러를 선택할 때 색상이 전달하는 심리적 메시지를 반드시 고려해야 합니다.
            </p>

            <h3>색채 심리학</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>색상</th><th>심리적 연상</th><th>적합한 브랜드 유형</th><th>대표 브랜드</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: '#dc2626' }}><strong>빨강 (Red)</strong></td>
                  <td>열정, 에너지, 긴급함, 흥분, 용기</td>
                  <td>식품, 엔터테인먼트, 스포츠</td>
                  <td>Coca-Cola, YouTube, Netflix</td>
                </tr>
                <tr>
                  <td style={{ color: '#2563eb' }}><strong>파랑 (Blue)</strong></td>
                  <td>신뢰, 안정, 전문성, 평화, 충성</td>
                  <td>금융, IT, 헬스케어, 기업</td>
                  <td>Samsung, Facebook, LinkedIn</td>
                </tr>
                <tr>
                  <td style={{ color: '#16a34a' }}><strong>초록 (Green)</strong></td>
                  <td>성장, 자연, 건강, 균형, 신선함</td>
                  <td>친환경, 건강식품, 교육, 금융</td>
                  <td>Starbucks, LINE, Naver</td>
                </tr>
                <tr>
                  <td style={{ color: '#eab308' }}><strong>노랑 (Yellow)</strong></td>
                  <td>낙관, 행복, 창의성, 따뜻함, 주의</td>
                  <td>식품, 어린이, 크리에이티브</td>
                  <td>Kakao, McDonald's, IKEA</td>
                </tr>
                <tr>
                  <td style={{ color: '#ea580c' }}><strong>주황 (Orange)</strong></td>
                  <td>활력, 친근함, 모험, 재미, 자신감</td>
                  <td>식품, 여행, 스포츠, 테크</td>
                  <td>배달의민족, Amazon, Fanta</td>
                </tr>
                <tr>
                  <td style={{ color: '#9333ea' }}><strong>보라 (Purple)</strong></td>
                  <td>고급, 창의, 신비, 지혜, 영성</td>
                  <td>뷰티, 럭셔리, 교육, 예술</td>
                  <td>Twitch, Cadbury, Hallmark</td>
                </tr>
                <tr>
                  <td><strong>검정 (Black)</strong></td>
                  <td>세련, 권위, 프리미엄, 힘, 모던</td>
                  <td>패션, 럭셔리, 테크, 자동차</td>
                  <td>Apple, Nike, Chanel</td>
                </tr>
                <tr>
                  <td style={{ color: '#ec4899' }}><strong>분홍 (Pink)</strong></td>
                  <td>사랑, 부드러움, 젊음, 감성, 장난기</td>
                  <td>뷰티, 패션, 라이프스타일</td>
                  <td>Barbie, Victoria's Secret, T-Mobile</td>
                </tr>
              </tbody>
            </table>

            <h3>컬러 팔레트 구성법</h3>
            <div className="callout-box">
              <h4>브랜드 컬러 팔레트의 구조</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>역할</th><th>사용 비율</th><th>사용 위치</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>주요 컬러 (Primary)</strong></td><td>브랜드를 대표하는 핵심 색상</td><td>60%</td><td>로고, 헤더, 주요 버튼, CTA</td></tr>
                  <tr><td><strong>보조 컬러 (Secondary)</strong></td><td>주요 컬러를 보완하는 색상</td><td>30%</td><td>강조 영역, 아이콘, 배지, 서브 헤더</td></tr>
                  <tr><td><strong>강조 컬러 (Accent)</strong></td><td>시선을 끄는 포인트 색상</td><td>10%</td><td>CTA 버튼, 링크, 하이라이트, 알림</td></tr>
                  <tr><td><strong>중립 컬러 (Neutral)</strong></td><td>배경, 텍스트에 사용</td><td>자유</td><td>배경, 본문 텍스트, 구분선, 카드</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>컬러 선택 시 주의사항</h3>
              <ul>
                <li><strong>문화적 차이</strong>: 흰색은 서양에서 순수함, 동양에서는 슬픔을 의미할 수 있습니다</li>
                <li><strong>접근성</strong>: 색맹/색약 사용자를 고려하여 색상만으로 정보를 구분하지 마세요</li>
                <li><strong>대비율</strong>: WCAG 기준 텍스트와 배경의 명암비 4.5:1 이상을 권장합니다</li>
                <li><strong>디지털 vs 인쇄</strong>: RGB(화면)와 CMYK(인쇄)에서 색상이 다르게 보일 수 있습니다</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>컬러 팔레트 추천 도구</h3>
              <ul>
                <li><strong>Coolors.co</strong>: 스페이스바를 누르면 조화로운 팔레트를 자동 생성</li>
                <li><strong>Adobe Color</strong>: 색상 이론(보색, 유사색 등) 기반 팔레트 생성</li>
                <li><strong>Color Hunt</strong>: 디자이너들이 큐레이션한 인기 팔레트 모음</li>
                <li><strong>Muzli Colors</strong>: 이미지에서 컬러 팔레트를 추출</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. 타이포그래피 선택</h2>
            <p>
              서체(Font)는 브랜드의 성격을 전달하는 핵심 시각 요소입니다.
              같은 문장이라도 어떤 서체로 표현하느냐에 따라 전혀 다른 인상을 줍니다.
              브랜드 타이포그래피는 가독성과 일관성을 최우선으로 고려해야 합니다.
            </p>

            <h3>서체의 종류와 성격</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>분류</th><th>특징</th><th>전달하는 느낌</th><th>적합한 브랜드</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>세리프 (Serif)</strong></td>
                  <td>글자 끝에 꾸밈 획이 있음</td>
                  <td>전통, 신뢰, 격식, 권위</td>
                  <td>법률, 금융, 언론, 교육</td>
                  <td>Times New Roman, Georgia, 바탕체</td>
                </tr>
                <tr>
                  <td><strong>산세리프 (Sans-serif)</strong></td>
                  <td>꾸밈 획이 없는 깔끔한 형태</td>
                  <td>현대적, 깔끔, 친근, 혁신</td>
                  <td>테크, 스타트업, 라이프스타일</td>
                  <td>Helvetica, Pretendard, Noto Sans</td>
                </tr>
                <tr>
                  <td><strong>스크립트 (Script)</strong></td>
                  <td>필기체 스타일</td>
                  <td>우아, 창의, 개성, 감성</td>
                  <td>뷰티, 패션, 웨딩, 카페</td>
                  <td>Pacifico, Dancing Script</td>
                </tr>
                <tr>
                  <td><strong>디스플레이 (Display)</strong></td>
                  <td>장식적이고 개성 강한 서체</td>
                  <td>대담, 재미, 독창성</td>
                  <td>엔터테인먼트, 게임, 푸드</td>
                  <td>Impact, Cooper Black</td>
                </tr>
                <tr>
                  <td><strong>모노스페이스 (Monospace)</strong></td>
                  <td>모든 글자의 너비가 동일</td>
                  <td>기술적, 정밀, 레트로</td>
                  <td>개발, 코딩, 테크 블로그</td>
                  <td>Courier, JetBrains Mono</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>타이포그래피 구성 가이드</h3>
              <p>
                브랜드에는 일반적으로 <strong>2~3가지 서체</strong>를 조합하여 사용합니다.
                너무 많은 서체를 사용하면 통일감이 떨어지고, 하나만 사용하면 단조로워 보일 수 있습니다.
              </p>
              <table className="lesson-table">
                <thead>
                  <tr><th>용도</th><th>권장 서체 유형</th><th>크기 가이드 (웹)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>제목 (Heading)</strong></td><td>개성 있는 디스플레이 또는 볼드 산세리프</td><td>24~48px</td></tr>
                  <tr><td><strong>본문 (Body)</strong></td><td>가독성 높은 산세리프 또는 세리프</td><td>16~18px</td></tr>
                  <tr><td><strong>캡션/주석 (Caption)</strong></td><td>본문과 동일 계열의 라이트 웨이트</td><td>12~14px</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>한국어 무료 웹폰트 추천</h3>
              <ul>
                <li><strong>Pretendard</strong>: 애플 SF Pro 스타일, 현대적이고 깔끔한 산세리프</li>
                <li><strong>Noto Sans KR (본고딕)</strong>: Google과 Adobe 공동 개발, 9가지 굵기 지원</li>
                <li><strong>Spoqa Han Sans Neo</strong>: 스포카에서 개발, UI에 최적화</li>
                <li><strong>Nanum Square</strong>: 네이버에서 제공, 정사각형 비율의 깔끔한 서체</li>
                <li><strong>SUIT</strong>: 한국어에 최적화된 모던 산세리프 서체</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">6. 슬로건 & 태그라인 작성법</h2>
            <p>
              슬로건(Tagline)은 브랜드의 핵심 가치와 약속을 한 문장으로 압축한 것입니다.
              짧지만 강력한 슬로건은 브랜드를 기억하게 만드는 결정적인 요소입니다.
            </p>

            <h3>슬로건 vs 태그라인</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>슬로건 (Slogan)</th><th>태그라인 (Tagline)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>지속성</strong></td><td>캠페인별로 변경 가능</td><td>장기적으로 유지</td></tr>
                <tr><td><strong>목적</strong></td><td>특정 제품/캠페인 홍보</td><td>브랜드 전체 아이덴티티 표현</td></tr>
                <tr><td><strong>예시</strong></td><td>"i'm lovin' it" (McDonald's 캠페인)</td><td>"Just Do It" (Nike 브랜드)</td></tr>
              </tbody>
            </table>

            <h3>좋은 슬로건의 7가지 공식</h3>
            <div className="callout-box">
              <table className="lesson-table">
                <thead>
                  <tr><th>공식</th><th>구조</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>명령형</strong></td><td>동사로 시작하는 행동 유도</td><td>"Just Do It" (Nike), "Think Different" (Apple)</td></tr>
                  <tr><td><strong>질문형</strong></td><td>궁금증을 유발하는 질문</td><td>"Got Milk?", "What's in your wallet?"</td></tr>
                  <tr><td><strong>약속형</strong></td><td>구체적 혜택을 약속</td><td>"Because You're Worth It" (L'Oreal)</td></tr>
                  <tr><td><strong>대비형</strong></td><td>반대 개념을 대비</td><td>"작은 차이가 명품을 만든다" (SK)</td></tr>
                  <tr><td><strong>은유형</strong></td><td>비유로 가치를 전달</td><td>"사람을 향합니다" (SK텔레콤)</td></tr>
                  <tr><td><strong>라임형</strong></td><td>운율이 있는 표현</td><td>"맛있는 라면은 오뚜기" (오뚜기)</td></tr>
                  <tr><td><strong>숫자형</strong></td><td>숫자로 구체성 부여</td><td>"15분 만에 보험료 비교" (보험다모아)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>슬로건 작성 시 피해야 할 것</h3>
              <ul>
                <li>경쟁사에도 적용될 수 있는 너무 일반적인 표현 ("최고의 서비스")</li>
                <li>과장되거나 증명할 수 없는 주장 ("세계 1위")</li>
                <li>너무 길거나 복잡한 문장 (7단어 이내가 이상적)</li>
                <li>내부인만 이해할 수 있는 전문 용어</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">7. 브랜드 가이드라인 문서 작성</h2>
            <p>
              브랜드 가이드라인은 브랜드 아이덴티티의 모든 요소를 문서화한 <strong>규칙서</strong>입니다.
              혼자 운영하는 개인 브랜드라도 가이드라인을 작성하면 시간이 지나도 일관된 브랜드를 유지할 수 있고,
              외주 디자이너나 협업 파트너에게 정확한 방향을 전달할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>브랜드 가이드라인 포함 항목</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>섹션</th><th>포함 내용</th><th>페이지 수 (권장)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. 브랜드 스토리</strong></td><td>미션, 비전, 핵심 가치, 브랜드 배경</td><td>2~3</td></tr>
                  <tr><td><strong>2. 로고 사용 규정</strong></td><td>로고 파일, 최소 크기, 여백 규정, 금지 사례</td><td>3~4</td></tr>
                  <tr><td><strong>3. 컬러 팔레트</strong></td><td>주요/보조 컬러, HEX/RGB/CMYK 코드, 사용 비율</td><td>2~3</td></tr>
                  <tr><td><strong>4. 타이포그래피</strong></td><td>제목/본문 서체, 크기 체계, 행간/자간</td><td>2~3</td></tr>
                  <tr><td><strong>5. 이미지 스타일</strong></td><td>사진 톤앤매너, 필터, 일러스트 가이드</td><td>2~3</td></tr>
                  <tr><td><strong>6. 보이스 & 톤</strong></td><td>커뮤니케이션 스타일, DO/DON'T 목록</td><td>2~3</td></tr>
                  <tr><td><strong>7. SNS 가이드</strong></td><td>플랫폼별 프로필, 콘텐츠 형식, 해시태그</td><td>2~3</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>보이스 & 톤 정의하기</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>차원</th><th>범위</th><th>나의 브랜드는?</th></tr>
                </thead>
                <tbody>
                  <tr><td>격식</td><td>격식체 &harr; 구어체</td><td></td></tr>
                  <tr><td>열정</td><td>차분함 &harr; 에너지</td><td></td></tr>
                  <tr><td>유머</td><td>진지함 &harr; 재미</td><td></td></tr>
                  <tr><td>설명</td><td>간결함 &harr; 상세함</td><td></td></tr>
                  <tr><td>권위</td><td>친근함 &harr; 전문적</td><td></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                각 차원에서 1~10 사이의 숫자로 나의 브랜드 보이스를 정의해보세요.
                이 수치는 모든 콘텐츠에서 일관되게 유지되어야 합니다.
              </p>
            </div>

            <div className="info-box tip">
              <h3>브랜드 보이스 & 톤 예시</h3>
              <p>
                <strong>보이스</strong>: "우리는 항상 전문적이면서도 친근하게 소통합니다."<br />
                <strong>톤 (평상시)</strong>: "새로운 마케팅 트렌드를 쉽게 풀어드릴게요!"<br />
                <strong>톤 (위기상황)</strong>: "문제를 인지하고 있으며, 빠르게 해결하겠습니다."<br />
                <strong>톤 (축하)</strong>: "여러분의 성장이 우리의 기쁨입니다. 축하드려요!"
              </p>
            </div>

            <h2 data-aos="fade-up">8. 실습: 나만의 브랜드 아이덴티티 키트 만들기</h2>

            <div className="exercise-box">
              <h3>과제 1: 브랜드 네이밍 워크시트</h3>
              <p>아래 단계를 따라 나의 브랜드 이름 후보 5개를 도출하세요.</p>
              <ol>
                <li>나의 브랜드 핵심 키워드 10개를 나열하세요</li>
                <li>키워드를 조합하여 이름 후보 10개를 만드세요</li>
                <li>네이밍 체크리스트를 적용하여 5개로 압축하세요</li>
                <li>주변 5명에게 보여주고 피드백을 받으세요</li>
                <li>최종 1개를 선정하고 도메인/SNS 핸들을 확보하세요</li>
              </ol>
            </div>

            <div className="exercise-box">
              <h3>과제 2: 브랜드 무드보드 제작</h3>
              <p>Canva, Pinterest, 또는 파워포인트를 활용하여 나의 브랜드 무드보드를 만드세요.</p>
              <ul>
                <li>나의 브랜드를 대표하는 이미지 10~15장 수집</li>
                <li>브랜드 키워드 3~5개 포함</li>
                <li>대표 인용구 1~2개 포함</li>
                <li>브랜드가 전달하려는 감정/분위기를 표현</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 3: 컬러 팔레트 & 서체 선정</h3>
              <p>아래 구성에 맞춰 나의 브랜드 컬러 팔레트를 선정하세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>색상명</th><th>HEX 코드</th><th>사용 용도</th></tr>
                </thead>
                <tbody>
                  <tr><td>주요 컬러 (Primary)</td><td></td><td></td><td>로고, 주요 버튼, 헤더</td></tr>
                  <tr><td>보조 컬러 (Secondary)</td><td></td><td></td><td>강조, 아이콘, 배지</td></tr>
                  <tr><td>배경 컬러 (Background)</td><td></td><td></td><td>배경, 카드</td></tr>
                  <tr><td>텍스트 컬러 (Text)</td><td></td><td></td><td>본문, 제목</td></tr>
                  <tr><td>포인트 컬러 (Accent)</td><td></td><td></td><td>CTA, 링크, 하이라이트</td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                <strong>서체 선정:</strong> 제목용 서체 1개, 본문용 서체 1개를 선정하고 선택 이유를 적어보세요.<br />
                <strong>추천 도구:</strong> Coolors.co, Adobe Color, Color Hunt, Google Fonts
              </p>
            </div>

            <div className="exercise-box">
              <h3>과제 4: 슬로건 작성 & 브랜드 가이드라인 초안</h3>
              <p>7가지 슬로건 공식 중 3가지 이상을 활용하여 슬로건 후보 5개를 작성하고, 최종 1개를 선정하세요.</p>
              <p style={{ marginTop: '0.5rem' }}>
                또한, 위에서 작업한 모든 요소(브랜드명, 로고 시안, 컬러, 서체, 슬로건, 보이스/톤)를
                하나의 문서로 정리하여 <strong>브랜드 가이드라인 초안(1~2페이지)</strong>을 작성하세요.
              </p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                5주차에서는 디지털 마케팅의 기초를 배웁니다. SEO, SEM, 퍼널 마케팅의 개념을 이해하고,
                나의 브랜드에 적합한 디지털 마케팅 전략을 수립합니다.
                디지털 채널을 통해 오늘 만든 브랜드 아이덴티티를 세상에 알리는 방법을 배우게 됩니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/target-audience" className="lesson-nav-btn prev">&larr; 3주차: 타겟 오디언스</Link>
              <Link to="/lessons/digital-marketing" className="lesson-nav-btn next">5주차: 디지털 마케팅 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek4;

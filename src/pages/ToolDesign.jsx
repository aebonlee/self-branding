import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolDesign = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="디자인 도구"
        description="비디자이너도 활용할 수 있는 디자인 도구와 디자인 원칙 가이드"
        path="/tools/design"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>디자인 도구</h1>
          <p>비디자이너를 위한 디자인 도구 활용법과 실무 디자인 원칙</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 디자인 도구 개요</h2>
            <p>
              현대 마케팅에서 시각적 콘텐츠는 필수입니다. 하지만 모든 마케터가 전문 디자이너는 아닙니다.
              다행히 최근의 디자인 도구들은 디자인 비전공자도 전문적인 수준의 결과물을 만들 수 있도록
              진화했습니다. 템플릿 기반의 쉬운 도구부터 전문가용 도구까지 목적에 맞게 선택하세요.
            </p>

            <div className="info-box tip">
              <strong>디자인이 중요한 이유:</strong>
              <ul>
                <li>시각적 콘텐츠는 텍스트보다 65% 더 기억에 남음</li>
                <li>좋은 디자인은 브랜드 신뢰도를 94% 향상시킴</li>
                <li>SNS에서 이미지 포함 포스트는 참여율이 2.3배 높음</li>
                <li>일관된 디자인은 브랜드 인지도를 80% 향상시킴</li>
              </ul>
            </div>

            <h2>2. Canva</h2>
            <p>
              Canva는 전 세계 1억 명 이상이 사용하는 올인원 디자인 플랫폼입니다.
              드래그 앤 드롭 방식으로 누구나 쉽게 전문적인 디자인을 만들 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Canva 활용 영역</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>템플릿</th><th>사이즈</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>인스타그램 포스트</td>
                    <td>1,000+ 템플릿</td>
                    <td>1080x1080px</td>
                  </tr>
                  <tr>
                    <td>인스타그램 스토리/릴스</td>
                    <td>500+ 템플릿</td>
                    <td>1080x1920px</td>
                  </tr>
                  <tr>
                    <td>유튜브 썸네일</td>
                    <td>300+ 템플릿</td>
                    <td>1280x720px</td>
                  </tr>
                  <tr>
                    <td>프레젠테이션</td>
                    <td>1,000+ 템플릿</td>
                    <td>1920x1080px</td>
                  </tr>
                  <tr>
                    <td>로고</td>
                    <td>500+ 템플릿</td>
                    <td>500x500px</td>
                  </tr>
                  <tr>
                    <td>명함</td>
                    <td>300+ 템플릿</td>
                    <td>85x55mm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>Canva 핵심 기능</h3>
              <ul>
                <li><strong>템플릿:</strong> 수만 개의 전문 디자인 템플릿. 수정만으로 고품질 결과물 생성</li>
                <li><strong>브랜드 키트:</strong> 브랜드 컬러, 폰트, 로고를 저장하여 일관된 디자인 유지 (Pro 기능)</li>
                <li><strong>매직 리사이즈:</strong> 하나의 디자인을 여러 사이즈로 자동 변환 (Pro 기능)</li>
                <li><strong>배경 제거:</strong> 원클릭 배경 제거 기능 (Pro 기능)</li>
                <li><strong>팀 협업:</strong> 팀원과 실시간 디자인 공유 및 편집</li>
                <li><strong>AI 기능:</strong> Magic Write (텍스트 생성), Text to Image (이미지 생성)</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>Canva 활용 팁:</strong>
              <ul>
                <li>템플릿은 그대로 쓰지 말고, 브랜드 컬러와 폰트로 커스터마이징</li>
                <li>한 디자인당 폰트는 2~3개, 색상은 3~5개로 제한</li>
                <li>그리드와 정렬 가이드를 활용하여 깔끔한 레이아웃 유지</li>
                <li>PNG는 투명 배경, JPG는 사진/웹용, PDF는 인쇄용</li>
              </ul>
            </div>

            <h2>3. Figma</h2>
            <p>
              Figma는 UI/UX 디자인 분야에서 가장 인기 있는 협업 디자인 도구입니다.
              웹 기반으로 별도 설치 없이 브라우저에서 바로 사용할 수 있으며,
              실시간 협업이 가능합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Figma 주요 기능</h3>
              <ul>
                <li><strong>UI 디자인:</strong> 웹/앱 인터페이스 디자인. 컴포넌트, 오토 레이아웃, 제약 조건</li>
                <li><strong>프로토타입:</strong> 인터랙션, 전환 효과, 사용자 흐름을 시뮬레이션</li>
                <li><strong>디자인 시스템:</strong> 재사용 가능한 컴포넌트, 스타일, 토큰으로 일관성 유지</li>
                <li><strong>개발자 핸드오프:</strong> CSS, Swift, Android 코드 자동 생성. 디자인 스펙 공유</li>
                <li><strong>FigJam:</strong> 화이트보드 기능으로 브레인스토밍, 워크숍 진행</li>
                <li><strong>플러그인:</strong> 수천 개의 플러그인으로 기능 확장 (아이콘, 사진, 차트 등)</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>마케터를 위한 Figma 활용:</strong>
              <ul>
                <li>랜딩 페이지 와이어프레임/디자인 직접 제작</li>
                <li>SNS 콘텐츠 템플릿 시스템 구축</li>
                <li>마케팅 자료(브로슈어, 배너) 디자인</li>
                <li>개발팀과의 원활한 디자인 커뮤니케이션</li>
              </ul>
            </div>

            <h2>4. Adobe Express</h2>
            <p>
              Adobe Express(구 Adobe Spark)는 Adobe의 간편 디자인 도구입니다.
              Adobe의 방대한 폰트, 스톡 이미지, AI 기능을 활용할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Adobe Express 특징</h3>
              <ul>
                <li><strong>빠른 디자인:</strong> 템플릿 기반의 직관적 편집. SNS 콘텐츠, 포스터, 전단지</li>
                <li><strong>Adobe Fonts:</strong> 20,000+ 프리미엄 폰트 무료 사용</li>
                <li><strong>Adobe Stock:</strong> 수백만 개의 스톡 이미지/영상 (프리미엄 기능)</li>
                <li><strong>영상 편집:</strong> 간단한 영상 편집, 자막 추가, 리사이즈</li>
                <li><strong>배경 제거:</strong> AI 기반 원클릭 배경 제거</li>
                <li><strong>Creative Cloud 연동:</strong> Photoshop, Illustrator 파일 가져오기</li>
              </ul>
            </div>

            <h2>5. 무료 리소스</h2>
            <p>
              좋은 디자인을 위해 반드시 유료 리소스가 필요한 것은 아닙니다.
              다양한 무료 리소스를 활용하면 비용 없이도 전문적인 결과물을 만들 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>무료 리소스 모음</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>카테고리</th><th>서비스</th><th>특징</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3"><strong>무료 폰트</strong></td>
                    <td>Google Fonts</td>
                    <td>1,500+ 무료 폰트, 웹폰트 직접 사용 가능</td>
                  </tr>
                  <tr>
                    <td>눈누</td>
                    <td>한글 무료 폰트 모음, 상업적 사용 가능 필터</td>
                  </tr>
                  <tr>
                    <td>네이버 폰트</td>
                    <td>나눔고딕, 나눔스퀘어 등 고품질 한글 폰트</td>
                  </tr>
                  <tr>
                    <td rowSpan="3"><strong>무료 이미지</strong></td>
                    <td>Unsplash</td>
                    <td>고해상도 무료 사진, 상업적 사용 가능</td>
                  </tr>
                  <tr>
                    <td>Pexels</td>
                    <td>무료 사진+영상, CC0 라이선스</td>
                  </tr>
                  <tr>
                    <td>Pixabay</td>
                    <td>사진, 일러스트, 벡터, 영상 무료 제공</td>
                  </tr>
                  <tr>
                    <td rowSpan="3"><strong>무료 아이콘</strong></td>
                    <td>Flaticon</td>
                    <td>1,600만+ 아이콘, PNG/SVG 다운로드</td>
                  </tr>
                  <tr>
                    <td>Heroicons</td>
                    <td>Tailwind CSS 팀 제작, SVG 아이콘</td>
                  </tr>
                  <tr>
                    <td>Font Awesome</td>
                    <td>웹 아이콘 표준, 무료/프리미엄 아이콘</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>저작권 주의:</strong> 무료 리소스라도 라이선스를 반드시 확인하세요.
              <ul>
                <li><strong>CC0:</strong> 완전 자유 사용 (상업적 사용, 수정 가능)</li>
                <li><strong>CC BY:</strong> 출처 표시 필수</li>
                <li><strong>CC BY-NC:</strong> 비상업적 용도만 가능</li>
                <li>인물 사진은 초상권 문제가 있을 수 있으므로 모델 릴리스 확인</li>
              </ul>
            </div>

            <h2>6. 디자인 원칙</h2>
            <p>
              기본적인 디자인 원칙만 지켜도 아마추어 티를 크게 줄일 수 있습니다.
              이 5가지 원칙은 모든 디자인의 기초입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>디자인 5대 원칙</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>원칙</th><th>설명</th><th>실전 적용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>정렬 (Alignment)</strong></td>
                    <td>모든 요소를 보이지 않는 선에 맞추어 배치</td>
                    <td>텍스트, 이미지를 좌측/중앙 정렬로 통일</td>
                  </tr>
                  <tr>
                    <td><strong>대비 (Contrast)</strong></td>
                    <td>중요한 요소를 크기, 색상, 두께로 차별화</td>
                    <td>제목은 크고 진하게, 본문은 작고 가볍게</td>
                  </tr>
                  <tr>
                    <td><strong>반복 (Repetition)</strong></td>
                    <td>시각적 요소(색상, 폰트, 스타일)를 반복 사용</td>
                    <td>같은 브랜드 컬러와 폰트를 모든 자료에 적용</td>
                  </tr>
                  <tr>
                    <td><strong>근접 (Proximity)</strong></td>
                    <td>관련 있는 요소는 가깝게, 없는 요소는 멀리</td>
                    <td>제목과 설명은 가깝게, 다른 섹션과는 간격 유지</td>
                  </tr>
                  <tr>
                    <td><strong>여백 (White Space)</strong></td>
                    <td>빈 공간을 전략적으로 활용</td>
                    <td>요소 사이에 충분한 여백으로 깔끔함과 고급스러움 연출</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>디자인 초보자를 위한 꿀팁:</strong>
              <ul>
                <li>의심될 때는 여백을 더 넣으세요 (빈 공간은 친구입니다)</li>
                <li>폰트는 최대 2개까지만 사용 (제목용 + 본문용)</li>
                <li>정렬을 깨지 마세요 (정렬만 잘해도 90점)</li>
                <li>컬러는 브랜드 메인 1색 + 보조 1색 + 중립색(흰/검/회)</li>
              </ul>
            </div>

            <h2>7. 색상 조합</h2>
            <p>
              색상은 브랜드 인식에 가장 큰 영향을 미치는 요소입니다.
              적절한 색상 조합은 전문적이고 신뢰감 있는 브랜드 이미지를 만듭니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>색상 이론 기초</h3>
              <ul>
                <li><strong>보색 (Complementary):</strong> 색상환에서 반대편 색상 조합. 강한 대비, 눈에 띄는 디자인 (예: 파란색+주황색)</li>
                <li><strong>유사색 (Analogous):</strong> 색상환에서 인접한 색상 조합. 조화롭고 부드러운 느낌 (예: 파란색+보라색+남색)</li>
                <li><strong>삼원색 (Triadic):</strong> 색상환에서 균등 간격의 3색 조합. 다채롭고 활기찬 디자인</li>
                <li><strong>단색 (Monochromatic):</strong> 한 가지 색의 다양한 명도/채도 변형. 세련되고 통일감 있는 디자인</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>색상이 전달하는 감정</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>색상</th><th>연상 감정</th><th>활용 분야</th></tr>
                </thead>
                <tbody>
                  <tr><td>빨간색</td><td>열정, 긴급, 에너지</td><td>세일, 음식, 엔터테인먼트</td></tr>
                  <tr><td>파란색</td><td>신뢰, 안정, 전문성</td><td>금융, IT, 의료, B2B</td></tr>
                  <tr><td>초록색</td><td>자연, 성장, 건강</td><td>환경, 건강, 금융</td></tr>
                  <tr><td>노란색</td><td>낙관, 활기, 주목</td><td>주의 환기, 어린이, 식품</td></tr>
                  <tr><td>보라색</td><td>고급, 창의, 신비</td><td>뷰티, 럭셔리, 교육</td></tr>
                  <tr><td>검은색</td><td>세련, 고급, 권위</td><td>패션, 럭셔리, 테크</td></tr>
                </tbody>
              </table>
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Canva</strong></td>
                    <td>올인원 디자인, 템플릿, AI 기능</td>
                    <td>무료~월 $13</td>
                  </tr>
                  <tr>
                    <td><strong>Figma</strong></td>
                    <td>UI/UX 디자인, 프로토타입, 협업</td>
                    <td>무료~월 $15</td>
                  </tr>
                  <tr>
                    <td><strong>Remove.bg</strong></td>
                    <td>AI 기반 배경 제거 (5초 완료)</td>
                    <td>무료 (저해상도)~건당 $1</td>
                  </tr>
                  <tr>
                    <td><strong>Coolors</strong></td>
                    <td>색상 팔레트 생성, 조합 추천, 대비 검사</td>
                    <td>무료~월 $3</td>
                  </tr>
                  <tr>
                    <td><strong>Photopea</strong></td>
                    <td>무료 온라인 포토샵 대안, PSD 편집 가능</td>
                    <td>무료 (광고 포함)</td>
                  </tr>
                  <tr>
                    <td><strong>Lottiefiles</strong></td>
                    <td>무료 애니메이션/모션 그래픽</td>
                    <td>무료~월 $19</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/ads" className="lesson-nav-btn prev">← 광고 마케팅</Link>
              <Link to="/tools/ai" className="lesson-nav-btn next">AI 활용 마케팅 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolDesign;

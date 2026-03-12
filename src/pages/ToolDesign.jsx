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
        description="Canva, Figma 등 마케팅 디자인 도구 활용법과 디자인 원칙 완벽 가이드"
        path="/tools/design"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>디자인 도구</h1>
          <p>비디자이너도 전문가 수준의 콘텐츠를 만들 수 있는 디자인 도구 활용 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 마케팅 디자인의 중요성</h2>
            <p>
              시각적 콘텐츠는 텍스트보다 60,000배 빠르게 처리되며,
              이미지가 포함된 콘텐츠는 그렇지 않은 콘텐츠보다 94% 더 많은 조회수를 얻습니다.
              마케팅에서 디자인은 선택이 아닌 필수이며, 전문 디자이너가 아니더라도
              적절한 도구를 활용하면 프로페셔널한 결과물을 만들 수 있습니다.
            </p>

            <div className="info-box tip">
              <strong>디자인이 마케팅 성과에 미치는 영향:</strong>
              <ul>
                <li><strong>첫인상:</strong> 사용자는 0.05초 만에 디자인으로 브랜드를 판단</li>
                <li><strong>브랜드 인식:</strong> 일관된 디자인은 브랜드 인지도를 80% 향상</li>
                <li><strong>전환율:</strong> 잘 디자인된 랜딩 페이지는 전환율 200%+ 향상</li>
                <li><strong>소셜 참여:</strong> 비주얼 콘텐츠는 텍스트 대비 2.3배 높은 참여율</li>
                <li><strong>정보 전달:</strong> 인포그래픽은 텍스트 대비 30배 높은 읽힘율</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 디자인 도구 분류</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>카테고리</th><th>대표 도구</th><th>난이도</th><th>비용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>올인원 디자인</strong></td>
                    <td>Canva, Adobe Express</td>
                    <td>초급</td>
                    <td>무료~월 $13</td>
                  </tr>
                  <tr>
                    <td><strong>UI/UX 디자인</strong></td>
                    <td>Figma, Sketch</td>
                    <td>중급</td>
                    <td>무료~월 $15</td>
                  </tr>
                  <tr>
                    <td><strong>전문 이미지 편집</strong></td>
                    <td>Adobe Photoshop, GIMP</td>
                    <td>고급</td>
                    <td>무료~월 $23</td>
                  </tr>
                  <tr>
                    <td><strong>일러스트</strong></td>
                    <td>Adobe Illustrator, Inkscape</td>
                    <td>고급</td>
                    <td>무료~월 $23</td>
                  </tr>
                  <tr>
                    <td><strong>비디오 편집</strong></td>
                    <td>CapCut, Premiere Rush</td>
                    <td>초~중급</td>
                    <td>무료~월 $10</td>
                  </tr>
                  <tr>
                    <td><strong>AI 이미지 생성</strong></td>
                    <td>Midjourney, DALL-E, Canva AI</td>
                    <td>초급</td>
                    <td>무료~월 $30</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>2. Canva 완벽 가이드</h2>
            <p>
              Canva는 전 세계 1.9억+ 사용자가 사용하는 가장 인기 있는 온라인 디자인 도구입니다.
              드래그 앤 드롭 방식의 직관적 인터페이스로 비디자이너도 쉽게 전문적인 콘텐츠를 제작할 수 있으며,
              100만 개 이상의 템플릿을 제공합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Canva 핵심 기능</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기능</th><th>설명</th><th>활용 예시</th><th>플랜</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>템플릿</strong></td>
                    <td>100만+ 전문 디자인 템플릿</td>
                    <td>SNS 포스트, 프레젠테이션, 명함</td>
                    <td>무료/Pro</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드 키트</strong></td>
                    <td>로고, 색상, 폰트 저장/일괄 적용</td>
                    <td>브랜드 일관성 유지</td>
                    <td>Pro</td>
                  </tr>
                  <tr>
                    <td><strong>Magic Resize</strong></td>
                    <td>한 디자인을 다양한 사이즈로 자동 변환</td>
                    <td>하나의 디자인으로 모든 SNS 커버</td>
                    <td>Pro</td>
                  </tr>
                  <tr>
                    <td><strong>배경 제거</strong></td>
                    <td>AI 기반 원클릭 배경 제거</td>
                    <td>제품 이미지, 인물 사진 편집</td>
                    <td>Pro</td>
                  </tr>
                  <tr>
                    <td><strong>팀 협업</strong></td>
                    <td>실시간 동시 편집, 댓글, 버전 관리</td>
                    <td>마케팅 팀 워크플로</td>
                    <td>무료/Pro</td>
                  </tr>
                  <tr>
                    <td><strong>동영상 편집</strong></td>
                    <td>타임라인 기반 영상 편집, 자막</td>
                    <td>릴스, 스토리, 광고 영상</td>
                    <td>무료/Pro</td>
                  </tr>
                  <tr>
                    <td><strong>Magic Write (AI)</strong></td>
                    <td>AI 텍스트 생성, 요약, 번역</td>
                    <td>카피 작성, 콘텐츠 아이디어</td>
                    <td>무료(제한)/Pro</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>Canva Pro를 추천하는 이유:</strong>
              <ul>
                <li>1억+ 프리미엄 스톡 이미지/영상/오디오 무제한 사용</li>
                <li>브랜드 키트로 팀 전체의 디자인 일관성 확보</li>
                <li>Magic Resize로 하나의 디자인을 10개+ SNS 사이즈로 즉시 변환</li>
                <li>배경 제거, Magic Edit 등 AI 도구 무제한 사용</li>
                <li>월 $13 (연간 결제 시)로 전문 디자인 도구 대비 극히 저렴</li>
              </ul>
            </div>

            <h2>3. Figma 기초</h2>
            <p>
              Figma는 웹 기반 UI/UX 디자인 도구로, 웹사이트, 앱, 프로토타입 제작에 최적화되어 있습니다.
              마케터에게는 랜딩 페이지 디자인, 와이어프레임, 프로토타입 제작에 유용합니다.
              실시간 협업 기능이 뛰어나 디자이너-마케터 간 소통에도 효과적입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>마케터를 위한 Figma 활용법</h3>
              <ul>
                <li><strong>랜딩 페이지 디자인:</strong> 와이어프레임부터 고해상도 목업까지 제작</li>
                <li><strong>프로토타입:</strong> 클릭 가능한 인터랙티브 프로토타입으로 UX 테스트</li>
                <li><strong>디자인 시스템:</strong> 컴포넌트, 스타일 가이드로 디자인 일관성 유지</li>
                <li><strong>협업:</strong> 디자인에 직접 코멘트, 실시간 피드백</li>
                <li><strong>핸드오프:</strong> 개발자에게 CSS 값, 에셋을 자동으로 전달</li>
                <li><strong>커뮤니티:</strong> 수천 개의 무료 템플릿, 플러그인 활용</li>
              </ul>
            </div>

            <div className="callout-box">
              <strong>Canva vs Figma 선택 기준:</strong> 소셜 미디어 콘텐츠, 프레젠테이션, 간단한 마케팅 자료는
              Canva가 적합합니다. 웹사이트/앱 디자인, 랜딩 페이지, 복잡한 레이아웃, 개발 협업이 필요한 경우는
              Figma가 적합합니다. 마케터라면 Canva를 메인으로, Figma를 보조로 사용하는 것을 추천합니다.
            </div>

            <h2>4. Adobe Express &amp; 기타 도구</h2>
            <p>
              Adobe Express는 Adobe의 간편 디자인 도구로, Canva와 유사한 포지셔닝이지만
              Adobe 생태계와의 통합이 강점입니다. 그 외에도 다양한 디자인 도구가 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>기타 디자인 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>특징</th><th>강점</th><th>비용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Adobe Express</strong></td>
                    <td>Adobe의 간편 디자인 도구</td>
                    <td>Adobe Fonts, Stock 통합, AI 기능</td>
                    <td>무료~월 $10</td>
                  </tr>
                  <tr>
                    <td><strong>Crello (VistaCreate)</strong></td>
                    <td>Canva 대안, 애니메이션 강점</td>
                    <td>움직이는 그래픽, 애니메이션 템플릿</td>
                    <td>무료~월 $10</td>
                  </tr>
                  <tr>
                    <td><strong>Piktochart</strong></td>
                    <td>인포그래픽 전문 도구</td>
                    <td>데이터 시각화, 보고서 디자인</td>
                    <td>무료~월 $14</td>
                  </tr>
                  <tr>
                    <td><strong>Snappa</strong></td>
                    <td>소셜 미디어 그래픽 전문</td>
                    <td>빠른 제작, SNS 최적화 템플릿</td>
                    <td>무료~월 $10</td>
                  </tr>
                  <tr>
                    <td><strong>Remove.bg</strong></td>
                    <td>AI 배경 제거 전문</td>
                    <td>가장 정확한 배경 제거 품질</td>
                    <td>무료(저해상도)~건당 $1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>5. 디자인 원칙</h2>
            <p>
              좋은 도구만으로는 좋은 디자인을 만들 수 없습니다.
              기본적인 디자인 원칙을 이해하면 어떤 도구를 사용하든 더 효과적인 결과물을 만들 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>레이아웃 원칙</h3>
              <ul>
                <li><strong>정렬(Alignment):</strong> 모든 요소를 보이지 않는 선에 맞춰 정렬. 좌측 정렬이 가장 읽기 편함</li>
                <li><strong>근접(Proximity):</strong> 관련 있는 요소는 가까이, 관련 없는 요소는 멀리 배치</li>
                <li><strong>반복(Repetition):</strong> 일관된 스타일, 색상, 폰트를 반복하여 통일감 부여</li>
                <li><strong>대비(Contrast):</strong> 크기, 색상, 굵기의 차이로 시각적 계층 구조 형성</li>
                <li><strong>여백(White Space):</strong> 충분한 여백으로 시각적 호흡. 빈 공간도 디자인의 일부</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>색상 선택 가이드</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>색상</th><th>연상 이미지</th><th>적합한 브랜드</th><th>사용 예</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>파랑</strong></td>
                    <td>신뢰, 안정, 전문성</td>
                    <td>금융, 기술, 의료</td>
                    <td>Facebook, Samsung, PayPal</td>
                  </tr>
                  <tr>
                    <td><strong>빨강</strong></td>
                    <td>열정, 긴급, 에너지</td>
                    <td>식품, 엔터테인먼트, 스포츠</td>
                    <td>Coca-Cola, YouTube, Netflix</td>
                  </tr>
                  <tr>
                    <td><strong>초록</strong></td>
                    <td>자연, 건강, 성장</td>
                    <td>친환경, 건강, 금융</td>
                    <td>Starbucks, Spotify, LINE</td>
                  </tr>
                  <tr>
                    <td><strong>노랑</strong></td>
                    <td>밝음, 낙관, 주의</td>
                    <td>유아, 식품, 레저</td>
                    <td>McDonald's, IKEA, Kakao</td>
                  </tr>
                  <tr>
                    <td><strong>보라</strong></td>
                    <td>창의성, 고급, 신비</td>
                    <td>뷰티, 럭셔리, 창의</td>
                    <td>Twitch, Cadbury, Yahoo</td>
                  </tr>
                  <tr>
                    <td><strong>검정</strong></td>
                    <td>세련, 고급, 권위</td>
                    <td>패션, 럭셔리, 기술</td>
                    <td>Apple, Nike, Chanel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>타이포그래피 기본 규칙:</strong>
              <ul>
                <li><strong>폰트 수:</strong> 하나의 디자인에 최대 2~3개 폰트만 사용</li>
                <li><strong>계층 구조:</strong> 제목(크고 굵게), 부제목(중간), 본문(작고 가늘게)으로 구분</li>
                <li><strong>가독성:</strong> 본문은 16px 이상, 줄 간격은 폰트 크기의 1.4~1.6배</li>
                <li><strong>한글 폰트:</strong> Pretendard, Noto Sans KR, Spoqa Han Sans이 가독성 우수</li>
                <li><strong>폰트 조합:</strong> 산세리프(고딕) 제목 + 세리프(명조) 본문, 또는 같은 계열의 다른 굵기</li>
              </ul>
            </div>

            <h3>시각 계층 구조 (Visual Hierarchy)</h3>
            <div className="section-card" data-aos="fade-up">
              <ul>
                <li><strong>크기:</strong> 가장 중요한 요소를 가장 크게. 제목 &gt; 부제목 &gt; 본문</li>
                <li><strong>색상:</strong> 핵심 요소에 브랜드 메인 컬러, 보조 요소에 뉴트럴 컬러</li>
                <li><strong>위치:</strong> 시선은 왼쪽 상단에서 시작 (F패턴, Z패턴)</li>
                <li><strong>굵기:</strong> Bold로 핵심 키워드 강조</li>
                <li><strong>여백:</strong> 중요한 요소 주변에 더 많은 여백 배치</li>
              </ul>
            </div>

            <h2>6. SNS별 이미지 사이즈 가이드</h2>
            <p>
              각 소셜 미디어 플랫폼마다 최적의 이미지 사이즈가 다릅니다.
              올바른 사이즈로 제작해야 잘림 없이 최상의 화질로 표시됩니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>SNS 이미지 사이즈 가이드 (2025 기준)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>플랫폼</th><th>콘텐츠 유형</th><th>권장 사이즈 (px)</th><th>비율</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Instagram</strong></td><td>피드 정사각형</td><td>1080 x 1080</td><td>1:1</td></tr>
                  <tr><td><strong>Instagram</strong></td><td>피드 세로형</td><td>1080 x 1350</td><td>4:5</td></tr>
                  <tr><td><strong>Instagram</strong></td><td>스토리/릴스</td><td>1080 x 1920</td><td>9:16</td></tr>
                  <tr><td><strong>Facebook</strong></td><td>피드 이미지</td><td>1200 x 630</td><td>1.91:1</td></tr>
                  <tr><td><strong>Facebook</strong></td><td>커버 이미지</td><td>820 x 312</td><td>2.63:1</td></tr>
                  <tr><td><strong>YouTube</strong></td><td>썸네일</td><td>1280 x 720</td><td>16:9</td></tr>
                  <tr><td><strong>YouTube</strong></td><td>채널 배너</td><td>2560 x 1440</td><td>16:9</td></tr>
                  <tr><td><strong>LinkedIn</strong></td><td>피드 이미지</td><td>1200 x 627</td><td>1.91:1</td></tr>
                  <tr><td><strong>LinkedIn</strong></td><td>배경 이미지</td><td>1584 x 396</td><td>4:1</td></tr>
                  <tr><td><strong>Twitter/X</strong></td><td>피드 이미지</td><td>1600 x 900</td><td>16:9</td></tr>
                  <tr><td><strong>Twitter/X</strong></td><td>헤더 이미지</td><td>1500 x 500</td><td>3:1</td></tr>
                  <tr><td><strong>Pinterest</strong></td><td>핀 이미지</td><td>1000 x 1500</td><td>2:3</td></tr>
                  <tr><td><strong>네이버 블로그</strong></td><td>대표 이미지</td><td>1200 x 630</td><td>1.91:1</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>이미지 사이즈 주의사항:</strong>
              <ul>
                <li>플랫폼별 사이즈 가이드는 수시로 업데이트되므로, 최신 정보 확인 필수</li>
                <li>Canva의 Magic Resize 기능을 활용하면 하나의 디자인을 여러 사이즈로 자동 변환 가능</li>
                <li>모바일에서의 표시를 반드시 미리 확인하세요 (텍스트 잘림 주의)</li>
                <li>파일 형식: SNS는 JPG(사진), PNG(그래픽/투명 배경), GIF(애니메이션)</li>
              </ul>
            </div>

            <h2>7. 비디오 편집 도구</h2>
            <p>
              숏폼 비디오가 마케팅의 핵심으로 부상하면서, 간편한 비디오 편집 도구의 중요성이 커지고 있습니다.
              전문 영상 편집 기술 없이도 효과적인 마케팅 영상을 제작할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>비디오 편집 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>플랫폼</th><th>강점</th><th>비용</th><th>추천 용도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>CapCut</strong></td>
                    <td>모바일/데스크톱/웹</td>
                    <td>자동 자막, 트렌디한 효과, 직관적</td>
                    <td>무료 (Pro 월 $8)</td>
                    <td>릴스, 틱톡, 숏폼</td>
                  </tr>
                  <tr>
                    <td><strong>Premiere Rush</strong></td>
                    <td>모바일/데스크톱</td>
                    <td>Adobe 통합, 멀티 트랙, 색보정</td>
                    <td>무료~월 $10</td>
                    <td>YouTube, 브랜드 영상</td>
                  </tr>
                  <tr>
                    <td><strong>Canva 비디오</strong></td>
                    <td>웹</td>
                    <td>템플릿 풍부, 디자인 통합</td>
                    <td>무료/Pro</td>
                    <td>SNS 영상, 광고 소재</td>
                  </tr>
                  <tr>
                    <td><strong>InShot</strong></td>
                    <td>모바일</td>
                    <td>직관적, 빠른 편집, 비율 조정 용이</td>
                    <td>무료~월 $4</td>
                    <td>스토리, 릴스</td>
                  </tr>
                  <tr>
                    <td><strong>DaVinci Resolve</strong></td>
                    <td>데스크톱</td>
                    <td>전문가급 무료 편집, 색보정 최강</td>
                    <td>무료 (Studio $295)</td>
                    <td>전문 영상 제작</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>마케팅 영상 제작 팁:</strong>
              <ul>
                <li><strong>첫 3초 훅:</strong> 시청자의 주목을 잡는 강한 시작 (질문, 놀라운 사실, 시각적 충격)</li>
                <li><strong>자막 필수:</strong> 85%의 소셜 미디어 영상은 음소거로 시청됨</li>
                <li><strong>세로형 우선:</strong> 모바일 시청 비율 80%+, 9:16 비율 우선 제작</li>
                <li><strong>길이 최적화:</strong> 릴스/틱톡 15~60초, YouTube Shorts 60초 이내, YouTube 8~12분</li>
                <li><strong>CTA 삽입:</strong> 영상 중간과 끝에 명확한 행동 유도 삽입</li>
              </ul>
            </div>

            <h2>8. 무료 리소스</h2>
            <p>
              전문적인 디자인을 위한 고품질 무료 리소스를 알면 비용을 절약하면서도
              퀄리티 높은 결과물을 만들 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>무료 이미지 사이트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>사이트</th><th>특징</th><th>라이선스</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Unsplash</strong></td><td>고퀄리티 사진, 가장 인기</td><td>상업적 무료 사용</td></tr>
                  <tr><td><strong>Pexels</strong></td><td>사진 + 영상 제공</td><td>상업적 무료 사용</td></tr>
                  <tr><td><strong>Pixabay</strong></td><td>사진, 일러스트, 벡터, 영상</td><td>상업적 무료 사용</td></tr>
                  <tr><td><strong>Freepik</strong></td><td>벡터, PSD, 아이콘 풍부</td><td>출처 표시 필요 (무료)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>아이콘 &amp; 폰트 사이트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>사이트</th><th>유형</th><th>특징</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Flaticon</strong></td><td>아이콘</td><td>1,600만+ 아이콘, 다양한 스타일</td></tr>
                  <tr><td><strong>Feather Icons</strong></td><td>아이콘</td><td>미니멀한 라인 아이콘, 오픈소스</td></tr>
                  <tr><td><strong>Google Fonts</strong></td><td>폰트</td><td>1,500+ 무료 웹폰트, 한글 포함</td></tr>
                  <tr><td><strong>눈누</strong></td><td>폰트</td><td>한글 무료 폰트 모음, 상업적 사용 필터</td></tr>
                  <tr><td><strong>Font Awesome</strong></td><td>아이콘 폰트</td><td>웹 아이콘 표준, 2,000+ 아이콘</td></tr>
                  <tr><td><strong>Material Icons</strong></td><td>아이콘</td><td>구글 머터리얼 디자인 아이콘</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>라이선스 주의사항:</strong> 무료 리소스를 사용할 때는 반드시 라이선스를 확인하세요.
              "상업적 무료 사용"이라도 일부 제한이 있을 수 있습니다.
              특히 인물 사진은 모델 릴리스(초상권 동의)가 없는 경우 광고에 사용하면 안 됩니다.
              Unsplash, Pexels는 출처 표시 없이 상업적 사용이 가능하지만, Freepik은 출처 표시가 필요합니다.
            </div>

            <div className="exercise-box">
              <h3>실습: Canva로 SNS 콘텐츠 세트 제작</h3>
              <p>Canva를 활용하여 브랜드를 위한 SNS 콘텐츠 세트를 제작해 보세요.</p>
              <ol>
                <li><strong>브랜드 설정:</strong> Canva에서 브랜드 키트 설정 (로고, 색상 3개, 폰트 2개)</li>
                <li><strong>Instagram 피드 포스트 3종:</strong>
                  <ul>
                    <li>정보 전달형 캐러셀 (5~7장)</li>
                    <li>인용구/명언 이미지</li>
                    <li>제품/서비스 소개 이미지</li>
                  </ul>
                </li>
                <li><strong>Instagram 스토리 2종:</strong> 투표/퀴즈 스토리 + 프로모션 스토리</li>
                <li><strong>LinkedIn 포스트 이미지 1종:</strong> 인사이트 공유 인포그래픽</li>
                <li><strong>YouTube 썸네일 1종:</strong> 주목도 높은 썸네일 디자인</li>
                <li><strong>이메일 헤더 1종:</strong> 뉴스레터 상단 배너 이미지</li>
                <li><strong>일관성 확인:</strong> 모든 디자인의 색상, 폰트, 톤이 통일되었는지 점검</li>
              </ol>
              <p><strong>제출물:</strong> 총 8개 디자인 파일 + 브랜드 가이드 1장 요약</p>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/ads" className="lesson-nav-btn prev">&larr; 광고 마케팅</Link>
              <Link to="/tools/ai" className="lesson-nav-btn next">AI 활용 마케팅 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolDesign;

import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek7 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="7주차: 콘텐츠 마케팅" path="/lessons/content-marketing" />
      <section className="page-header">
        <div className="container">
          <h1>7주차: 콘텐츠 마케팅</h1>
          <p>가치 있는 콘텐츠로 고객을 유치하고, 신뢰를 구축하며, 브랜드를 성장시키는 전략을 배웁니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 콘텐츠 마케팅이란</h2>
            <p>
              콘텐츠 마케팅(Content Marketing)은 명확하게 정의된 타겟 오디언스를 유치하고 유지하기 위해
              가치 있고, 관련성 있으며, 일관된 콘텐츠를 만들고 배포하는 전략적 마케팅 접근법입니다.
              직접적인 제품 홍보 대신, 고객에게 유용한 정보를 제공하여 자연스럽게 브랜드 신뢰도를 높이고
              궁극적으로 수익성 있는 고객 행동을 유도합니다.
            </p>

            <div className="callout-box">
              <h3>콘텐츠 마케팅의 핵심 원칙</h3>
              <ul>
                <li><strong>가치 제공 우선</strong> — 팔기 전에 먼저 도움을 준다</li>
                <li><strong>일관성</strong> — 정기적이고 꾸준한 콘텐츠 발행</li>
                <li><strong>타겟 중심</strong> — 모든 사람이 아닌, 나의 이상적 고객을 위한 콘텐츠</li>
                <li><strong>전략적 목표</strong> — 인지도, 리드 생성, 전환 등 명확한 목표 설정</li>
                <li><strong>측정과 개선</strong> — 데이터 기반으로 콘텐츠 효과를 분석하고 개선</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>콘텐츠 마케팅 vs 전통 마케팅</h3>
              <p>
                전통적인 광고가 "우리 제품을 사세요!"라고 외치는 것이라면, 콘텐츠 마케팅은
                "이 정보가 당신에게 도움이 될 것입니다"라고 말하는 것입니다.
                콘텐츠 마케팅은 전통 마케팅 대비 62% 낮은 비용으로 3배 더 많은 리드를 생성한다는
                연구 결과가 있습니다 (DemandMetric).
              </p>
            </div>

            <h2 data-aos="fade-up">2. 블로그 마케팅</h2>
            <p>
              블로그는 콘텐츠 마케팅의 근간이 되는 채널입니다. 검색 엔진을 통한 유기적 트래픽 확보,
              전문성 증명, 그리고 잠재 고객과의 지속적인 접점 역할을 합니다.
            </p>

            <h3>SEO 최적화 글쓰기</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>SEO 요소</th><th>최적화 방법</th><th>중요도</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>제목 (Title Tag)</strong></td><td>주요 키워드 포함, 60자 이내, 클릭을 유도하는 문구</td><td>매우 높음</td></tr>
                <tr><td><strong>메타 설명</strong></td><td>155자 이내, 키워드 포함, 행동 유도 문구</td><td>높음</td></tr>
                <tr><td><strong>헤딩 태그 (H1~H3)</strong></td><td>계층적 구조, 키워드 자연 배치</td><td>높음</td></tr>
                <tr><td><strong>본문 키워드</strong></td><td>키워드 밀도 1~2%, 자연스러운 삽입, 동의어 활용</td><td>높음</td></tr>
                <tr><td><strong>내부 링크</strong></td><td>관련 포스트 연결, 앵커 텍스트 최적화</td><td>중간</td></tr>
                <tr><td><strong>이미지 최적화</strong></td><td>ALT 태그, 파일명, 이미지 압축</td><td>중간</td></tr>
                <tr><td><strong>URL 구조</strong></td><td>짧고 명확한 URL, 키워드 포함</td><td>중간</td></tr>
              </tbody>
            </table>

            <h3>키워드 리서치 전략</h3>
            <ul>
              <li><strong>시드 키워드</strong>: 브랜드와 관련된 핵심 주제에서 시작</li>
              <li><strong>롱테일 키워드</strong>: 3~5단어로 구성된 구체적 검색어 (경쟁 낮음, 전환율 높음)</li>
              <li><strong>검색 의도 파악</strong>: 정보성(~란), 탐색성(~방법), 거래성(~구매) 구분</li>
              <li><strong>도구 활용</strong>: Google Keyword Planner, 네이버 키워드 도구, Ahrefs, SEMrush</li>
            </ul>

            <div className="info-box tip">
              <h3>블로그 포스팅 팁</h3>
              <p>
                첫 문단에서 독자의 문제를 명확히 제시하고, 글 전체에서 해결책을 단계적으로 설명하세요.
                2,000자 이상의 장문 콘텐츠가 검색 순위에서 유리하지만, 단락을 짧게 나누고 소제목을
                적극적으로 활용하여 가독성을 높여야 합니다. 하나의 포스트에 하나의 주제만 다루세요.
              </p>
            </div>

            <h2 data-aos="fade-up">3. 뉴스레터 마케팅</h2>
            <p>
              이메일 뉴스레터는 소셜 미디어 알고리즘에 의존하지 않고 구독자에게 직접 도달할 수 있는
              가장 강력한 채널 중 하나입니다. 이메일 마케팅의 ROI는 평균 36:1로, 1달러 투자 시
              36달러의 수익을 기대할 수 있습니다.
            </p>

            <h3>이메일 리스트 구축 전략</h3>
            <ul>
              <li><strong>리드 마그넷(Lead Magnet)</strong>: 무료 전자책, 체크리스트, 템플릿, 웨비나 제공</li>
              <li><strong>옵트인 폼 최적화</strong>: 블로그 사이드바, 팝업, 본문 내 CTA 배치</li>
              <li><strong>랜딩 페이지</strong>: 구독의 가치를 명확히 전달하는 전용 페이지 제작</li>
              <li><strong>소셜 미디어 연계</strong>: SNS 프로필과 포스트에서 구독 유도</li>
            </ul>

            <h3>오픈율/클릭률 높이기</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>지표</th><th>업계 평균</th><th>개선 전략</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>오픈율</strong></td><td>20~25%</td><td>호기심 유발 제목, 발신자명 최적화, 발송 시간 테스트</td></tr>
                <tr><td><strong>클릭률(CTR)</strong></td><td>2~5%</td><td>명확한 CTA 버튼, 개인화된 콘텐츠, 간결한 레이아웃</td></tr>
                <tr><td><strong>구독 해지율</strong></td><td>0.5% 미만</td><td>가치 있는 콘텐츠 유지, 적절한 발송 빈도, 세그먼테이션</td></tr>
              </tbody>
            </table>

            <div className="info-box warning">
              <h3>주의사항</h3>
              <p>
                이메일 리스트를 구매하거나 동의 없이 메일을 발송하지 마세요. 스팸 신고가 쌓이면
                발신 도메인이 블랙리스트에 등록될 수 있으며, 개인정보보호법 위반으로 법적 제재를 받을 수 있습니다.
                반드시 옵트인(동의) 기반으로 리스트를 구축하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">4. 스토리텔링</h2>
            <p>
              사람은 데이터보다 이야기에 반응합니다. 연구에 따르면 스토리로 전달된 정보는
              단순 나열된 정보보다 22배 더 잘 기억됩니다. 브랜드 스토리텔링은 고객과의
              감정적 연결을 만드는 가장 효과적인 방법입니다.
            </p>

            <h3>히어로즈 저니 (Hero's Journey) 프레임워크</h3>
            <div className="callout-box">
              <h4>브랜드 스토리에 적용하는 히어로즈 저니</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>스토리 요소</th><th>브랜드 적용 예시</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. 일상 세계</strong></td><td>주인공(고객)의 현재 상태</td><td>"매일 야근에 지친 직장인 김대리"</td></tr>
                  <tr><td><strong>2. 모험의 소명</strong></td><td>문제/과제 발생</td><td>"자신만의 브랜드를 만들고 싶다는 갈망"</td></tr>
                  <tr><td><strong>3. 멘토의 등장</strong></td><td>해결책 제시 (당신의 브랜드)</td><td>"셀프 브랜딩 강의를 발견하다"</td></tr>
                  <tr><td><strong>4. 시련과 도전</strong></td><td>학습 과정의 어려움</td><td>"첫 블로그 글쓰기, SNS 시작의 두려움"</td></tr>
                  <tr><td><strong>5. 보상과 변화</strong></td><td>성공적인 결과</td><td>"퍼스널 브랜드로 프리랜서 전향 성공"</td></tr>
                </tbody>
              </table>
            </div>

            <h3>감정적 연결을 만드는 스토리텔링 기법</h3>
            <ul>
              <li><strong>공감 (Empathy)</strong>: 고객의 고통점(Pain Point)을 정확히 이해하고 표현</li>
              <li><strong>구체성 (Specificity)</strong>: "매출이 올랐다"가 아닌 "3개월 만에 매출 240% 성장"</li>
              <li><strong>갈등 (Conflict)</strong>: 문제와 해결의 대비로 긴장감 형성</li>
              <li><strong>진정성 (Authenticity)</strong>: 실패 경험도 솔직하게 공유</li>
              <li><strong>시각화 (Visualization)</strong>: 독자가 상상할 수 있는 생생한 묘사</li>
            </ul>

            <h2 data-aos="fade-up">5. 콘텐츠 유형 비교</h2>
            <p>
              효과적인 콘텐츠 마케팅을 위해서는 다양한 유형의 콘텐츠를 전략적으로 배합해야 합니다.
              각 유형의 특징과 활용법을 비교해보겠습니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>목적</th><th>예시</th><th>적합 채널</th><th>비율 권장</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>교육형</strong></td>
                  <td>지식/정보 제공, 전문성 증명</td>
                  <td>튜토리얼, How-to, 가이드, FAQ</td>
                  <td>블로그, YouTube, 뉴스레터</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td><strong>영감형</strong></td>
                  <td>동기부여, 가치관 공유</td>
                  <td>성공 사례, 명언, 비하인드 스토리</td>
                  <td>Instagram, LinkedIn, 블로그</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td><strong>엔터테인먼트형</strong></td>
                  <td>관심 유도, 바이럴, 브랜드 호감도</td>
                  <td>밈, 챌린지, 퀴즈, 재미있는 영상</td>
                  <td>TikTok, Instagram Reels, YouTube Shorts</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td><strong>전환형</strong></td>
                  <td>직접적인 행동 유도 (구매, 가입 등)</td>
                  <td>제품 리뷰, 비교 분석, 할인 안내, 후기</td>
                  <td>이메일, 랜딩 페이지, 블로그</td>
                  <td>15%</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>콘텐츠 배합의 황금 법칙</h3>
              <p>
                80/20 법칙을 적용하세요. 전체 콘텐츠의 80%는 교육, 영감, 엔터테인먼트 콘텐츠로
                가치를 제공하고, 20%만 직접적인 홍보/판매 콘텐츠로 구성합니다.
                항상 먼저 신뢰를 쌓고 나서 전환을 유도해야 합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 콘텐츠 캘린더</h2>
            <p>
              콘텐츠 캘린더는 콘텐츠 마케팅의 일관성과 효율성을 보장하는 필수 도구입니다.
              계획 없이 콘텐츠를 만들면 방향성을 잃고, 빈번한 공백 기간이 생기며,
              전략적 목표와 무관한 콘텐츠가 만들어지기 쉽습니다.
            </p>

            <h3>주간 콘텐츠 계획 예시</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>요일</th><th>채널</th><th>콘텐츠 유형</th><th>주제 예시</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>월요일</strong></td><td>블로그</td><td>교육형</td><td>심층 가이드 / 튜토리얼 게시</td></tr>
                <tr><td><strong>화요일</strong></td><td>Instagram</td><td>영감형</td><td>업계 인사이트 카드 뉴스</td></tr>
                <tr><td><strong>수요일</strong></td><td>뉴스레터</td><td>교육형 + 전환형</td><td>주간 큐레이션 / 노하우 공유</td></tr>
                <tr><td><strong>목요일</strong></td><td>LinkedIn</td><td>영감형</td><td>경험 공유 / 직무 인사이트</td></tr>
                <tr><td><strong>금요일</strong></td><td>YouTube / TikTok</td><td>엔터테인먼트형</td><td>비하인드 영상 / 트렌드 챌린지</td></tr>
              </tbody>
            </table>

            <h3>월간 계획 수립 프레임워크</h3>
            <div className="callout-box">
              <h4>월간 콘텐츠 캘린더 4단계</h4>
              <ul>
                <li><strong>1단계: 테마 설정</strong> — 해당 월의 핵심 테마 1~2개 선정 (예: 3월 = 신학기 브랜딩)</li>
                <li><strong>2단계: 키 콘텐츠 배치</strong> — 블로그 4개 + 뉴스레터 4회 + 영상 2개 등 핵심 콘텐츠 배치</li>
                <li><strong>3단계: 서브 콘텐츠 채우기</strong> — SNS 포스트, 스토리, 리포스팅 등으로 빈 칸 채우기</li>
                <li><strong>4단계: 리뷰 & 조정</strong> — 전월 성과 분석 기반으로 다음 달 계획 수정</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">7. 콘텐츠 리퍼포징 (Content Repurposing)</h2>
            <p>
              콘텐츠 리퍼포징은 하나의 콘텐츠를 다양한 형태와 채널에 맞게 재가공하여 활용하는 전략입니다.
              하나의 양질의 콘텐츠로 최대한의 효과를 뽑아내는 것이 핵심입니다.
            </p>

            <div className="callout-box">
              <h3>콘텐츠 리퍼포징 예시: 블로그 포스트 1편 활용법</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>원본</th><th>변환 형태</th><th>채널</th><th>제작 시간</th></tr>
                </thead>
                <tbody>
                  <tr><td rowSpan="7"><strong>블로그 포스트 1편</strong><br />(2,000자 이상)</td><td>핵심 요약 카드 뉴스 (5~10장)</td><td>Instagram</td><td>1시간</td></tr>
                  <tr><td>짧은 인사이트 포스트</td><td>LinkedIn</td><td>20분</td></tr>
                  <tr><td>해설 영상 (5~10분)</td><td>YouTube</td><td>2~3시간</td></tr>
                  <tr><td>숏폼 영상 (60초)</td><td>TikTok / Reels</td><td>30분</td></tr>
                  <tr><td>뉴스레터 요약본</td><td>이메일</td><td>30분</td></tr>
                  <tr><td>인포그래픽</td><td>Pinterest / 블로그</td><td>1~2시간</td></tr>
                  <tr><td>팟캐스트 에피소드 주제</td><td>Spotify / Apple Podcast</td><td>1시간</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>리퍼포징의 핵심 원칙</h3>
              <ul>
                <li><strong>형태만 바꾸기</strong>: 핵심 메시지는 동일하게 유지하되, 채널에 맞는 형태로 변환</li>
                <li><strong>최고 성과 콘텐츠 우선</strong>: 반응이 좋았던 콘텐츠를 우선적으로 리퍼포징</li>
                <li><strong>에버그린 콘텐츠</strong>: 시간이 지나도 가치가 유지되는 콘텐츠가 리퍼포징에 적합</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 4주간 콘텐츠 캘린더 작성</h3>
              <p>나의 브랜드를 위한 4주간의 콘텐츠 캘린더를 작성하세요. 다음 항목을 포함해야 합니다:</p>
              <ul>
                <li>월간 테마 설정 (1~2개)</li>
                <li>주간 콘텐츠 계획 (채널별 콘텐츠 유형, 주제, 발행일)</li>
                <li>콘텐츠 유형 배합 비율 (교육:영감:엔터테인먼트:전환)</li>
                <li>리퍼포징 계획 (핵심 콘텐츠 1개를 최소 3개 채널로 확장)</li>
                <li>KPI 설정 (각 채널별 목표 수치)</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: 블로그 포스트 1편 작성</h3>
              <p>다음 조건을 만족하는 블로그 포스트를 작성하세요:</p>
              <ul>
                <li>나의 전문 분야와 관련된 교육형 콘텐츠</li>
                <li>SEO 최적화된 제목 및 메타 설명</li>
                <li>2,000자 이상의 본문 (H2, H3 소제목 포함)</li>
                <li>스토리텔링 기법 최소 1가지 적용</li>
                <li>CTA(Call to Action) 포함</li>
                <li>이 포스트를 리퍼포징할 수 있는 3가지 방안 제시</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                8주차에서는 기업 홍보와 PR에 대해 배웁니다. 보도자료 작성법, 미디어 관계 구축,
                위기관리 커뮤니케이션 등 전문적인 PR 전략을 다룹니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/sns-marketing" className="lesson-nav-btn prev">&larr; 6주차: SNS 마케팅</Link>
              <Link to="/lessons/corporate-pr" className="lesson-nav-btn next">8주차: 기업 홍보 &amp; PR &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek7;

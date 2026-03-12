import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek6 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="6주차: SNS 마케팅 전략" path="/lessons/sns-marketing" />
      <section className="page-header">
        <div className="container">
          <h1>6주차: SNS 마케팅 전략</h1>
          <p>Instagram, YouTube, TikTok, LinkedIn — 플랫폼별 최적 전략을 수립합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. SNS 마케팅 트렌드</h2>
            <p>
              소셜 미디어는 끊임없이 변화합니다. 최신 트렌드를 이해하고 전략에 반영하는 것이
              SNS 마케팅 성공의 핵심입니다.
            </p>

            <div className="callout-box">
              <h3>2024~2025 주요 SNS 트렌드</h3>
              <ul>
                <li><strong>숏폼 콘텐츠의 지속적 성장</strong>: 릴스, 쇼츠, 틱톡 등 15~60초 영상이 가장 높은 도달률을 기록</li>
                <li><strong>AI 기반 콘텐츠 제작</strong>: ChatGPT, Midjourney 등을 활용한 콘텐츠 제작 효율화</li>
                <li><strong>소규모 크리에이터(마이크로 인플루언서)의 부상</strong>: 팔로워 1만~10만 규모의 크리에이터가 더 높은 참여율</li>
                <li><strong>소셜 커머스 확대</strong>: Instagram Shop, TikTok Shop 등 SNS 내 직접 구매 기능 활성화</li>
                <li><strong>커뮤니티 중심 마케팅</strong>: 단순 팔로워가 아닌 깊은 관계의 커뮤니티 형성 중시</li>
                <li><strong>진정성 (Authenticity)</strong>: 과도한 편집보다 자연스럽고 진실된 콘텐츠 선호</li>
                <li><strong>텍스트 기반 SNS 회귀</strong>: Threads, 블루스카이 등 텍스트 중심 플랫폼 등장</li>
                <li><strong>UGC (User Generated Content)</strong>: 브랜드보다 사용자가 만든 콘텐츠가 더 높은 신뢰</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. 인스타그램 마케팅</h2>
            <p>
              인스타그램은 비주얼 중심의 플랫폼으로, 브랜드 이미지 구축에 가장 효과적인 SNS 중 하나입니다.
              2024년 기준 국내 월간 활성 사용자(MAU)는 약 2,000만 명에 달합니다.
            </p>

            <h3>피드 전략</h3>
            <ul>
              <li><strong>그리드 디자인</strong>: 프로필 방문 시 일관된 비주얼 인상을 주도록 전체 그리드를 계획</li>
              <li><strong>캐러셀 포스트</strong>: 여러 장의 이미지/정보를 슬라이드로 제공 (높은 저장률)</li>
              <li><strong>캡션</strong>: 스토리텔링, 가치 전달, CTA 포함 (2,200자 활용)</li>
              <li><strong>최적 포스팅 시간</strong>: 타겟 오디언스의 활동 시간 분석 (일반적으로 오전 7~9시, 저녁 7~9시)</li>
            </ul>

            <h3>스토리 전략</h3>
            <ul>
              <li><strong>일상 공유</strong>: 비하인드 씬, 작업 과정, 일상 모습으로 친밀감 형성</li>
              <li><strong>인터랙티브 기능</strong>: 설문, 퀴즈, 질문 스티커로 참여 유도</li>
              <li><strong>하이라이트</strong>: 중요한 스토리를 카테고리별로 정리하여 프로필에 고정</li>
            </ul>

            <h3>릴스 전략</h3>
            <ul>
              <li><strong>후킹</strong>: 처음 1~3초에 시선을 사로잡는 강렬한 시작</li>
              <li><strong>트렌드 활용</strong>: 인기 오디오, 챌린지를 나의 브랜드에 맞게 변형</li>
              <li><strong>교육 콘텐츠</strong>: 팁, 방법, 비교 등 가치 있는 정보 제공</li>
              <li><strong>CTA</strong>: "저장해두세요", "팔로우하면 더 많은 팁" 등 행동 유도</li>
            </ul>

            <h3>해시태그 활용법</h3>
            <div className="callout-box">
              <h4>해시태그 전략</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>게시물당 개수</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>대형 (100만+)</strong></td>
                    <td>2~3개</td>
                    <td>#마케팅 #브랜딩 #자기계발</td>
                  </tr>
                  <tr>
                    <td><strong>중형 (1만~100만)</strong></td>
                    <td>5~8개</td>
                    <td>#퍼스널브랜딩 #SNS마케팅 #콘텐츠크리에이터</td>
                  </tr>
                  <tr>
                    <td><strong>소형 (1만 미만)</strong></td>
                    <td>3~5개</td>
                    <td>#셀프브랜딩팁 #마케터일상 #브랜딩수업</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드 고유</strong></td>
                    <td>1~2개</td>
                    <td>#나의브랜드이름 #나만의해시태그</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>총 15~20개</strong>의 해시태그를 혼합하여 사용하되,
                매 게시물마다 30% 이상은 변경하여 스팸으로 인식되지 않도록 합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">3. 유튜브 마케팅</h2>
            <p>
              유튜브는 세계 2위 검색엔진이자 가장 강력한 영상 플랫폼입니다.
              장기적으로 가장 높은 자산 가치를 만들 수 있는 채널이기도 합니다.
            </p>

            <h3>채널 기획</h3>
            <div className="callout-box">
              <h4>유튜브 채널 기획 체크리스트</h4>
              <ul>
                <li><strong>채널 컨셉</strong>: 어떤 주제를 다룰 것인가? (니치 선정)</li>
                <li><strong>타겟 시청자</strong>: 누가 이 채널을 시청할 것인가?</li>
                <li><strong>콘텐츠 카테고리</strong>: 3~5가지 콘텐츠 유형 정의</li>
                <li><strong>업로드 주기</strong>: 주 1~2회 일정한 스케줄 유지</li>
                <li><strong>채널 아트 & 프로필</strong>: 브랜드 아이덴티티와 일치하는 디자인</li>
                <li><strong>채널 소개 영상</strong>: 30~60초 내에 채널 가치를 전달</li>
              </ul>
            </div>

            <h3>썸네일 제작</h3>
            <p>썸네일은 클릭률(CTR)에 가장 큰 영향을 미치는 요소입니다.</p>
            <ul>
              <li><strong>얼굴 & 감정</strong>: 표정이 드러나는 사람 사진이 클릭률 30% 향상</li>
              <li><strong>텍스트</strong>: 3~5단어의 핵심 메시지, 큰 폰트</li>
              <li><strong>대비</strong>: 배경과 텍스트의 명확한 색상 대비</li>
              <li><strong>일관성</strong>: 채널만의 썸네일 템플릿으로 브랜드 인지</li>
              <li><strong>해상도</strong>: 1280x720px (16:9 비율)</li>
            </ul>

            <h3>유튜브 SEO</h3>
            <ul>
              <li><strong>제목</strong>: 핵심 키워드를 앞부분에 배치, 60자 이내</li>
              <li><strong>설명</strong>: 처음 2줄이 가장 중요, 키워드 포함, 관련 링크 추가</li>
              <li><strong>태그</strong>: 핵심 키워드 + 관련 키워드 10~15개</li>
              <li><strong>자막(CC)</strong>: 접근성 향상 + 검색 가능한 텍스트 데이터 추가</li>
              <li><strong>챕터</strong>: 타임스탬프를 추가하여 검색에서 노출 증가</li>
            </ul>

            <h3>수익화</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>수익원</th><th>요건</th><th>예상 수익</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>광고 수익 (AdSense)</strong></td>
                  <td>구독자 1,000명 + 시청 시간 4,000시간</td>
                  <td>CPM 1,000~5,000원 (주제별 상이)</td>
                </tr>
                <tr>
                  <td><strong>슈퍼챗/멤버십</strong></td>
                  <td>광고 수익 프로그램 가입 후</td>
                  <td>팬 규모에 비례</td>
                </tr>
                <tr>
                  <td><strong>브랜드 협업</strong></td>
                  <td>일정 구독자 확보 후</td>
                  <td>구독자 수 x 100~500원 (영상당)</td>
                </tr>
                <tr>
                  <td><strong>자체 상품/서비스</strong></td>
                  <td>채널 신뢰도 확보 후</td>
                  <td>강의, 컨설팅, 굿즈 등</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">4. 틱톡 마케팅</h2>
            <p>
              틱톡은 숏폼 콘텐츠의 선두 플랫폼으로, 특히 MZ세대에게 가장 영향력 있는 SNS입니다.
              알고리즘 기반 추천으로 팔로워가 적어도 바이럴이 가능하다는 것이 큰 장점입니다.
            </p>

            <h3>숏폼 콘텐츠 전략</h3>
            <ul>
              <li><strong>15~30초</strong>: 가장 높은 완주율과 추천 가능성</li>
              <li><strong>세로형(9:16)</strong>: 모바일 풀스크린 최적화</li>
              <li><strong>텍스트 오버레이</strong>: 소리 없이도 이해할 수 있는 자막</li>
              <li><strong>직접적인 시작</strong>: 인트로 없이 바로 핵심으로 진입</li>
              <li><strong>반복 시청 유도</strong>: 끝과 시작이 자연스럽게 이어지는 루프</li>
            </ul>

            <h3>알고리즘 이해</h3>
            <div className="callout-box">
              <h3>틱톡 알고리즘의 핵심 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>중요도</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>완주율</strong></td><td>최상</td><td>영상을 끝까지 시청한 비율. 가장 중요한 알고리즘 신호</td></tr>
                  <tr><td><strong>반복 시청</strong></td><td>상</td><td>같은 영상을 반복해서 본 횟수</td></tr>
                  <tr><td><strong>좋아요/댓글/공유</strong></td><td>상</td><td>사용자 참여도 (특히 공유가 가중치 높음)</td></tr>
                  <tr><td><strong>저장</strong></td><td>중</td><td>나중에 다시 보려고 저장한 횟수</td></tr>
                  <tr><td><strong>팔로우</strong></td><td>중</td><td>영상 시청 후 팔로우 전환율</td></tr>
                </tbody>
              </table>
            </div>

            <h3>바이럴 전략</h3>
            <ul>
              <li><strong>트렌드 빠른 반응</strong>: 인기 사운드, 챌린지가 뜨면 24시간 내 참여</li>
              <li><strong>교육 + 엔터테인먼트</strong>: "에듀테인먼트" 콘텐츠가 가장 높은 공유율</li>
              <li><strong>스토리텔링</strong>: 기승전결이 있는 짧은 이야기</li>
              <li><strong>듀엣/스티치</strong>: 인기 영상에 반응하는 콘텐츠로 도달률 확대</li>
            </ul>

            <h2 data-aos="fade-up">5. 링크드인 마케팅</h2>
            <p>
              링크드인은 전문가 네트워킹에 특화된 플랫폼으로, B2B 마케팅과 커리어 브랜딩에 가장 효과적입니다.
              국내에서도 사용자가 빠르게 증가하고 있으며, 특히 전문 분야의 개인 브랜딩에 필수적인 채널입니다.
            </p>

            <h3>프로페셔널 네트워킹</h3>
            <ul>
              <li><strong>프로필 최적화</strong>: 전문적인 프로필 사진, 매력적인 헤드라인, 상세한 경력 기술</li>
              <li><strong>추천사</strong>: 동료, 상사, 클라이언트로부터 추천 받기</li>
              <li><strong>스킬 & 인증</strong>: 핵심 역량 인증 받기</li>
              <li><strong>활발한 네트워킹</strong>: 의미 있는 1촌 요청과 메시지</li>
            </ul>

            <h3>링크드인 콘텐츠 전략</h3>
            <ul>
              <li><strong>텍스트 포스트</strong>: 인사이트 공유, 경험담, 업계 분석 (1,300자 이내 권장)</li>
              <li><strong>아티클</strong>: 심층적인 전문 콘텐츠 (블로그 대체 가능)</li>
              <li><strong>문서 슬라이드</strong>: PDF 형태의 캐러셀 콘텐츠 (높은 참여율)</li>
              <li><strong>비디오</strong>: 업계 인사이트, 팁 공유 (3분 이내)</li>
            </ul>

            <div className="info-box tip">
              <h3>링크드인 팁</h3>
              <p>
                링크드인에서는 <strong>"가치를 먼저 제공"</strong>하는 것이 핵심입니다.
                자기 홍보보다 업계 인사이트, 실무 팁, 실패와 성공 경험을 공유하면
                자연스럽게 전문가로 인식됩니다. 일주일에 최소 3회 이상 포스팅을 권장합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 플랫폼별 최적 콘텐츠 포맷</h2>
            <p>각 플랫폼에 최적화된 콘텐츠 사양을 정리한 비교 테이블입니다.</p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>Instagram</th>
                  <th>YouTube</th>
                  <th>TikTok</th>
                  <th>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>피드 이미지</strong></td>
                  <td>1080x1080px (1:1) 또는 1080x1350px (4:5)</td>
                  <td>-</td>
                  <td>-</td>
                  <td>1200x627px</td>
                </tr>
                <tr>
                  <td><strong>영상 비율</strong></td>
                  <td>9:16 (릴스), 1:1 (피드)</td>
                  <td>16:9 (가로)</td>
                  <td>9:16 (세로)</td>
                  <td>16:9 또는 1:1</td>
                </tr>
                <tr>
                  <td><strong>최적 영상 길이</strong></td>
                  <td>릴스: 15~30초</td>
                  <td>8~15분 (롱폼) / 60초 (쇼츠)</td>
                  <td>15~60초</td>
                  <td>30초~3분</td>
                </tr>
                <tr>
                  <td><strong>해시태그 수</strong></td>
                  <td>15~20개</td>
                  <td>태그 10~15개</td>
                  <td>3~5개</td>
                  <td>3~5개</td>
                </tr>
                <tr>
                  <td><strong>최적 포스팅 시간</strong></td>
                  <td>오전 7~9시, 저녁 7~9시</td>
                  <td>오후 2~4시, 저녁 8~10시</td>
                  <td>오후 12~1시, 저녁 7~9시</td>
                  <td>오전 8~10시 (화~목)</td>
                </tr>
                <tr>
                  <td><strong>주요 지표</strong></td>
                  <td>저장, 공유, 도달</td>
                  <td>시청 시간, CTR, 구독 전환</td>
                  <td>완주율, 공유, 댓글</td>
                  <td>인상, 참여, 프로필 방문</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">7. 소셜 미디어 캘린더</h2>
            <p>
              소셜 미디어 캘린더는 콘텐츠를 체계적으로 계획하고 일관되게 발행하기 위한 도구입니다.
              즉흥적인 포스팅보다 사전에 계획된 콘텐츠가 훨씬 높은 성과를 보입니다.
            </p>

            <div className="callout-box">
              <h3>콘텐츠 캘린더 작성법</h3>
              <ol>
                <li><strong>콘텐츠 카테고리 정의</strong>: 교육(40%), 영감/동기부여(20%), 비하인드(20%), 프로모션(10%), 트렌드(10%)</li>
                <li><strong>주간 테마 설정</strong>: 월(업계 트렌드), 수(팁/방법), 금(사례/후기) 등</li>
                <li><strong>포스팅 빈도 결정</strong>: 플랫폼별 주 3~5회 (질 &gt; 양)</li>
                <li><strong>사전 제작 & 예약</strong>: 1~2주 분량을 미리 제작하여 예약 포스팅</li>
                <li><strong>성과 분석 & 개선</strong>: 매주 성과를 분석하고 다음 주 계획에 반영</li>
              </ol>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>추천 도구:</strong> Notion, Google Sheets, Later, Buffer, Hootsuite
              </p>
            </div>

            <div className="info-box warning">
              <h3>콘텐츠 캘린더 주의사항</h3>
              <p>
                캘린더를 너무 엄격하게 따르려고 하면 오히려 부담이 됩니다.
                <strong>80/20 규칙</strong>을 적용하세요: 80%는 계획된 콘텐츠, 20%는 실시간 트렌드나
                즉흥 콘텐츠를 위한 여유를 남겨두세요. 또한, 처음부터 매일 포스팅하려 하지 말고
                주 3회부터 시작하여 점진적으로 늘리는 것이 지속 가능합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제: 1주일 SNS 콘텐츠 캘린더 작성</h2>
            <div className="exercise-box">
              <h3>과제: 7일 콘텐츠 캘린더</h3>
              <p>나의 주요 SNS 플랫폼 1개를 선택하고, 7일간의 콘텐츠 캘린더를 작성하세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>요일</th>
                    <th>콘텐츠 유형</th>
                    <th>주제/내용</th>
                    <th>포맷</th>
                    <th>해시태그</th>
                    <th>포스팅 시간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>월</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>화</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>수</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>목</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>금</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>토</td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>일</td><td></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                <strong>추가 요건:</strong>
              </p>
              <ul>
                <li>최소 5일은 콘텐츠를 발행할 것</li>
                <li>교육, 영감, 비하인드 콘텐츠를 골고루 포함할 것</li>
                <li>각 콘텐츠에 대한 간략한 캡션 초안도 함께 작성할 것</li>
                <li>사용할 해시태그 세트를 미리 준비할 것</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                7주차에서는 콘텐츠 마케팅을 심화 학습합니다. 블로그, 뉴스레터, 스토리텔링 기법을 배우고,
                지속 가능한 콘텐츠 전략을 수립합니다. SNS를 넘어서 더 깊이 있는 콘텐츠를
                제작하는 방법을 알아봅니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/digital-marketing" className="lesson-nav-btn prev">&larr; 5주차: 디지털 마케팅</Link>
              <Link to="/lessons/content-marketing" className="lesson-nav-btn next">7주차: 콘텐츠 마케팅 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek6;

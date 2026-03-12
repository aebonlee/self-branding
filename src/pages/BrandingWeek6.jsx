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
          <p>플랫폼별 특성을 이해하고, 알고리즘을 활용한 효과적인 소셜 미디어 전략을 수립합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 플랫폼별 특성 비교</h2>
            <p>
              소셜 미디어 마케팅의 첫 번째 단계는 각 플랫폼의 고유한 특성을 이해하는 것입니다.
              모든 플랫폼이 같지 않으며, 각 플랫폼마다 주 사용자층, 콘텐츠 형식, 알고리즘,
              그리고 소통 방식이 크게 다릅니다. 올바른 플랫폼을 선택하는 것이 SNS 마케팅 성공의 절반입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>주 사용자층</th><th>핵심 콘텐츠 형식</th><th>강점</th><th>한국 MAU</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Instagram</strong></td>
                  <td>20~30대 여성 중심, MZ세대</td>
                  <td>피드, 릴스, 스토리, 카루셀</td>
                  <td>비주얼 브랜딩, 라이프스타일, 쇼핑</td>
                  <td>약 2,000만명</td>
                </tr>
                <tr>
                  <td><strong>YouTube</strong></td>
                  <td>전 연령대 (10~50대)</td>
                  <td>롱폼 영상, Shorts, 라이브</td>
                  <td>교육 콘텐츠, 검색 유입, 광고 수익</td>
                  <td>약 4,500만명</td>
                </tr>
                <tr>
                  <td><strong>TikTok</strong></td>
                  <td>10~20대 중심, Z세대</td>
                  <td>숏폼 영상 (15초~3분)</td>
                  <td>바이럴 가능성, 트렌드 선도, 엔터테인먼트</td>
                  <td>약 800만명</td>
                </tr>
                <tr>
                  <td><strong>LinkedIn</strong></td>
                  <td>30~50대 직장인, 비즈니스</td>
                  <td>텍스트 포스트, 아티클, 뉴스레터</td>
                  <td>B2B 마케팅, 전문성 증명, 네트워킹</td>
                  <td>약 400만명</td>
                </tr>
                <tr>
                  <td><strong>X (Twitter)</strong></td>
                  <td>20~40대, IT/미디어 종사자</td>
                  <td>텍스트 (280자), 이미지, 스레드</td>
                  <td>실시간 소통, 오피니언 리더십, 속보</td>
                  <td>약 900만명</td>
                </tr>
                <tr>
                  <td><strong>네이버 블로그</strong></td>
                  <td>전 연령대 (한국 특화)</td>
                  <td>장문 블로그 포스트, 사진</td>
                  <td>네이버 검색 노출, SEO, 신뢰도</td>
                  <td>약 3,000만명 (네이버)</td>
                </tr>
              </tbody>
            </table>

            <div className="section-card" data-aos="fade-up">
              <h3>플랫폼별 콘텐츠 최적 사양</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>플랫폼</th><th>이미지 크기</th><th>영상 길이</th><th>최적 게시 시간</th><th>주간 권장 빈도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Instagram 피드</strong></td>
                    <td>1080x1080px (1:1) 또는 1080x1350px (4:5)</td>
                    <td>릴스: 30~90초</td>
                    <td>평일 오전 7~9시, 점심 12~1시, 저녁 7~9시</td>
                    <td>피드 3~5회 + 스토리 매일 + 릴스 2~3회</td>
                  </tr>
                  <tr>
                    <td><strong>YouTube</strong></td>
                    <td>썸네일: 1280x720px (16:9)</td>
                    <td>일반: 8~15분 / Shorts: 60초 이내</td>
                    <td>주말 오전 10~12시, 평일 오후 2~4시</td>
                    <td>롱폼 1~2회 + Shorts 2~3회</td>
                  </tr>
                  <tr>
                    <td><strong>TikTok</strong></td>
                    <td>1080x1920px (9:16)</td>
                    <td>15~60초 (최적: 21~34초)</td>
                    <td>오전 7~9시, 점심 12~1시, 저녁 7~11시</td>
                    <td>최소 3~5회 (매일 권장)</td>
                  </tr>
                  <tr>
                    <td><strong>LinkedIn</strong></td>
                    <td>1200x627px (1.91:1)</td>
                    <td>텍스트 중심 (1,300자 이내)</td>
                    <td>화~목 오전 8~10시, 점심 12시</td>
                    <td>3~5회</td>
                  </tr>
                  <tr>
                    <td><strong>X (Twitter)</strong></td>
                    <td>1200x675px (16:9)</td>
                    <td>텍스트 280자 이내</td>
                    <td>평일 오전 8~10시, 점심 12~1시</td>
                    <td>매일 1~5회</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">2. 플랫폼 선택 전략 (타겟 오디언스 매칭)</h2>
            <p>
              모든 플랫폼을 동시에 운영하는 것은 개인 브랜드에게 비현실적입니다.
              타겟 오디언스가 가장 활발하게 활동하는 <strong>1~2개의 주력 플랫폼</strong>을 선택하고,
              나머지는 보조적으로 운영하는 전략이 효과적입니다.
            </p>

            <div className="callout-box">
              <h3>플랫폼 선택 의사결정 매트릭스</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>판단 기준</th><th>질문</th><th>중요도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>타겟 존재 여부</strong></td>
                    <td>나의 타겟 오디언스가 이 플랫폼을 실제로 사용하는가?</td>
                    <td>최상</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 적합성</strong></td>
                    <td>나의 콘텐츠 유형(영상/이미지/텍스트)이 이 플랫폼에 적합한가?</td>
                    <td>상</td>
                  </tr>
                  <tr>
                    <td><strong>제작 역량</strong></td>
                    <td>해당 플랫폼의 콘텐츠를 꾸준히 만들 역량과 시간이 있는가?</td>
                    <td>상</td>
                  </tr>
                  <tr>
                    <td><strong>경쟁 환경</strong></td>
                    <td>이 플랫폼에서 나의 분야 경쟁이 어느 정도인가?</td>
                    <td>중</td>
                  </tr>
                  <tr>
                    <td><strong>성장 가능성</strong></td>
                    <td>플랫폼 자체의 성장세와 미래 전망은 어떠한가?</td>
                    <td>중</td>
                  </tr>
                  <tr>
                    <td><strong>수익화 가능성</strong></td>
                    <td>이 플랫폼에서 직접적인 수익 창출이 가능한가?</td>
                    <td>중</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>브랜드 유형별 추천 플랫폼</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>브랜드 유형</th><th>주력 플랫폼</th><th>보조 플랫폼</th></tr>
                </thead>
                <tbody>
                  <tr><td>비주얼 중심 (디자인, 패션, 뷰티, 요리)</td><td>Instagram + Pinterest</td><td>YouTube, TikTok</td></tr>
                  <tr><td>교육/지식 (강사, 컨설턴트, 코치)</td><td>YouTube + 블로그</td><td>LinkedIn, Instagram</td></tr>
                  <tr><td>B2B/전문직 (개발자, 기획자, 마케터)</td><td>LinkedIn + 블로그</td><td>X (Twitter), YouTube</td></tr>
                  <tr><td>엔터테인먼트 (크리에이터, 아티스트)</td><td>YouTube + TikTok</td><td>Instagram, X (Twitter)</td></tr>
                  <tr><td>로컬 비즈니스 (카페, 레스토랑, 샵)</td><td>Instagram + 네이버 블로그</td><td>YouTube, 카카오</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">3. 콘텐츠 전략 (플랫폼별 최적 포맷, 게시 시간)</h2>
            <p>
              SNS 콘텐츠 전략은 "무엇을, 어떤 형태로, 언제, 얼마나 자주" 게시할지를 계획하는 것입니다.
              무작정 콘텐츠를 만들기보다 명확한 전략에 따라 일관되게 실행하는 것이 핵심입니다.
            </p>

            <h3>콘텐츠 유형별 비율 (4-1-1 법칙 변형)</h3>
            <div className="callout-box">
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>비율</th><th>목적</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>교육형 (Educate)</strong></td>
                    <td>40%</td>
                    <td>전문성 증명, 가치 제공</td>
                    <td>팁, 튜토리얼, How-to, 업계 인사이트, 데이터 분석</td>
                  </tr>
                  <tr>
                    <td><strong>영감형 (Inspire)</strong></td>
                    <td>25%</td>
                    <td>감정적 연결, 동기부여</td>
                    <td>성공 사례, 비하인드 스토리, 개인 경험, 명언</td>
                  </tr>
                  <tr>
                    <td><strong>엔터테인먼트형 (Entertain)</strong></td>
                    <td>20%</td>
                    <td>참여도 증가, 바이럴</td>
                    <td>밈, 트렌드 챌린지, 퀴즈, 재미있는 비교, Q&amp;A</td>
                  </tr>
                  <tr>
                    <td><strong>전환형 (Convert)</strong></td>
                    <td>15%</td>
                    <td>직접적 행동 유도</td>
                    <td>제품 소개, 할인 안내, 후기 공유, 서비스 론칭</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>플랫폼별 최적 콘텐츠 포맷</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>Instagram 콘텐츠 전략</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>포맷</th><th>목적</th><th>제작 팁</th><th>도달 효과</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>릴스 (Reels)</strong></td>
                    <td>신규 오디언스 유입, 바이럴</td>
                    <td>처음 3초에 후킹, 트렌드 사운드 활용, 자막 필수</td>
                    <td>매우 높음 (알고리즘 우대)</td>
                  </tr>
                  <tr>
                    <td><strong>카루셀 (Carousel)</strong></td>
                    <td>정보 전달, 저장 유도, 체류시간</td>
                    <td>10장 모두 활용, 첫 장에 후킹, 마지막 장에 CTA</td>
                    <td>높음 (저장/공유 유도에 최적)</td>
                  </tr>
                  <tr>
                    <td><strong>스토리 (Stories)</strong></td>
                    <td>일상 공유, 친밀감, 설문/투표</td>
                    <td>인터랙티브 스티커 활용, 매일 3~7개</td>
                    <td>중간 (기존 팔로워 대상)</td>
                  </tr>
                  <tr>
                    <td><strong>피드 이미지</strong></td>
                    <td>브랜드 이미지, 포트폴리오</td>
                    <td>통일된 톤앤매너, 브랜드 컬러 적용</td>
                    <td>중간</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h4>YouTube 콘텐츠 전략</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>포맷</th><th>목적</th><th>제작 팁</th><th>성과 지표</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>롱폼 (8~15분)</strong></td>
                    <td>심층 교육, 검색 유입, 광고 수익</td>
                    <td>처음 30초 후킹, 챕터 나누기, 엔드스크린 활용</td>
                    <td>시청 시간, 구독 전환율</td>
                  </tr>
                  <tr>
                    <td><strong>Shorts (60초)</strong></td>
                    <td>빠른 도달, 구독자 유입</td>
                    <td>세로형, 빠른 편집, 핵심 한 가지만 전달</td>
                    <td>조회수, 좋아요, 프로필 방문</td>
                  </tr>
                  <tr>
                    <td><strong>라이브</strong></td>
                    <td>실시간 소통, 커뮤니티 강화</td>
                    <td>사전 공지, 고정 시간대, 슈퍼챗 활용</td>
                    <td>동시 시청자, 채팅 참여</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>SNS 콘텐츠 제작 시 주의사항</h3>
              <ul>
                <li><strong>양보다 질</strong>: 매일 저품질 콘텐츠 5개보다 주 3회 고품질 콘텐츠가 더 효과적입니다</li>
                <li><strong>일관성</strong>: 최소 3개월 이상 꾸준히 게시해야 성과가 나타납니다. 중간에 포기하면 리셋됩니다</li>
                <li><strong>첫 1시간</strong>: 게시 후 1시간 내 참여도(좋아요, 댓글, 저장)가 알고리즘 노출을 결정합니다</li>
                <li><strong>CTA 포함</strong>: 모든 게시물에 "저장해두세요", "댓글로 의견 남겨주세요" 같은 행동 유도 문구를 넣으세요</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 해시태그 전략과 알고리즘 이해</h2>
            <p>
              해시태그는 SNS에서 콘텐츠의 발견 가능성(Discoverability)을 높이는 핵심 도구입니다.
              적절한 해시태그 전략은 팔로워가 아닌 사람들에게도 콘텐츠가 노출될 수 있게 합니다.
              동시에 각 플랫폼의 알고리즘을 이해해야 노출을 극대화할 수 있습니다.
            </p>

            <h3>해시태그 3단계 전략</h3>
            <div className="callout-box">
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>게시물 수 기준</th><th>비율</th><th>목적</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>대형 해시태그</strong></td>
                    <td>100만+ 게시물</td>
                    <td>20%</td>
                    <td>넓은 노출 (경쟁 치열)</td>
                    <td>#마케팅, #브랜딩, #자기계발</td>
                  </tr>
                  <tr>
                    <td><strong>중형 해시태그</strong></td>
                    <td>1만~100만 게시물</td>
                    <td>50%</td>
                    <td>적절한 경쟁, 상위 노출 가능</td>
                    <td>#퍼스널브랜딩, #SNS마케팅팁</td>
                  </tr>
                  <tr>
                    <td><strong>소형/니치 해시태그</strong></td>
                    <td>1만 미만 게시물</td>
                    <td>30%</td>
                    <td>정확한 타겟팅, 높은 참여율</td>
                    <td>#마케터의하루, #브랜딩공부</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                <strong>Instagram:</strong> 게시물당 3~5개의 핵심 해시태그 사용을 권장합니다 (최대 30개이나 너무 많으면 스팸으로 인식).<br />
                <strong>TikTok:</strong> 3~5개의 관련 해시태그 + 트렌드 해시태그 조합.<br />
                <strong>LinkedIn:</strong> 3~5개의 업계 관련 해시태그.<br />
                <strong>브랜드 고유 해시태그:</strong> 나만의 고유 해시태그를 1~2개 만들어 모든 게시물에 포함하세요.
              </p>
            </div>

            <h3>플랫폼별 알고리즘 핵심 원리</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>알고리즘 핵심 요소</th><th>노출 극대화 전략</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Instagram</strong></td>
                  <td>참여도(저장, 공유 &gt; 댓글 &gt; 좋아요), 관계, 시의성, 관심사</td>
                  <td>저장/공유 유도, 댓글 대화, 릴스 활용, 게시 직후 30분 내 참여 유도</td>
                </tr>
                <tr>
                  <td><strong>YouTube</strong></td>
                  <td>시청 시간, CTR(썸네일/제목), 참여도, 세션 시간</td>
                  <td>매력적인 썸네일, 처음 30초 후킹, 끝까지 시청 유도, 댓글 유도</td>
                </tr>
                <tr>
                  <td><strong>TikTok</strong></td>
                  <td>시청 완료율, 반복 시청, 공유, 댓글, 프로필 방문</td>
                  <td>15~30초 영상, 루프 구조, 트렌드 사운드, 강렬한 오프닝</td>
                </tr>
                <tr>
                  <td><strong>LinkedIn</strong></td>
                  <td>초기 1시간 참여도, 체류시간(Dwell Time), 댓글 품질</td>
                  <td>후킹 첫 줄, "더 보기" 유도, 진정성 있는 개인 경험, 질문으로 마무리</td>
                </tr>
                <tr>
                  <td><strong>X (Twitter)</strong></td>
                  <td>리트윗, 답글, 인용 트윗, 북마크, 체류시간</td>
                  <td>논쟁적 의견, 스레드 활용, 시의성 있는 주제, 이미지 첨부</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>알고리즘 공통 원칙</h3>
              <p>
                모든 플랫폼의 알고리즘은 결국 <strong>"사용자가 플랫폼에 오래 머물게 하는 콘텐츠"</strong>를
                우대합니다. 따라서 클릭 유도(후킹), 체류시간 증가(가치 제공), 상호작용 유도(질문, 투표, 댓글)가
                모든 플랫폼에서 공통적으로 중요합니다.
                또한, 각 플랫폼이 새로 출시한 기능(예: 릴스, Shorts, Threads)을 빠르게 활용하면
                알고리즘 부스트 혜택을 받을 수 있습니다.
              </p>
            </div>

            <h2 data-aos="fade-up">5. 인플루언서 마케팅 기초</h2>
            <p>
              인플루언서 마케팅은 SNS에서 영향력을 가진 개인(인플루언서)과 협업하여
              브랜드를 홍보하는 전략입니다. 전통적 광고보다 신뢰도가 높고,
              타겟 오디언스에게 자연스럽게 도달할 수 있습니다.
            </p>

            <h3>인플루언서 유형 분류</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>팔로워 수</th><th>참여율</th><th>비용</th><th>적합한 경우</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>메가 인플루언서</strong></td>
                  <td>100만+ 명</td>
                  <td>1~3%</td>
                  <td>수천만원~</td>
                  <td>대규모 인지도 캠페인, 대기업</td>
                </tr>
                <tr>
                  <td><strong>매크로 인플루언서</strong></td>
                  <td>10만~100만명</td>
                  <td>3~5%</td>
                  <td>수백만원</td>
                  <td>브랜드 인지도, 중견기업</td>
                </tr>
                <tr>
                  <td><strong>마이크로 인플루언서</strong></td>
                  <td>1만~10만명</td>
                  <td>5~10%</td>
                  <td>수십만원</td>
                  <td>타겟 마케팅, 개인 브랜드에 추천</td>
                </tr>
                <tr>
                  <td><strong>나노 인플루언서</strong></td>
                  <td>1,000~1만명</td>
                  <td>10~20%</td>
                  <td>제품 제공 또는 소액</td>
                  <td>니치 마케팅, 스타트업, 로컬 비즈니스</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>인플루언서 협업 체크리스트</h3>
              <ul>
                <li><strong>타겟 일치</strong>: 인플루언서의 팔로워가 나의 타겟 오디언스와 일치하는가?</li>
                <li><strong>진정성</strong>: 인플루언서가 실제로 나의 제품/서비스에 관심이 있는가?</li>
                <li><strong>참여율</strong>: 팔로워 수보다 참여율(좋아요+댓글/팔로워)이 더 중요합니다</li>
                <li><strong>콘텐츠 품질</strong>: 기존 콘텐츠의 퀄리티와 톤이 나의 브랜드에 맞는가?</li>
                <li><strong>가짜 팔로워</strong>: 팔로워 구매 여부를 HypeAuditor, Social Blade 등으로 검증하세요</li>
                <li><strong>명확한 계약</strong>: 콘텐츠 수, 형식, 일정, 보상, 사용권을 서면으로 합의하세요</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>개인 브랜드를 위한 인플루언서 협업 팁</h3>
              <p>
                예산이 제한된 개인 브랜드라면 <strong>마이크로/나노 인플루언서</strong>와의 협업을 추천합니다.
                팔로워는 적지만 참여율이 높고, 비용이 저렴하며, 진정성 있는 추천이 가능합니다.
                또한, 상호 콘텐츠 교환(크로스 프로모션)이나 공동 라이브 방송 같은
                <strong> 비용 없는 협업</strong> 방식도 적극 활용하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 소셜 커머스와 라이브 쇼핑</h2>
            <p>
              소셜 커머스(Social Commerce)는 SNS 플랫폼 내에서 직접 구매가 이루어지는 형태의 전자상거래입니다.
              별도의 쇼핑몰 방문 없이 SNS에서 발견부터 구매까지 원스톱으로 진행되는 것이 특징입니다.
              특히 라이브 쇼핑은 실시간 소통과 즉각적 구매를 결합한 강력한 판매 도구로 부상하고 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>소셜 커머스 기능</th><th>특징</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Instagram Shop</strong></td>
                  <td>제품 태그, 쇼핑 탭, 컬렉션</td>
                  <td>피드/릴스/스토리에서 바로 제품 태그, 인앱 결제 지원</td>
                </tr>
                <tr>
                  <td><strong>네이버 쇼핑 라이브</strong></td>
                  <td>실시간 방송 + 쇼핑</td>
                  <td>네이버 쇼핑과 연동, 댓글 실시간 소통, 쿠폰 발급</td>
                </tr>
                <tr>
                  <td><strong>카카오 쇼핑</strong></td>
                  <td>톡스토어, 선물하기</td>
                  <td>카카오톡 기반 구매, 선물하기 기능으로 바이럴</td>
                </tr>
                <tr>
                  <td><strong>TikTok Shop</strong></td>
                  <td>영상 내 제품 링크, 라이브 쇼핑</td>
                  <td>숏폼 영상에서 바로 구매, 글로벌 확장 중</td>
                </tr>
              </tbody>
            </table>

            <div className="section-card" data-aos="fade-up">
              <h3>라이브 쇼핑 성공 전략</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>활동</th><th>팁</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>방송 전 (사전 홍보)</strong></td>
                    <td>SNS 예고, 스토리 카운트다운, 알림 설정 유도</td>
                    <td>방송 3일 전부터 하루 1회 이상 예고, 라이브 전용 혜택 예고</td>
                  </tr>
                  <tr>
                    <td><strong>방송 중 (진행)</strong></td>
                    <td>제품 시연, 실시간 Q&amp;A, 한정 할인, 추첨 이벤트</td>
                    <td>처음 5분 내 핵심 혜택 공개, 시청자 이름 호명, 긴급성 부여</td>
                  </tr>
                  <tr>
                    <td><strong>방송 후 (후속)</strong></td>
                    <td>하이라이트 편집, 리플레이 공유, 미구매자 리마케팅</td>
                    <td>방송 핵심 장면을 릴스/숏츠로 재가공, 구매자 후기 수집</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">7. 커뮤니티 관리와 위기 대응</h2>
            <p>
              SNS 마케팅의 성공은 콘텐츠 발행뿐 아니라 <strong>커뮤니티 관리</strong>에 달려 있습니다.
              팔로워와의 지속적인 소통, 부정적 반응에 대한 적절한 대응,
              그리고 위기 상황에서의 빠른 커뮤니케이션이 브랜드 신뢰도를 결정합니다.
            </p>

            <h3>커뮤니티 관리 원칙</h3>
            <div className="callout-box">
              <ol>
                <li><strong>빠른 응답</strong>: 댓글과 DM에 24시간 이내 (이상적으로 1시간 이내) 답변하세요</li>
                <li><strong>진정성 있는 소통</strong>: 복사-붙여넣기 답변 대신 개인화된 응답을 제공하세요</li>
                <li><strong>부정 댓글 관리</strong>: 삭제보다 정중한 답변이 더 효과적입니다 (단, 악의적 스팸은 삭제/차단)</li>
                <li><strong>팬 인정</strong>: 적극적인 팔로워를 인정하고 감사를 표현하세요 (리포스트, 답글, 멘션)</li>
                <li><strong>UGC 활용</strong>: 팔로워가 만든 콘텐츠(User-Generated Content)를 공유하여 소속감을 높이세요</li>
              </ol>
            </div>

            <h3>SNS 위기 대응 프로세스</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>시간</th><th>행동</th><th>주의사항</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 감지</strong></td>
                  <td>즉시</td>
                  <td>부정적 반응 모니터링 (멘션, 해시태그, 키워드 알림 설정)</td>
                  <td>감정적으로 반응하지 않기</td>
                </tr>
                <tr>
                  <td><strong>2. 평가</strong></td>
                  <td>1시간 이내</td>
                  <td>위기의 심각성 판단 (일시적 불만 vs 확산 가능한 이슈)</td>
                  <td>과소평가하지 않기</td>
                </tr>
                <tr>
                  <td><strong>3. 초기 대응</strong></td>
                  <td>2~4시간 이내</td>
                  <td>공식 입장 발표 (사실 인정, 사과, 해결 계획)</td>
                  <td>변명하거나 책임 회피하지 않기</td>
                </tr>
                <tr>
                  <td><strong>4. 해결</strong></td>
                  <td>24~48시간</td>
                  <td>구체적 개선 조치 실행 및 결과 공유</td>
                  <td>약속한 것은 반드시 이행하기</td>
                </tr>
                <tr>
                  <td><strong>5. 사후 관리</strong></td>
                  <td>1~2주</td>
                  <td>지속적 모니터링, 재발 방지책 마련, 내부 프로세스 개선</td>
                  <td>같은 실수 반복하지 않기</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box warning">
              <h3>위기 대응 시 절대 하지 말아야 할 것</h3>
              <ul>
                <li><strong>삭제 후 침묵</strong>: 부정 댓글이나 게시물을 삭제하고 아무 대응을 하지 않으면 더 큰 반발을 초래합니다</li>
                <li><strong>감정적 대응</strong>: 화가 나더라도 감정적인 답변은 상황을 악화시킵니다. 최소 30분 냉각 후 대응하세요</li>
                <li><strong>거짓 해명</strong>: 사실과 다른 해명은 나중에 밝혀지면 치명적입니다. 투명하게 소통하세요</li>
                <li><strong>책임 전가</strong>: "담당자의 실수", "외주 업체 문제" 등 책임을 돌리는 것은 더 큰 반감을 유발합니다</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>위기를 기회로 바꾸는 원칙</h3>
              <p>
                위기에 진정성 있게 대응하면 오히려 브랜드 신뢰도가 높아질 수 있습니다.
                빠른 인정, 진솔한 사과, 구체적 개선 조치, 그리고 투명한 경과 공유가
                핵심입니다. "실수는 누구나 하지만, 대응은 브랜드의 진짜 모습을 보여준다"는 것을
                기억하세요. 위기 대응 매뉴얼을 미리 준비해두면 실제 상황에서 더 빠르고 효과적으로 대응할 수 있습니다.
              </p>
            </div>

            <h2 data-aos="fade-up">8. 실습: SNS 콘텐츠 캘린더 만들기</h2>

            <div className="exercise-box">
              <h3>과제 1: 플랫폼 선택 &amp; 프로필 최적화</h3>
              <p>아래 의사결정 매트릭스를 활용하여 나의 주력 플랫폼 1~2개를 선택하세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>판단 기준</th><th>플랫폼 A</th><th>플랫폼 B</th><th>플랫폼 C</th></tr>
                </thead>
                <tbody>
                  <tr><td>타겟 존재 여부 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td>콘텐츠 적합성 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td>제작 역량 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td>경쟁 환경 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td>성장 가능성 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td>수익화 가능성 (10점)</td><td></td><td></td><td></td></tr>
                  <tr><td><strong>총점</strong></td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                선정한 플랫폼의 프로필(자기소개, 프로필 사진, 링크)을 브랜드 가이드라인에 맞춰 최적화하세요.
              </p>
            </div>

            <div className="exercise-box">
              <h3>과제 2: 2주간 SNS 콘텐츠 캘린더 작성</h3>
              <p>선정한 주력 플랫폼을 기반으로 2주(14일)간의 콘텐츠 캘린더를 작성하세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr><th>날짜</th><th>요일</th><th>플랫폼</th><th>콘텐츠 유형</th><th>주제/제목</th><th>포맷</th><th>해시태그 (5개)</th><th>게시 시간</th></tr>
                </thead>
                <tbody>
                  <tr><td>예시</td><td>월</td><td>Instagram</td><td>교육형</td><td>브랜딩 시작 5단계</td><td>카루셀 10장</td><td>#퍼스널브랜딩 #브랜딩팁 ...</td><td>오전 8시</td></tr>
                  <tr><td>1일차</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>2일차</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>3일차</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td>14일차</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>
                <strong>포함 조건:</strong>
              </p>
              <ul>
                <li>교육형 40%, 영감형 25%, 엔터테인먼트형 20%, 전환형 15% 비율 준수</li>
                <li>각 게시물에 5개의 해시태그 (대형 1 + 중형 2~3 + 소형 1~2)</li>
                <li>최소 2개의 릴스/숏폼 영상 기획 포함</li>
                <li>1개 이상의 인터랙티브 콘텐츠 (설문, Q&amp;A, 퀴즈) 포함</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 3: 콘텐츠 1개 실제 제작 &amp; 게시</h3>
              <p>
                캘린더에서 교육형 콘텐츠 1개를 선택하여 실제로 제작하고 게시하세요.
                게시 후 24시간 동안의 성과(도달, 좋아요, 댓글, 저장, 공유)를 기록하고
                어떤 점을 개선할 수 있는지 분석 리포트를 작성하세요.
              </p>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>결과</th><th>업계 평균 대비</th><th>개선 방안</th></tr>
                </thead>
                <tbody>
                  <tr><td>도달 (Reach)</td><td></td><td></td><td></td></tr>
                  <tr><td>노출 (Impressions)</td><td></td><td></td><td></td></tr>
                  <tr><td>좋아요</td><td></td><td></td><td></td></tr>
                  <tr><td>댓글</td><td></td><td></td><td></td></tr>
                  <tr><td>저장</td><td></td><td></td><td></td></tr>
                  <tr><td>공유</td><td></td><td></td><td></td></tr>
                  <tr><td>참여율</td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                7주차에서는 콘텐츠 마케팅 전략을 심화 학습합니다. 블로그 마케팅, 뉴스레터,
                스토리텔링, 콘텐츠 리퍼포징 등 가치 있는 콘텐츠를 만들고
                다양한 채널에 효과적으로 배포하는 방법을 배웁니다.
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

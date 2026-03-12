import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolAds = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="광고 마케팅"
        description="Google Ads, Meta Ads, 네이버/카카오 광고 등 온라인 광고 플랫폼 완벽 가이드"
        path="/tools/ads"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>광고 마케팅</h1>
          <p>온라인 광고 플랫폼의 종류, 전략, 최적화 방법을 총망라한 광고 마케팅 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 온라인 광고 유형 개요</h2>
            <p>
              온라인 광고는 디지털 마케팅에서 가장 빠르게 결과를 얻을 수 있는 채널입니다.
              오가닉(자연 유입) 마케팅이 시간이 걸리는 반면, 유료 광고는 즉시 타겟 고객에게 도달할 수 있습니다.
              각 광고 유형의 특성을 이해하고, 목적에 맞게 활용하는 것이 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>온라인 광고 유형 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>플랫폼</th><th>특징</th><th>목적</th><th>평균 CTR</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>검색 광고</strong></td>
                    <td>Google, Naver, Bing</td>
                    <td>검색 의도에 맞는 키워드 타겟팅</td>
                    <td>전환, 리드 생성</td>
                    <td>3~5%</td>
                  </tr>
                  <tr>
                    <td><strong>디스플레이 광고</strong></td>
                    <td>GDN, 카카오모먼트</td>
                    <td>배너, 이미지 형태의 노출 광고</td>
                    <td>브랜드 인지도</td>
                    <td>0.3~0.5%</td>
                  </tr>
                  <tr>
                    <td><strong>소셜 미디어 광고</strong></td>
                    <td>Meta, TikTok, LinkedIn</td>
                    <td>관심사/행동 기반 타겟팅</td>
                    <td>인지도, 참여, 전환</td>
                    <td>0.9~1.5%</td>
                  </tr>
                  <tr>
                    <td><strong>동영상 광고</strong></td>
                    <td>YouTube, TikTok</td>
                    <td>영상 콘텐츠 내 광고</td>
                    <td>브랜드 스토리텔링</td>
                    <td>1~3% (VTR)</td>
                  </tr>
                  <tr>
                    <td><strong>네이티브 광고</strong></td>
                    <td>타불라, 데이블</td>
                    <td>콘텐츠와 자연스럽게 융합</td>
                    <td>콘텐츠 마케팅</td>
                    <td>0.2~0.5%</td>
                  </tr>
                  <tr>
                    <td><strong>쇼핑 광고</strong></td>
                    <td>Google Shopping, 네이버 쇼핑</td>
                    <td>제품 이미지 + 가격 직접 노출</td>
                    <td>이커머스 매출</td>
                    <td>1~3%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>광고 퍼널 개념:</strong> 효과적인 광고 전략은 마케팅 퍼널 단계별로 다른 광고 유형을 활용합니다.
              인지(Awareness) 단계에서는 디스플레이/동영상 광고로 넓게 노출하고,
              고려(Consideration) 단계에서는 검색/소셜 광고로 관심을 유도하며,
              전환(Conversion) 단계에서는 리타겟팅/쇼핑 광고로 구매를 촉진합니다.
            </div>

            <h2>2. Google Ads 기초</h2>
            <p>
              Google Ads는 전 세계에서 가장 많이 사용되는 광고 플랫폼으로,
              검색 광고, 디스플레이, YouTube 광고, 쇼핑 광고 등 다양한 광고 형태를 제공합니다.
              구글 검색 엔진의 압도적인 시장 점유율(90%+)을 기반으로 한 검색 광고가 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Google Ads 캠페인 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>캠페인 유형</th><th>노출 위치</th><th>형식</th><th>추천 목적</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>검색 캠페인</strong></td>
                    <td>구글 검색 결과 상단/하단</td>
                    <td>텍스트 광고</td>
                    <td>전환, 리드 생성</td>
                  </tr>
                  <tr>
                    <td><strong>디스플레이 캠페인</strong></td>
                    <td>GDN 파트너 사이트, 앱</td>
                    <td>배너, 반응형 이미지</td>
                    <td>브랜드 인지도, 리타겟팅</td>
                  </tr>
                  <tr>
                    <td><strong>YouTube 캠페인</strong></td>
                    <td>YouTube 영상 전/중/후</td>
                    <td>동영상 (스킵/비스킵/범퍼)</td>
                    <td>브랜드 인지도, 고려</td>
                  </tr>
                  <tr>
                    <td><strong>쇼핑 캠페인</strong></td>
                    <td>구글 검색, 쇼핑 탭</td>
                    <td>제품 이미지 + 가격</td>
                    <td>이커머스 매출</td>
                  </tr>
                  <tr>
                    <td><strong>Performance Max</strong></td>
                    <td>모든 구글 채널</td>
                    <td>AI 기반 자동 최적화</td>
                    <td>전환 극대화</td>
                  </tr>
                  <tr>
                    <td><strong>앱 캠페인</strong></td>
                    <td>검색, Play 스토어, YouTube</td>
                    <td>앱 설치 유도</td>
                    <td>앱 설치 및 인앱 행동</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>Google Ads 검색 광고 시작 가이드:</strong>
              <ul>
                <li><strong>키워드 리서치:</strong> Google 키워드 플래너로 검색량, CPC, 경쟁도 확인</li>
                <li><strong>매치 타입:</strong> 광범위(Broad), 구문(Phrase), 정확(Exact) 매치 이해 필수</li>
                <li><strong>광고 그룹:</strong> 주제별로 키워드를 10~20개씩 그룹핑</li>
                <li><strong>광고 확장:</strong> 사이트링크, 콜아웃, 전화번호 확장으로 클릭률 15~20% 향상</li>
                <li><strong>품질 점수:</strong> 키워드 관련성, 광고 관련성, 랜딩페이지 경험 최적화</li>
              </ul>
            </div>

            <h2>3. Meta Ads (Facebook/Instagram)</h2>
            <p>
              Meta Ads는 Facebook과 Instagram을 포괄하는 광고 플랫폼으로,
              전 세계 30억+ 사용자에게 도달할 수 있습니다.
              강력한 관심사/행동 기반 타겟팅과 다양한 광고 형식이 특징입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Meta Ads 광고 형식</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>형식</th><th>특징</th><th>추천 목적</th><th>권장 사이즈</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>이미지 광고</strong></td>
                    <td>단일 이미지 + 텍스트</td>
                    <td>트래픽, 전환</td>
                    <td>1080x1080px</td>
                  </tr>
                  <tr>
                    <td><strong>동영상 광고</strong></td>
                    <td>15~60초 영상</td>
                    <td>인지도, 참여</td>
                    <td>1080x1080 또는 9:16</td>
                  </tr>
                  <tr>
                    <td><strong>캐러셀 광고</strong></td>
                    <td>2~10개 카드 슬라이드</td>
                    <td>제품 쇼케이스</td>
                    <td>1080x1080px (각 카드)</td>
                  </tr>
                  <tr>
                    <td><strong>컬렉션 광고</strong></td>
                    <td>커버 이미지/영상 + 제품 목록</td>
                    <td>이커머스 매출</td>
                    <td>1200x628px (커버)</td>
                  </tr>
                  <tr>
                    <td><strong>리드 광고</strong></td>
                    <td>인앱 폼으로 정보 수집</td>
                    <td>리드 생성</td>
                    <td>1080x1080px</td>
                  </tr>
                  <tr>
                    <td><strong>스토리/릴스 광고</strong></td>
                    <td>풀스크린 세로형</td>
                    <td>인지도, 앱 설치</td>
                    <td>1080x1920px (9:16)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>Meta Ads 캠페인 구조:</strong>
              <ul>
                <li><strong>캠페인:</strong> 목표 설정 (인지도, 트래픽, 참여, 리드, 앱 프로모션, 매출)</li>
                <li><strong>광고 세트:</strong> 타겟팅, 예산, 일정, 게재 위치 설정</li>
                <li><strong>광고:</strong> 크리에이티브 (이미지/영상 + 텍스트 + CTA)</li>
              </ul>
              <p>한 캠페인에 2~5개 광고 세트, 각 광고 세트에 3~5개 광고를 운영하여 최적의 조합을 찾으세요.</p>
            </div>

            <h2>4. 네이버/카카오 광고 플랫폼</h2>
            <p>
              한국 시장에서는 네이버와 카카오 광고 플랫폼이 매우 중요합니다.
              특히 네이버는 국내 검색 시장 점유율 약 60%를 차지하며,
              카카오는 메신저 기반의 독보적인 타겟팅을 제공합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>네이버 광고 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>노출 위치</th><th>과금 방식</th><th>특징</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>파워링크</strong></td>
                    <td>검색 결과 상단</td>
                    <td>CPC (클릭당 과금)</td>
                    <td>네이버 검색 광고의 핵심, 키워드 입찰</td>
                  </tr>
                  <tr>
                    <td><strong>쇼핑검색 광고</strong></td>
                    <td>쇼핑 탭, 검색 결과</td>
                    <td>CPC</td>
                    <td>상품 이미지+가격 직접 노출, 이커머스 필수</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드검색</strong></td>
                    <td>검색 결과 최상단</td>
                    <td>CPT (기간제)</td>
                    <td>브랜드 키워드 검색 시 대형 배너 노출</td>
                  </tr>
                  <tr>
                    <td><strong>성과형 디스플레이</strong></td>
                    <td>네이버 메인, 서브 페이지</td>
                    <td>CPC/CPM</td>
                    <td>타겟팅 기반 배너 광고, 네이버 GFA</td>
                  </tr>
                  <tr>
                    <td><strong>스마트스토어 광고</strong></td>
                    <td>네이버 쇼핑</td>
                    <td>CPC</td>
                    <td>스마트스토어 상품 노출 극대화</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>카카오 광고 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>노출 위치</th><th>특징</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>카카오모먼트 디스플레이</strong></td>
                    <td>카카오 서비스 전반 (다음, 카카오톡 등)</td>
                    <td>관심사/행동 기반 타겟팅, 다양한 소재 형식</td>
                  </tr>
                  <tr>
                    <td><strong>카카오 비즈보드</strong></td>
                    <td>카카오톡 채팅 탭 상단</td>
                    <td>4,500만+ 사용자 도달, 높은 노출량</td>
                  </tr>
                  <tr>
                    <td><strong>카카오톡 채널 메시지</strong></td>
                    <td>카카오톡 채널 메시지</td>
                    <td>채널 친구 대상 다이렉트 메시지, 높은 오픈율</td>
                  </tr>
                  <tr>
                    <td><strong>카카오 키워드 광고</strong></td>
                    <td>다음 검색 결과</td>
                    <td>다음 검색 키워드 광고, CPC 방식</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>네이버/카카오 광고 주의사항:</strong>
              <ul>
                <li>네이버 파워링크는 품질지수가 광고 순위에 큰 영향. 광고 관련성 최적화 필수</li>
                <li>카카오 비즈보드는 소재 심사가 엄격하므로 가이드라인 숙지 필수</li>
                <li>국내 광고는 공정거래위원회 광고 규제(표시 광고법) 준수 필요</li>
                <li>네이버 쇼핑검색은 상품 데이터 품질(제목, 카테고리, 이미지)이 노출에 직결</li>
              </ul>
            </div>

            <h2>5. 광고 예산 설정 &amp; 입찰 전략</h2>
            <p>
              효과적인 광고 예산 관리는 마케팅 ROI를 극대화하는 핵심입니다.
              목표에 맞는 예산 배분과 입찰 전략을 수립해야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>입찰 전략 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>전략</th><th>설명</th><th>추천 상황</th><th>주의점</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>수동 CPC</strong></td>
                    <td>클릭당 최대 금액을 직접 설정</td>
                    <td>초기 테스트, 정밀 제어 필요 시</td>
                    <td>시간 투자 많음</td>
                  </tr>
                  <tr>
                    <td><strong>목표 CPA</strong></td>
                    <td>전환당 목표 비용에 맞춰 자동 입찰</td>
                    <td>전환 데이터 충분할 때 (50건+)</td>
                    <td>충분한 전환 데이터 필요</td>
                  </tr>
                  <tr>
                    <td><strong>목표 ROAS</strong></td>
                    <td>광고비 대비 목표 수익률에 맞춰 자동 입찰</td>
                    <td>이커머스, 수익 추적 가능 시</td>
                    <td>정확한 전환 가치 설정 필요</td>
                  </tr>
                  <tr>
                    <td><strong>전환 극대화</strong></td>
                    <td>예산 내 최대 전환 수 달성</td>
                    <td>예산이 정해져 있을 때</td>
                    <td>CPA 변동 가능성</td>
                  </tr>
                  <tr>
                    <td><strong>노출 점유율 타겟</strong></td>
                    <td>특정 위치 노출 비율 목표</td>
                    <td>브랜드 키워드 방어</td>
                    <td>비용 증가 가능</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>예산 설정 가이드:</strong>
              <ul>
                <li><strong>초기 테스트:</strong> 일 예산 3~5만원으로 시작, 2~4주 데이터 수집</li>
                <li><strong>70/20/10 법칙:</strong> 검증된 채널 70%, 확장 테스트 20%, 실험 10%</li>
                <li><strong>월 최소 예산:</strong> Google Ads 50만원, Meta Ads 30만원, 네이버 30만원 이상 권장</li>
                <li><strong>ROAS 목표:</strong> 이커머스 300%+, SaaS/서비스 500%+ 목표</li>
              </ul>
            </div>

            <h2>6. 타겟팅 전략</h2>
            <p>
              광고 성과의 80%는 타겟팅에서 결정됩니다.
              적절한 사람에게 적절한 메시지를 전달하는 것이 광고 효율의 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>타겟팅 유형별 전략</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>설명</th><th>활용 예시</th><th>효과</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>인구통계</strong></td>
                    <td>연령, 성별, 지역, 소득</td>
                    <td>25~34세 여성, 서울 거주</td>
                    <td>기본적 타겟 범위 설정</td>
                  </tr>
                  <tr>
                    <td><strong>관심사</strong></td>
                    <td>취미, 관심 분야, 라이프스타일</td>
                    <td>요가, 건강식품, 여행 관심자</td>
                    <td>잠재 고객 발굴</td>
                  </tr>
                  <tr>
                    <td><strong>행동 기반</strong></td>
                    <td>구매 행동, 기기, 앱 사용</td>
                    <td>최근 온라인 쇼핑 활발한 사용자</td>
                    <td>높은 전환 가능성</td>
                  </tr>
                  <tr>
                    <td><strong>리타겟팅</strong></td>
                    <td>웹사이트 방문자, 장바구니 이탈자</td>
                    <td>상품 페이지 방문 후 미구매자</td>
                    <td>매우 높은 전환율 (3~10배)</td>
                  </tr>
                  <tr>
                    <td><strong>유사 오디언스</strong></td>
                    <td>기존 고객과 유사한 특성의 새로운 사용자</td>
                    <td>구매 고객 기반 1~10% 유사 타겟</td>
                    <td>효율적인 신규 고객 확보</td>
                  </tr>
                  <tr>
                    <td><strong>커스텀 오디언스</strong></td>
                    <td>기존 고객 데이터 업로드</td>
                    <td>이메일 리스트, CRM 데이터 매칭</td>
                    <td>기존 고객 재참여</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>리타겟팅 전략 심화:</strong> 리타겟팅은 광고 ROI를 극대화하는 가장 효과적인 전략입니다.
              웹사이트 방문자의 97%는 첫 방문에서 구매하지 않습니다.
              리타겟팅으로 이탈 고객에게 7일, 14일, 30일 기간별 차등 메시지를 전달하고,
              장바구니 이탈자에게는 추가 할인이나 무료 배송을 제안하세요.
              리타겟팅 광고의 전환율은 일반 광고 대비 3~10배 높습니다.
            </div>

            <h2>7. 광고 크리에이티브 제작</h2>
            <p>
              아무리 좋은 타겟팅도 매력적인 크리에이티브 없이는 효과가 없습니다.
              주목을 끌고, 메시지를 전달하며, 행동을 유도하는 광고 소재를 제작하는 방법을 알아봅니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>광고 카피라이팅 공식</h3>
              <ul>
                <li><strong>PAS (Problem-Agitate-Solution):</strong> 문제 제시 &rarr; 고통 증폭 &rarr; 해결책 제안</li>
                <li><strong>AIDA:</strong> 주목 &rarr; 관심 &rarr; 욕구 &rarr; 행동 유도</li>
                <li><strong>BAB (Before-After-Bridge):</strong> 현재 상태 &rarr; 이상적 상태 &rarr; 연결(제품/서비스)</li>
                <li><strong>4U 공식:</strong> Useful(유용), Urgent(긴급), Unique(독특), Ultra-specific(구체적)</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>비주얼 제작 팁:</strong>
              <ul>
                <li><strong>첫 3초:</strong> 동영상 광고는 처음 3초에 핵심 메시지/훅 배치 (스크롤 정지 효과)</li>
                <li><strong>텍스트 20% 규칙:</strong> Meta 광고 이미지의 텍스트 비율 20% 이하 권장</li>
                <li><strong>대비 색상:</strong> 피드에서 눈에 띄는 색상 사용 (파란 피드에서 주황/빨강 대비)</li>
                <li><strong>사람 얼굴:</strong> 사람의 얼굴이 포함된 이미지가 30% 더 높은 참여율</li>
                <li><strong>UGC 스타일:</strong> 과도하게 제작된 것보다 자연스러운 사용자 생성 콘텐츠 스타일이 효과적</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>A/B 테스트 필수 항목:</strong>
              <ul>
                <li>헤드라인: 동일 이미지에 다른 헤드라인 2~3개 테스트</li>
                <li>이미지/영상: 동일 카피에 다른 비주얼 테스트</li>
                <li>CTA: "지금 구매" vs "자세히 보기" vs "무료 체험" 등</li>
                <li>광고 형식: 이미지 vs 동영상 vs 캐러셀</li>
                <li>최소 7일, 광고 세트당 1,000노출 이상 데이터 수집 후 판단</li>
              </ul>
            </div>

            <h2>8. 광고 성과 분석</h2>
            <p>
              광고 성과를 정확히 측정하고 분석하는 것은 마케팅 예산을 효율적으로 사용하는 핵심입니다.
              주요 KPI를 이해하고, 데이터 기반으로 광고를 최적화하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 광고 성과 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>계산 방법</th><th>의미</th><th>목표 수치 (참고)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ROAS</strong></td>
                    <td>매출 / 광고비 x 100%</td>
                    <td>광고비 대비 매출 비율</td>
                    <td>300%+ (이커머스)</td>
                  </tr>
                  <tr>
                    <td><strong>CPA</strong></td>
                    <td>광고비 / 전환 수</td>
                    <td>전환 1건당 비용</td>
                    <td>LTV의 1/3 이하</td>
                  </tr>
                  <tr>
                    <td><strong>CTR</strong></td>
                    <td>클릭 수 / 노출 수</td>
                    <td>광고 매력도</td>
                    <td>검색 3%+, 디스플레이 0.5%+</td>
                  </tr>
                  <tr>
                    <td><strong>CVR</strong></td>
                    <td>전환 수 / 클릭 수</td>
                    <td>랜딩페이지 효과</td>
                    <td>2~5%</td>
                  </tr>
                  <tr>
                    <td><strong>CPC</strong></td>
                    <td>광고비 / 클릭 수</td>
                    <td>클릭당 비용</td>
                    <td>업종별 상이</td>
                  </tr>
                  <tr>
                    <td><strong>CPM</strong></td>
                    <td>광고비 / 노출 수 x 1,000</td>
                    <td>1,000회 노출당 비용</td>
                    <td>디스플레이 $3~10</td>
                  </tr>
                  <tr>
                    <td><strong>빈도 (Frequency)</strong></td>
                    <td>노출 수 / 도달 수</td>
                    <td>1인당 평균 노출 횟수</td>
                    <td>3~7회 (피로도 고려)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>성과 분석 프레임워크:</strong>
              <ul>
                <li><strong>주간:</strong> CTR, CPC, 노출 수 모니터링. 비정상 변동 시 즉시 대응</li>
                <li><strong>격주:</strong> ROAS, CPA, CVR 분석. 저성과 광고 중지, 고성과 광고 예산 증액</li>
                <li><strong>월간:</strong> 전체 캠페인 ROI 분석, 채널별 성과 비교, 다음 달 전략 수립</li>
                <li><strong>분기:</strong> 전체 마케팅 퍼널 분석, 채널 믹스 최적화, 예산 재배분</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습: 광고 캠페인 기획서 작성</h3>
              <p>가상의 제품/서비스를 선정하여 광고 캠페인 기획서를 작성해 보세요.</p>
              <ol>
                <li><strong>제품/서비스 정의:</strong> 판매할 제품, 가격, USP(차별점) 정리</li>
                <li><strong>타겟 고객 정의:</strong> 페르소나 작성 (연령, 성별, 직업, 관심사, 고민)</li>
                <li><strong>캠페인 목표:</strong> KPI 설정 (목표 ROAS, CPA, 전환 수)</li>
                <li><strong>채널 선택:</strong> 2~3개 광고 플랫폼 선택 및 이유</li>
                <li><strong>예산 배분:</strong> 월 100만원 기준 채널별 예산 배분</li>
                <li><strong>타겟팅 설정:</strong> 각 채널별 타겟팅 전략 수립</li>
                <li><strong>크리에이티브 기획:</strong> 광고 카피 3종 + 비주얼 컨셉 작성</li>
                <li><strong>A/B 테스트 계획:</strong> 테스트할 변수 2개와 측정 방법</li>
                <li><strong>성과 측정 계획:</strong> 추적할 KPI와 보고 주기 설정</li>
              </ol>
              <p><strong>제출물:</strong> 광고 캠페인 기획서 (위 항목 모두 포함)</p>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/email" className="lesson-nav-btn prev">&larr; 이메일 마케팅</Link>
              <Link to="/tools/design" className="lesson-nav-btn next">디자인 도구 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolAds;

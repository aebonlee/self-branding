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
        description="Google, Meta, 네이버, 카카오 광고 플랫폼 활용과 광고 최적화 전략 가이드"
        path="/tools/ads"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>광고 마케팅</h1>
          <p>디지털 광고의 A부터 Z까지, 주요 플랫폼 활용과 광고 최적화 전략</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 디지털 광고 개요</h2>
            <p>
              디지털 광고는 온라인 매체를 통해 타겟 오디언스에게 브랜드, 제품, 서비스를 알리는 유료 마케팅 활동입니다.
              정밀한 타겟팅과 실시간 성과 측정이 가능하여 전통 광고 대비 높은 효율을 제공합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>주요 과금 모델</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>모델</th><th>과금 기준</th><th>특징</th><th>적합한 목적</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>CPC (Cost Per Click)</strong></td>
                    <td>클릭당 과금</td>
                    <td>클릭이 발생해야 비용 청구</td>
                    <td>트래픽 유입, 전환 목적</td>
                  </tr>
                  <tr>
                    <td><strong>CPM (Cost Per Mille)</strong></td>
                    <td>1,000회 노출당 과금</td>
                    <td>노출 기준, 브랜드 인지도에 적합</td>
                    <td>인지도 향상, 리마케팅</td>
                  </tr>
                  <tr>
                    <td><strong>CPA (Cost Per Action)</strong></td>
                    <td>특정 행동(가입, 구매)당 과금</td>
                    <td>전환 발생 시에만 비용 청구</td>
                    <td>리드 생성, 구매 전환</td>
                  </tr>
                  <tr>
                    <td><strong>CPV (Cost Per View)</strong></td>
                    <td>영상 시청당 과금</td>
                    <td>일정 시간 이상 시청 시 과금</td>
                    <td>영상 광고, 브랜드 스토리</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>광고 시작 전 체크리스트:</strong>
              <ul>
                <li>광고 목표를 명확히 설정 (인지도 vs 트래픽 vs 전환)</li>
                <li>타겟 오디언스 정의 (인구통계, 관심사, 행동)</li>
                <li>랜딩 페이지 준비 (광고와 일치하는 메시지)</li>
                <li>전환 추적 설정 (픽셀, 태그 매니저)</li>
                <li>A/B 테스트용 소재 2~3가지 준비</li>
              </ul>
            </div>

            <h2>2. Google Ads</h2>
            <p>
              Google Ads는 세계 최대 디지털 광고 플랫폼으로, 검색, 디스플레이, 유튜브, 쇼핑 등
              다양한 광고 유형을 제공합니다. 구매 의도가 높은 사용자에게 도달할 수 있어 전환율이 높습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Google Ads 광고 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>노출 위치</th><th>특징</th><th>평균 CPC (한국)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>검색 광고</strong></td>
                    <td>Google 검색 결과 상단/하단</td>
                    <td>키워드 기반, 높은 구매 의도</td>
                    <td>₩500~5,000</td>
                  </tr>
                  <tr>
                    <td><strong>디스플레이 광고</strong></td>
                    <td>GDN 네트워크 웹사이트</td>
                    <td>배너/이미지, 넓은 도달</td>
                    <td>₩50~500</td>
                  </tr>
                  <tr>
                    <td><strong>유튜브 광고</strong></td>
                    <td>유튜브 영상 전/중/후</td>
                    <td>영상 기반, 브랜드 스토리</td>
                    <td>CPV ₩10~50</td>
                  </tr>
                  <tr>
                    <td><strong>쇼핑 광고</strong></td>
                    <td>Google 쇼핑 탭, 검색 결과</td>
                    <td>제품 이미지+가격, 이커머스 특화</td>
                    <td>₩200~2,000</td>
                  </tr>
                  <tr>
                    <td><strong>퍼포먼스 맥스</strong></td>
                    <td>Google 전 채널 자동 배분</td>
                    <td>AI 기반 최적화, 전환 목표</td>
                    <td>목표에 따라 다름</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>Google 검색 광고 팁:</strong>
              <ul>
                <li>키워드 매치 유형을 정확히 이해하고 활용 (광범위, 구문, 정확 일치)</li>
                <li>네거티브 키워드를 적극 활용하여 불필요한 클릭 방지</li>
                <li>광고 확장(사이트링크, 콜아웃, 구조화 스니펫) 활용</li>
                <li>품질 점수를 높여 더 낮은 CPC로 상위 노출 달성</li>
              </ul>
            </div>

            <h2>3. Meta Ads (Facebook/Instagram)</h2>
            <p>
              Meta 광고는 Facebook과 Instagram을 통해 정밀한 타겟팅 기반의 광고를 집행할 수 있는 플랫폼입니다.
              관심사, 행동, 유사 오디언스 등 다양한 타겟팅 옵션을 제공합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>Meta Ads 캠페인 구조</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>설정 항목</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>캠페인</strong></td>
                    <td>목표 설정</td>
                    <td>인지도, 트래픽, 참여, 리드, 앱 설치, 판매 중 선택</td>
                  </tr>
                  <tr>
                    <td><strong>광고 세트</strong></td>
                    <td>타겟 + 예산 + 노출</td>
                    <td>오디언스 설정, 일/전체 예산, 게재 위치 선택</td>
                  </tr>
                  <tr>
                    <td><strong>광고</strong></td>
                    <td>소재 + 텍스트</td>
                    <td>이미지/영상, 제목, 본문, CTA 버튼 설정</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>타겟팅 옵션</h3>
              <ul>
                <li><strong>핵심 오디언스:</strong> 인구통계(나이, 성별, 지역) + 관심사 + 행동 기반</li>
                <li><strong>맞춤 오디언스:</strong> 기존 고객 리스트, 웹사이트 방문자, 앱 사용자 기반</li>
                <li><strong>유사 오디언스 (Lookalike):</strong> 기존 고객과 유사한 특성의 신규 사용자 타겟</li>
                <li><strong>리타겟팅:</strong> 웹사이트 방문 후 이탈한 사용자에게 재노출</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> Meta 광고의 iOS 14+ 이후 트래킹 제한으로 타겟팅 정확도가 감소했습니다.
              Conversions API(CAPI) 설정과 자사 데이터(1st party data) 활용이 더욱 중요해졌습니다.
            </div>

            <h2>4. Naver 광고</h2>
            <p>
              국내 검색 시장에서 네이버의 점유율은 여전히 높습니다. 네이버 광고는 국내 타겟 마케팅에 필수적인 플랫폼입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>네이버 광고 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>특징</th><th>최소 예산</th><th>적합한 업종</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>검색광고 (파워링크)</strong></td>
                    <td>키워드 기반 CPC 광고, 검색 결과 상단</td>
                    <td>일 ₩10,000~</td>
                    <td>모든 업종</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드검색</strong></td>
                    <td>브랜드명 검색 시 최상단 노출, 이미지/영상 포함</td>
                    <td>월 ₩500,000~</td>
                    <td>브랜드 인지도 필요 업종</td>
                  </tr>
                  <tr>
                    <td><strong>쇼핑검색</strong></td>
                    <td>네이버 쇼핑 영역 노출, 상품 이미지+가격</td>
                    <td>CPC ₩50~</td>
                    <td>이커머스, 소매</td>
                  </tr>
                  <tr>
                    <td><strong>GFA (성과형 디스플레이)</strong></td>
                    <td>네이버 메인/서브 페이지 배너 광고</td>
                    <td>일 ₩50,000~</td>
                    <td>인지도, 이벤트 홍보</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>네이버 검색광고 팁:</strong>
              <ul>
                <li>키워드를 그룹별로 정리하여 광고 관련성 높이기</li>
                <li>확장 소재(이미지, 가격, 전화번호)를 최대한 활용</li>
                <li>시간대별, 요일별 입찰가 조정으로 예산 효율화</li>
                <li>검색 쿼리 보고서를 정기적으로 확인하여 불필요한 노출 차단</li>
              </ul>
            </div>

            <h2>5. 카카오 광고</h2>
            <p>
              카카오 광고는 카카오톡, 다음, 카카오 서비스 전반에 걸쳐 광고를 노출할 수 있는 플랫폼입니다.
              국민 메신저 카카오톡을 기반으로 한 독보적인 도달력을 가지고 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>카카오 광고 유형</h3>
              <ul>
                <li><strong>카카오모먼트:</strong> 카카오 전체 서비스에 걸친 디스플레이/네이티브 광고. 관심사, 키워드, 맞춤 타겟 가능</li>
                <li><strong>카카오톡 채널 광고:</strong> 카카오톡 채널 친구 추가 유도, 메시지 발송. 높은 오픈률(60%+)</li>
                <li><strong>카카오톡 비즈보드:</strong> 카카오톡 채팅탭 상단 배너. 고노출 보장</li>
                <li><strong>다음 검색광고:</strong> 다음 검색결과 상단 노출. 네이버 대비 CPC 저렴</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>카카오톡 채널 활용 팁:</strong> 카카오톡 채널은 무료로 시작할 수 있으며, 친구 수를 확보한 후
              메시지를 발송하면 높은 오픈률(60~70%)을 기대할 수 있습니다. 단, 과도한 메시지 발송은
              차단으로 이어지므로 주 1~2회가 적절합니다.
            </div>

            <h2>6. 광고 최적화</h2>
            <p>
              광고 집행 후 지속적인 최적화를 통해 성과를 개선하는 것이 핵심입니다.
              데이터 기반의 의사결정으로 광고 효율을 극대화하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>광고 최적화 전략</h3>
              <ul>
                <li><strong>A/B 테스트:</strong> 제목, 이미지, CTA, 타겟을 하나씩 변경하며 테스트. 한 번에 하나의 변수만 변경</li>
                <li><strong>입찰 전략:</strong>
                  <ul>
                    <li>수동 입찰: 키워드/광고 세트별 세밀한 입찰가 조정</li>
                    <li>자동 입찰: AI 기반 최적화 (타겟 CPA, 타겟 ROAS)</li>
                    <li>시작은 수동 → 데이터 축적 후 자동 전환 추천</li>
                  </ul>
                </li>
                <li><strong>품질 점수 (Google):</strong>
                  <ul>
                    <li>광고 관련성: 키워드와 광고 문구의 일치도</li>
                    <li>랜딩 페이지 경험: 로딩 속도, 모바일 최적화, 콘텐츠 관련성</li>
                    <li>예상 CTR: 광고의 클릭률 예상치</li>
                  </ul>
                </li>
                <li><strong>광고 피로도 관리:</strong> 같은 소재를 2~3주 이상 노출하면 효율 저하. 정기적 소재 교체</li>
              </ul>
            </div>

            <h2>7. 광고 예산 관리</h2>
            <p>
              제한된 예산에서 최대 효과를 내기 위한 전략적 예산 관리가 필수적입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 예산 관리 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>계산 방법</th><th>의미</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ROAS</strong></td>
                    <td>광고 매출 / 광고 비용 x 100</td>
                    <td>광고비 대비 매출 비율. 300% 이상이 일반적 목표</td>
                  </tr>
                  <tr>
                    <td><strong>CPA</strong></td>
                    <td>광고 비용 / 전환 수</td>
                    <td>전환 1건당 비용. 낮을수록 효율적</td>
                  </tr>
                  <tr>
                    <td><strong>LTV (고객 생애 가치)</strong></td>
                    <td>평균 구매액 x 구매 횟수 x 유지 기간</td>
                    <td>고객 1명의 전체 가치. CPA보다 높아야 수익</td>
                  </tr>
                  <tr>
                    <td><strong>CAC (고객 획득 비용)</strong></td>
                    <td>총 마케팅 비용 / 신규 고객 수</td>
                    <td>고객 1명 획득에 드는 총비용</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>예산 배분 전략:</strong>
              <ul>
                <li>초기: 전체 예산의 70%를 테스트에 배분, 30%를 검증된 캠페인에</li>
                <li>성장기: 성과 좋은 캠페인에 60%, 신규 테스트에 20%, 브랜딩에 20%</li>
                <li>안정기: 검증된 캠페인 50%, 리타겟팅 25%, 신규 채널 25%</li>
                <li>최소 2주 이상 데이터를 축적한 후 성과 판단 (즉흥적 중단 금지)</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> 광고 성과가 좋다고 무한정 예산을 늘리면 안 됩니다. 예산 증가 시
              CPA가 함께 상승하는 '수확 체감의 법칙'이 적용됩니다. 예산은 주당 20~30%씩
              점진적으로 증가시키세요.
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Google Ads Editor</strong></td>
                    <td>Google 광고 대량 편집, 오프라인 작업</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>Meta Business Suite</strong></td>
                    <td>Facebook/Instagram 광고 관리, 인사이트</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>네이버 광고 관리 시스템</strong></td>
                    <td>네이버 검색/디스플레이 광고 관리</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>Google Tag Manager</strong></td>
                    <td>전환 추적 태그 관리, 이벤트 트래킹</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>Google Analytics 4</strong></td>
                    <td>광고 성과 분석, 전환 경로 추적, 사용자 행동</td>
                    <td>무료</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/email" className="lesson-nav-btn prev">← 이메일 마케팅</Link>
              <Link to="/tools/design" className="lesson-nav-btn next">디자인 도구 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolAds;

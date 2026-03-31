import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek9 = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="9주차: 기업 홍보 & PR" path="/lessons/corporate-pr" />
      <section className="page-header">
        <div className="container">
          <h1>9주차: 기업 홍보 &amp; PR</h1>
          <p>보도자료 작성부터 위기관리까지, 전략적 PR로 브랜드 신뢰를 구축하고 가치를 극대화합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            {/* ========== 1. PR의 정의와 범위 ========== */}
            <h2>1. PR의 정의와 범위</h2>
            <p>
              PR(Public Relations, 홍보)은 조직과 공중(Public) 사이의 상호 이해와 호의적 관계를 구축하고
              유지하는 전략적 커뮤니케이션 활동입니다. 미국PR협회(PRSA)는 PR을 "조직과 공중 사이에
              상호 유익한 관계를 구축하는 전략적 커뮤니케이션 프로세스"로 정의합니다.
              단순히 언론에 기사를 내보내는 것을 넘어, 다양한 이해관계자(고객, 투자자, 직원, 정부,
              지역사회 등)와의 관계를 총체적으로 관리하는 포괄적인 커뮤니케이션 전략을 의미합니다.
            </p>

            <div className="callout-box">
              <h3>PR의 주요 영역</h3>
              <ul>
                <li><strong>미디어 릴레이션즈</strong> — 언론사와의 관계 구축, 보도자료 배포, 기자 브리핑</li>
                <li><strong>위기관리 (Crisis Management)</strong> — 부정적 이슈 발생 시 체계적 대응 및 이미지 회복</li>
                <li><strong>이벤트 관리</strong> — 기업 행사, 컨퍼런스, 제품 론칭 이벤트 기획 및 운영</li>
                <li><strong>CSR &amp; ESG</strong> — 사회적 책임 활동 기획 및 대외 커뮤니케이션</li>
                <li><strong>내부 커뮤니케이션</strong> — 사내 소통 체계 구축, 기업문화 형성</li>
                <li><strong>정부 관계 (Government Relations)</strong> — 정책 모니터링, 규제 대응, 공공 관계</li>
                <li><strong>투자자 관계 (IR)</strong> — 주주 및 투자자 대상 재무 커뮤니케이션</li>
                <li><strong>디지털 PR</strong> — 온라인 평판 관리, SNS 커뮤니케이션, 인플루언서 협업</li>
              </ul>
            </div>

            <h3>광고 vs PR 차이</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>PR (홍보)</th><th>광고 (Advertising)</th><th>마케팅 (Marketing)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>미디어 유형</strong></td><td>Earned Media (획득 미디어)</td><td>Paid Media (유료 미디어)</td><td>Owned + Paid + Earned</td></tr>
                <tr><td><strong>비용</strong></td><td>미디어 비용 무료</td><td>매체 비용 유료</td><td>종합 예산</td></tr>
                <tr><td><strong>신뢰도</strong></td><td>높음 (제3자 보도)</td><td>낮음 (자사 메시지)</td><td>중간</td></tr>
                <tr><td><strong>통제력</strong></td><td>낮음 (기자 재량)</td><td>높음 (직접 제작)</td><td>중간~높음</td></tr>
                <tr><td><strong>목적</strong></td><td>신뢰 구축, 평판 관리</td><td>제품/서비스 판매 촉진</td><td>매출 증대, 고객 확보</td></tr>
                <tr><td><strong>메시지 수명</strong></td><td>장기 (기사 아카이브)</td><td>단기 (광고 기간 한정)</td><td>캠페인 기간</td></tr>
                <tr><td><strong>측정 지표</strong></td><td>기사 건수, 광고환산가치(AVE), 톤</td><td>노출수, 클릭률, 전환률</td><td>ROI, 고객 생애가치</td></tr>
              </tbody>
            </table>

            <div className="section-card" data-aos="fade-up">
              <h3>PESO 모델: 통합 미디어 전략</h3>
              <p>
                현대 PR은 더 이상 Earned Media만으로 충분하지 않습니다.
                PESO 모델은 네 가지 미디어 유형을 통합적으로 활용하는 프레임워크입니다.
              </p>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>설명</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>P (Paid)</strong></td><td>비용을 지불하는 미디어</td><td>네이티브 광고, 스폰서드 콘텐츠, SNS 광고</td></tr>
                  <tr><td><strong>E (Earned)</strong></td><td>뉴스 가치로 획득하는 미디어</td><td>기자 보도, 리뷰 기사, 수상 소식</td></tr>
                  <tr><td><strong>S (Shared)</strong></td><td>공유되는 소셜 미디어</td><td>SNS 공유, 사용자 후기, 바이럴 콘텐츠</td></tr>
                  <tr><td><strong>O (Owned)</strong></td><td>자사가 소유한 미디어</td><td>기업 블로그, 뉴스룸, 뉴스레터, 웹사이트</td></tr>
                </tbody>
              </table>
            </div>

            {/* ========== 2. 보도자료 작성법 ========== */}
            <h2 data-aos="fade-up">2. 보도자료 작성법</h2>
            <p>
              보도자료(Press Release)는 기업이 언론에 뉴스를 전달하기 위해 작성하는 공식 문서입니다.
              잘 작성된 보도자료는 기자가 기사를 쓸 때 바로 활용할 수 있도록 정보가 체계적으로
              구조화되어 있어야 하며, 뉴스 가치(News Value)를 명확히 전달해야 합니다.
            </p>

            <h3>보도자료 구성 요소</h3>
            <div className="callout-box">
              <h4>보도자료의 필수 구성</h4>
              <ul>
                <li><strong>엠바고/즉시 배포 표시</strong> — "즉시 배포 가능" 또는 "엠바고: YYYY년 MM월 DD일 00시"</li>
                <li><strong>헤드라인</strong> — 핵심 뉴스를 15자 내외 한 줄로 요약</li>
                <li><strong>서브 헤드라인</strong> — 헤드라인 보충 설명 (선택)</li>
                <li><strong>리드(Lead) 문단</strong> — 5W1H를 포함한 핵심 내용 (2~3문장, 가장 중요)</li>
                <li><strong>본문 1</strong> — 핵심 세부사항, 제품/서비스 상세 설명</li>
                <li><strong>인용문</strong> — CEO 또는 관계자의 직접 인용 (최소 1개)</li>
                <li><strong>본문 2</strong> — 배경 정보, 시장 맥락, 추가 데이터</li>
                <li><strong>보일러플레이트</strong> — 회사 소개 고정 문구 (3~4줄)</li>
                <li><strong>연락처</strong> — PR 담당자명, 직함, 전화번호, 이메일</li>
                <li><strong>###</strong> — 보도자료 끝 표시</li>
              </ul>
            </div>

            <h3>6하원칙 (5W1H)</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>요소</th><th>질문</th><th>예시</th><th>작성 팁</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>누가 (Who)</strong></td><td>주체는 누구인가?</td><td>"주식회사 DreamIT가"</td><td>정식 법인명 사용, 처음 등장 시 풀네임</td></tr>
                <tr><td><strong>무엇을 (What)</strong></td><td>어떤 일이 일어났는가?</td><td>"AI 기반 셀프 브랜딩 플랫폼을 출시한다"</td><td>동사를 명확하게, 핵심 행위 한 가지</td></tr>
                <tr><td><strong>언제 (When)</strong></td><td>시간/날짜는?</td><td>"2025년 4월 1일"</td><td>구체적 날짜, 필요시 시간까지 명시</td></tr>
                <tr><td><strong>어디서 (Where)</strong></td><td>장소/위치는?</td><td>"서울 강남구 본사에서"</td><td>온라인 서비스의 경우 '글로벌 출시' 등</td></tr>
                <tr><td><strong>왜 (Why)</strong></td><td>이유/배경은?</td><td>"개인 브랜딩 수요 증가에 대응"</td><td>시장 상황, 트렌드, 고객 니즈와 연결</td></tr>
                <tr><td><strong>어떻게 (How)</strong></td><td>방법/과정은?</td><td>"AI가 개인 강점을 분석하여 맞춤 전략 제공"</td><td>차별화 포인트, 기술적 특장점 강조</td></tr>
              </tbody>
            </table>

            {/* ========== 3. 미디어 릴레이션 전략 ========== */}
            <h2 data-aos="fade-up">3. 미디어 릴레이션 전략</h2>
            <p>
              PR의 성패는 기자와의 관계에 달려 있습니다. 좋은 미디어 관계는 하루아침에 만들어지지 않으며,
              지속적인 신뢰 구축과 상호 가치 교환이 필요합니다.
            </p>

            <h3>미디어 리스트 구축 및 관리</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>관리 항목</th><th>세부 내용</th><th>업데이트 주기</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>기자 기본 정보</strong></td><td>이름, 소속 매체, 담당 분야(beat), 직급</td><td>분기별</td></tr>
                <tr><td><strong>연락처</strong></td><td>이메일, 전화번호, SNS 계정 (X/Twitter, LinkedIn)</td><td>분기별</td></tr>
                <tr><td><strong>관계 기록</strong></td><td>미팅 날짜, 대화 내용, 제공 자료, 보도 이력</td><td>접촉 시마다</td></tr>
                <tr><td><strong>관심사 &amp; 선호</strong></td><td>선호하는 연락 방식, 관심 주제, 기사 스타일</td><td>반기별</td></tr>
                <tr><td><strong>매체 분류</strong></td><td>1군(주요 일간지/방송), 2군(전문 매체), 3군(온라인/블로그)</td><td>연간</td></tr>
                <tr><td><strong>이동 추적</strong></td><td>이직, 부서 이동, 퇴사 여부 확인</td><td>분기별</td></tr>
              </tbody>
            </table>

            {/* ========== 4. 위기관리 커뮤니케이션 ========== */}
            <h2 data-aos="fade-up">4. 위기관리 커뮤니케이션</h2>
            <p>
              위기(Crisis)는 예고 없이 찾아오며, 어떻게 대응하느냐에 따라 브랜드의 미래가 결정됩니다.
              위기는 위험(危)이자 기회(機)입니다. 적절한 대응은 오히려 브랜드 신뢰도를 높일 수 있지만,
              잘못된 대응은 수십 년간 쌓은 신뢰를 하루 만에 무너뜨립니다.
            </p>

            <h3>위기 유형 분류</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>예시</th><th>심각도</th><th>초기 대응 시간</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>제품/서비스 결함</strong></td><td>제품 리콜, 서비스 장애, 데이터 유출</td><td>높음</td><td>2시간 이내</td></tr>
                <tr><td><strong>경영진 이슈</strong></td><td>CEO 스캔들, 경영 비리, 갑질 논란</td><td>높음</td><td>4시간 이내</td></tr>
                <tr><td><strong>소셜 미디어 이슈</strong></td><td>부적절한 포스팅, 고객 응대 실패, 바이럴 악평</td><td>중간~높음</td><td>1시간 이내</td></tr>
                <tr><td><strong>노사 관계</strong></td><td>대량 해고, 파업, 직장 내 괴롭힘</td><td>중간~높음</td><td>24시간 이내</td></tr>
                <tr><td><strong>외부 환경</strong></td><td>자연재해, 팬데믹, 규제 변경</td><td>중간</td><td>상황에 따라</td></tr>
              </tbody>
            </table>

            <h3>위기 대응 매트릭스</h3>
            <div className="callout-box">
              <h4>4단계 위기 대응 프레임워크</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>핵심 활동</th><th>시간 프레임</th><th>담당</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 감지 (Detection)</strong></td>
                    <td>이슈 모니터링, 초기 징후 포착, 심각도 평가</td>
                    <td>실시간 모니터링</td>
                    <td>PR팀 / 모니터링 도구</td>
                  </tr>
                  <tr>
                    <td><strong>2. 분석 (Analysis)</strong></td>
                    <td>사실 확인, 영향 범위 파악, 이해관계자 매핑</td>
                    <td>1~4시간 이내</td>
                    <td>위기관리 TF</td>
                  </tr>
                  <tr>
                    <td><strong>3. 대응 (Response)</strong></td>
                    <td>공식 입장 발표, 기자회견, SNS 대응, 피해 보상</td>
                    <td>24시간 이내</td>
                    <td>대표 / PR팀 / 법무</td>
                  </tr>
                  <tr>
                    <td><strong>4. 회복 (Recovery)</strong></td>
                    <td>이미지 회복 캠페인, 재발 방지책 공표, 제도 개선</td>
                    <td>1~6개월</td>
                    <td>전사적 협력</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>사과문(공식 성명서) 작성법</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>효과적인 사과문의 5대 요소</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>잘못된 예</th><th>올바른 예</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 인정</strong></td>
                    <td>문제를 명확히 인정</td>
                    <td>"일부 불편을 드렸다면..."</td>
                    <td>"고객님께 피해를 드린 점 인정합니다"</td>
                  </tr>
                  <tr>
                    <td><strong>2. 사과</strong></td>
                    <td>진심 어린 사과 표현</td>
                    <td>"유감입니다"</td>
                    <td>"진심으로 사과드립니다"</td>
                  </tr>
                  <tr>
                    <td><strong>3. 원인 설명</strong></td>
                    <td>발생 원인 투명하게 공개</td>
                    <td>"내부 사정으로..."</td>
                    <td>"시스템 점검 미비로 인해 발생했습니다"</td>
                  </tr>
                  <tr>
                    <td><strong>4. 해결책</strong></td>
                    <td>구체적 대응 방안 제시</td>
                    <td>"최선을 다하겠습니다"</td>
                    <td>"전액 환불 및 추가 보상을 진행합니다"</td>
                  </tr>
                  <tr>
                    <td><strong>5. 재발 방지</strong></td>
                    <td>제도적 개선 약속</td>
                    <td>"다시는 일어나지 않을 것"</td>
                    <td>"품질관리 팀을 신설하고 월 2회 점검합니다"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>위기 대응 시 절대 하지 말아야 할 것</h3>
              <ul>
                <li><strong>침묵/무시</strong>: "노코멘트"는 최악의 대응입니다. 침묵은 유죄 인정으로 해석됩니다.</li>
                <li><strong>거짓말/은폐</strong>: 사실이 나중에 밝혀지면 위기가 더욱 심각해집니다.</li>
                <li><strong>책임 전가</strong>: 타인이나 외부 탓으로 돌리면 대중의 신뢰를 완전히 잃습니다.</li>
                <li><strong>감정적 대응</strong>: 분노, 방어적 태도, 공격적 반박은 상황을 악화시킵니다.</li>
                <li><strong>지연 대응</strong>: 골든 타임(24시간)을 놓치면 루머가 사실로 굳어집니다.</li>
                <li><strong>"~라면" 가정형 사과</strong>: "불편을 드렸다면 죄송합니다"는 진정한 사과가 아닙니다.</li>
              </ul>
            </div>

            {/* ========== 5. CSR & ESG 브랜딩 ========== */}
            <h2 data-aos="fade-up">5. CSR &amp; ESG 브랜딩</h2>
            <p>
              CSR(Corporate Social Responsibility)은 기업이 경제적 이익 추구를 넘어
              사회와 환경에 대한 책임을 이행하는 활동입니다. ESG(Environment, Social, Governance)
              경영이 투자 판단과 소비자 선택의 핵심 기준이 되고 있습니다.
            </p>

            <h3>ESG 경영의 3대 요소</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>요소</th><th>핵심 영역</th><th>활동 예시</th><th>측정 지표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>E (환경)</strong></td>
                  <td>탄소 배출, 재생 에너지, 폐기물 관리</td>
                  <td>탄소 중립 선언, 친환경 패키징</td>
                  <td>탄소 배출량, 재활용률</td>
                </tr>
                <tr>
                  <td><strong>S (사회)</strong></td>
                  <td>인권, 다양성, 지역사회 공헌</td>
                  <td>공정 거래, 다양성 채용, 교육 지원</td>
                  <td>다양성 비율, 산업재해율</td>
                </tr>
                <tr>
                  <td><strong>G (거버넌스)</strong></td>
                  <td>이사회 구조, 윤리 경영, 투명성</td>
                  <td>독립 이사 선임, 반부패 정책</td>
                  <td>독립이사 비율, 윤리 교육 이수율</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 6. 이벤트/행사 PR ========== */}
            <h2 data-aos="fade-up">6. 이벤트/행사 PR</h2>
            <p>
              기업 이벤트와 행사는 브랜드 인지도를 높이고, 타겟 고객과 직접 소통하며,
              미디어 노출을 확보할 수 있는 효과적인 PR 도구입니다.
            </p>

            <h3>이벤트 PR 타임라인</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>시기</th><th>활동</th><th>세부 내용</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>D-30</strong></td><td>사전 홍보 시작</td><td>티저 콘텐츠, 미디어 리스트 확정, 초대장 발송</td></tr>
                <tr><td><strong>D-14</strong></td><td>보도자료 배포</td><td>행사 개요 보도자료, 기자 초청 확인</td></tr>
                <tr><td><strong>D-7</strong></td><td>리마인더 발송</td><td>참석자 최종 확인, SNS 카운트다운</td></tr>
                <tr><td><strong>D-Day</strong></td><td>현장 운영</td><td>기자 등록 데스크, 보도자료 키트 배포</td></tr>
                <tr><td><strong>D+1</strong></td><td>사후 보도자료</td><td>행사 결과 보도자료, 사진/영상 배포</td></tr>
                <tr><td><strong>D+7</strong></td><td>후속 콘텐츠</td><td>행사 하이라이트 영상, 블로그 포스트</td></tr>
              </tbody>
            </table>

            {/* ========== 7. 온라인 PR 전략 ========== */}
            <h2 data-aos="fade-up">7. 온라인 PR 전략</h2>
            <p>
              디지털 시대의 PR은 전통 미디어만으로는 충분하지 않습니다.
              뉴스와이어, 기업 뉴스룸, 블로그 PR, 소셜 미디어 PR 등
              온라인 채널을 적극 활용해야 합니다.
            </p>

            <h3>주요 온라인 PR 채널</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>채널</th><th>특징</th><th>활용법</th><th>비용</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>뉴스와이어</strong></td><td>보도자료 온라인 배포 서비스</td><td>뉴스와이어, PR Newswire를 통한 대량 배포</td><td>유료 (건당 5~50만원)</td></tr>
                <tr><td><strong>기업 뉴스룸</strong></td><td>자사 웹사이트 내 뉴스 페이지</td><td>보도자료, 미디어 자료 상시 게시</td><td>자체 운영</td></tr>
                <tr><td><strong>블로그 PR</strong></td><td>파워블로거/인플루언서 협업</td><td>체험단, 협찬 리뷰, 공동 콘텐츠 제작</td><td>협찬 비용</td></tr>
                <tr><td><strong>SNS 커뮤니케이션</strong></td><td>실시간 소통, 바이럴 가능</td><td>공식 계정 운영, 이슈 대응, 캠페인</td><td>운영 인력비</td></tr>
              </tbody>
            </table>

            {/* ========== 8. 내부 커뮤니케이션 ========== */}
            <h2 data-aos="fade-up">8. 내부 커뮤니케이션</h2>
            <p>
              내부 커뮤니케이션은 외부 PR만큼 중요합니다. 직원이 브랜드의 첫 번째 홍보대사이기 때문입니다.
            </p>

            <div className="callout-box">
              <h3>직원 앰배서더 프로그램 (Employee Advocacy)</h3>
              <p>
                직원이 자발적으로 자사 브랜드를 SNS에서 홍보하는 프로그램입니다.
                기업 공식 계정보다 개인 계정의 콘텐츠가 8배 더 높은 인게이지먼트를 기록한다는
                연구 결과가 있습니다. 직원에게 공유할 수 있는 콘텐츠를 제공하고,
                가이드라인을 제시하되, 강제하지 않는 것이 핵심입니다.
              </p>
            </div>

            {/* ========== 9. 실습 과제 ========== */}
            <h2 data-aos="fade-up">9. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 가상 기업 보도자료 1건 작성</h3>
              <p>다음 조건을 만족하는 보도자료를 작성하세요:</p>
              <ul>
                <li>가상 기업 또는 개인 브랜드의 뉴스 (신제품 출시, 이벤트 개최, 파트너십 체결 등)</li>
                <li>6하원칙(5W1H) 완벽 포함</li>
                <li>역피라미드 구조 준수</li>
                <li>헤드라인 + 부제 + 리드 + 본문 2~3단락 + 인용문 1개 + 보일러플레이트 + 연락처</li>
                <li>A4 기준 1~2페이지 분량</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: 위기관리 시나리오</h3>
              <p>가상 기업에 발생할 수 있는 위기 시나리오를 1개 설정하고, 다음을 작성하세요:</p>
              <ul>
                <li>위기 상황 설명 (무엇이, 왜 발생했는가)</li>
                <li>4단계 대응 계획 (감지 → 분석 → 대응 → 회복)</li>
                <li>공식 사과문/성명서 초안 (5대 요소 모두 포함)</li>
                <li>SNS 대응 멘트 3가지 버전</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 C: CSR 활동 기획서</h3>
              <p>나의 브랜드에 맞는 CSR/ESG 활동 1가지를 기획하세요:</p>
              <ul>
                <li>활동명 및 목적</li>
                <li>타겟 수혜자</li>
                <li>구체적 실행 계획 (일정, 방법, 필요 자원)</li>
                <li>PR 연계 방안</li>
                <li>기대 효과 및 측정 지표</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                10주차에서는 개인 브랜딩 실전에 들어갑니다. 온라인 프레즌스 구축부터 LinkedIn 최적화,
                네트워킹 전략, 엘리베이터 피치, 사이드 프로젝트 활용법까지
                실제 퍼스널 브랜드를 구축하는 실무 전략을 집중적으로 다룹니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/midterm" className="lesson-nav-btn prev">&larr; 8주차: 중간고사</Link>
              <Link to="/lessons/personal-branding" className="lesson-nav-btn next">10주차: 개인 브랜딩 실전 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek9;

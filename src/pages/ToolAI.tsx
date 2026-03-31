import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolAI = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="AI 활용 마케팅"
        description="ChatGPT, Claude, AI 이미지 생성, 프롬프트 엔지니어링 등 AI 마케팅 완벽 가이드"
        path="/tools/ai"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>AI 활용 마케팅</h1>
          <p>생성형 AI로 마케팅 생산성을 10배 높이는 실전 AI 마케팅 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. AI 마케팅 시대 개요</h2>
            <p>
              생성형 AI(Generative AI)는 마케팅의 패러다임을 근본적으로 바꾸고 있습니다.
              콘텐츠 생성, 데이터 분석, 고객 서비스, 크리에이티브 제작까지 -- AI를 활용하면 마케팅 효율을
              획기적으로 높일 수 있습니다. AI를 도구로 활용하는 마케터와 그렇지 않은 마케터의
              생산성 격차는 5~10배에 달하며, 이 격차는 점점 벌어지고 있습니다.
            </p>

            <div className="info-box tip">
              <strong>AI 마케팅의 핵심 변화:</strong>
              <ul>
                <li><strong>콘텐츠 생산 속도:</strong> 5~10배 향상 (초안 작성 &rarr; 편집/검수에 집중)</li>
                <li><strong>데이터 분석 민주화:</strong> 비전문가도 데이터 인사이트 추출 가능</li>
                <li><strong>초개인화:</strong> 1:1 맞춤 콘텐츠 대량 생산</li>
                <li><strong>자동화:</strong> 반복 업무 자동화로 전략적 사고에 집중</li>
                <li><strong>크리에이티브 비용 절감:</strong> 이미지, 영상, 카피 제작 비용 대폭 절감</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 업무별 AI 활용 현황</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>업무 영역</th><th>AI 활용 방법</th><th>생산성 향상</th><th>추천 도구</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>콘텐츠 작성</strong></td>
                    <td>블로그, SNS, 이메일 초안 생성</td>
                    <td>5~8배</td>
                    <td>ChatGPT, Claude, Jasper</td>
                  </tr>
                  <tr>
                    <td><strong>이미지 제작</strong></td>
                    <td>마케팅 비주얼, 배너, SNS 이미지</td>
                    <td>10배+</td>
                    <td>Midjourney, DALL-E, Adobe Firefly</td>
                  </tr>
                  <tr>
                    <td><strong>데이터 분석</strong></td>
                    <td>마케팅 성과 분석, 트렌드 예측</td>
                    <td>3~5배</td>
                    <td>ChatGPT, Claude, Google Analytics AI</td>
                  </tr>
                  <tr>
                    <td><strong>고객 서비스</strong></td>
                    <td>AI 챗봇, FAQ 자동 응답</td>
                    <td>24/7 운영</td>
                    <td>Tidio, ManyChat, 카카오 i</td>
                  </tr>
                  <tr>
                    <td><strong>SEO 최적화</strong></td>
                    <td>키워드 분석, 메타 태그, 콘텐츠 최적화</td>
                    <td>3~5배</td>
                    <td>SurferSEO, Semrush AI, Frase</td>
                  </tr>
                  <tr>
                    <td><strong>영상 제작</strong></td>
                    <td>AI 아바타, 자동 자막, 숏폼 변환</td>
                    <td>5~10배</td>
                    <td>HeyGen, Vrew, Opus Clip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>2. ChatGPT/Claude 활용법</h2>
            <p>
              ChatGPT와 Claude는 마케터에게 가장 강력한 AI 도구입니다.
              텍스트 기반의 거의 모든 마케팅 업무에 활용할 수 있으며,
              프롬프트를 잘 작성할수록 더 높은 품질의 결과물을 얻을 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 활용 영역별 프롬프트 예시</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>활용 영역</th><th>구체적 활용</th><th>프롬프트 예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>블로그 글 작성</strong></td>
                    <td>초안 생성, 아웃라인 작성</td>
                    <td>"[주제]에 대한 2,000자 블로그 글을 [타겟]을 대상으로 작성해줘. H2 소제목 5개 포함"</td>
                  </tr>
                  <tr>
                    <td><strong>SNS 캡션</strong></td>
                    <td>인스타그램, 링크드인 캡션</td>
                    <td>"[제품]에 대한 인스타그램 캡션 5개 변형. CTA 포함, 150자 이내"</td>
                  </tr>
                  <tr>
                    <td><strong>이메일 작성</strong></td>
                    <td>뉴스레터, 세일즈 이메일</td>
                    <td>"[목적]을 위한 이메일. 제목줄 3가지 옵션 포함. 오픈율을 높이는 제목으로"</td>
                  </tr>
                  <tr>
                    <td><strong>광고 카피</strong></td>
                    <td>Google Ads, Meta Ads 카피</td>
                    <td>"[제품] Google 검색 광고 카피 5개. 헤드라인 30자, 설명 90자 이내"</td>
                  </tr>
                  <tr>
                    <td><strong>아이디어 생성</strong></td>
                    <td>콘텐츠 기획, 캠페인 아이디어</td>
                    <td>"[업종]의 인스타그램 릴스 아이디어 20개. 트렌드 반영, 바이럴 가능성 높은 것으로"</td>
                  </tr>
                  <tr>
                    <td><strong>번역/로컬라이제이션</strong></td>
                    <td>다국어 콘텐츠 제작</td>
                    <td>"다음 마케팅 카피를 영어/일본어로 번역. 각 문화에 맞게 자연스럽게 로컬라이즈"</td>
                  </tr>
                  <tr>
                    <td><strong>경쟁사 분석</strong></td>
                    <td>시장 리서치, SWOT 분석</td>
                    <td>"[업종]의 주요 경쟁사 5곳의 SNS 마케팅 전략을 비교 분석해줘"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>ChatGPT vs Claude 비교:</strong> ChatGPT는 다양한 플러그인, DALL-E 이미지 생성, 웹 브라우징이 강점입니다.
              Claude는 긴 문서 분석(20만+ 토큰), 정확한 지시 따르기, 뉘앙스 있는 한국어 작성이 강점입니다.
              마케팅 전략 수립과 긴 콘텐츠 작성에는 Claude, 빠른 아이디어 생성과 이미지 제작에는 ChatGPT를
              사용하는 것이 효율적입니다. 두 도구를 상황에 맞게 병행하는 것을 추천합니다.
            </div>

            <h2>3. AI 이미지 생성</h2>
            <p>
              AI 이미지 생성 도구는 텍스트 프롬프트만으로 고품질 이미지를 만들어냅니다.
              마케팅 소재, 소셜 미디어 콘텐츠, 광고 비주얼 제작에 혁신적으로 활용할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 이미지 생성 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>특징</th><th>가격</th><th>마케팅 활용</th><th>상업적 사용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Midjourney</strong></td>
                    <td>최고 품질 아트/포토 이미지</td>
                    <td>월 $10~$60</td>
                    <td>브랜드 비주얼, SNS, 광고</td>
                    <td>유료 플랜 가능</td>
                  </tr>
                  <tr>
                    <td><strong>DALL-E 3</strong></td>
                    <td>ChatGPT 통합, 텍스트 렌더링 우수</td>
                    <td>ChatGPT Plus 포함</td>
                    <td>제품 목업, 일러스트, 아이콘</td>
                    <td>생성 이미지 소유권 부여</td>
                  </tr>
                  <tr>
                    <td><strong>Stable Diffusion</strong></td>
                    <td>오픈소스, 로컬/클라우드</td>
                    <td>무료 (로컬)</td>
                    <td>대량 이미지, 맞춤 스타일</td>
                    <td>모델에 따라 다름</td>
                  </tr>
                  <tr>
                    <td><strong>Adobe Firefly</strong></td>
                    <td>상업적 안전 학습 데이터</td>
                    <td>Adobe 구독 포함</td>
                    <td>상업용 안전 이미지</td>
                    <td>완전 상업적 사용 가능</td>
                  </tr>
                  <tr>
                    <td><strong>Canva AI</strong></td>
                    <td>Canva 내 통합 AI 이미지 생성</td>
                    <td>Canva Pro 포함</td>
                    <td>SNS 콘텐츠, 배경 이미지</td>
                    <td>Canva 라이선스 하에 가능</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>AI 이미지 프롬프트 작성법:</strong>
              <ul>
                <li><strong>주제:</strong> 무엇을 그릴지 명확하게 (예: "커피를 들고 있는 비즈니스 여성")</li>
                <li><strong>스타일:</strong> 사진, 일러스트, 수채화, 미니멀 등 (예: "35mm 필름 사진 스타일")</li>
                <li><strong>분위기:</strong> 밝은, 따뜻한, 전문적인, 모던한 등</li>
                <li><strong>색감:</strong> 파스텔톤, 무채색, 네온 등</li>
                <li><strong>구도:</strong> 클로즈업, 전신, 새의 눈 뷰, 평면 등</li>
                <li><strong>품질:</strong> "고해상도", "8K", "상세한" 등 품질 키워드 추가</li>
              </ul>
            </div>

            <h2>4. AI 마케팅 자동화</h2>
            <p>
              AI와 자동화 도구를 결합하면 반복적인 마케팅 업무를 자동으로 처리할 수 있습니다.
              챗봇, 이메일 자동화, 고객 세분화까지 AI가 마케팅 파이프라인 전반을 혁신합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 마케팅 자동화 영역</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>AI 활용 방법</th><th>도구</th><th>기대 효과</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AI 챗봇</strong></td>
                    <td>24/7 고객 응대, FAQ, 리드 수집</td>
                    <td>Tidio, ManyChat, 카카오 i</td>
                    <td>CS 비용 30% 절감, 응답 시간 80% 단축</td>
                  </tr>
                  <tr>
                    <td><strong>이메일 자동화</strong></td>
                    <td>행동 기반 자동 발송, 개인화</td>
                    <td>ActiveCampaign, Mailchimp AI</td>
                    <td>오픈율 26% 향상, 전환율 2배</td>
                  </tr>
                  <tr>
                    <td><strong>고객 세분화</strong></td>
                    <td>AI 기반 자동 고객 그룹 분류</td>
                    <td>HubSpot, Segment</td>
                    <td>타겟팅 정확도 향상, LTV 증가</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 스케줄링</strong></td>
                    <td>최적 게시 시간 AI 추천, 자동 게시</td>
                    <td>Buffer, Hootsuite, Later</td>
                    <td>참여율 15~25% 향상</td>
                  </tr>
                  <tr>
                    <td><strong>워크플로 자동화</strong></td>
                    <td>앱 간 연동, 반복 작업 자동화</td>
                    <td>Zapier, Make, n8n</td>
                    <td>업무 시간 40~60% 절약</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>마케팅 자동화 워크플로 예시:</strong>
              <ol>
                <li>블로그 글 발행 (WordPress)</li>
                <li>&rarr; Zapier가 감지하여 ChatGPT API로 SNS 캡션 자동 생성</li>
                <li>&rarr; Instagram, LinkedIn에 자동 포스팅 (Buffer)</li>
                <li>&rarr; 뉴스레터 구독자에게 새 글 알림 이메일 발송 (Mailchimp)</li>
                <li>&rarr; Google Sheet에 성과 데이터 자동 기록</li>
              </ol>
            </div>

            <h2>5. AI SEO 도구 활용</h2>
            <p>
              AI SEO 도구는 키워드 분석, 콘텐츠 최적화, 경쟁사 분석을 자동화하여
              검색엔진 노출을 극대화합니다. 수동으로 수 시간이 걸리던 SEO 작업을 분 단위로 줄여줍니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI SEO 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>핵심 기능</th><th>가격</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>SurferSEO</strong></td>
                    <td>콘텐츠 점수, 키워드 밀도, SERP 분석</td>
                    <td>월 $89~</td>
                    <td>콘텐츠 마케터, 블로거</td>
                  </tr>
                  <tr>
                    <td><strong>Frase</strong></td>
                    <td>AI 콘텐츠 브리프, 질문 분석, 아웃라인</td>
                    <td>월 $15~</td>
                    <td>SEO 입문자, 소규모 팀</td>
                  </tr>
                  <tr>
                    <td><strong>Semrush AI</strong></td>
                    <td>종합 SEO, 경쟁사 분석, AI 글쓰기</td>
                    <td>월 $130~</td>
                    <td>마케팅 에이전시, 대규모 사이트</td>
                  </tr>
                  <tr>
                    <td><strong>ChatGPT/Claude</strong></td>
                    <td>메타 태그 작성, 키워드 아이디어, 콘텐츠 구조</td>
                    <td>무료~월 $20</td>
                    <td>모든 마케터 (범용)</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>AI 검색, 소스 기반 리서치</td>
                    <td>무료~월 $20</td>
                    <td>시장 리서치, 트렌드 분석</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>AI + SEO 실전 활용법:</strong> ChatGPT/Claude로 타겟 키워드 리스트를 생성하고,
              SurferSEO로 콘텐츠 점수를 확인하며 글을 작성합니다.
              AI로 초안을 빠르게 만들고, 개인의 전문 지식과 경험을 추가하여 차별화된 콘텐츠를 완성하세요.
              AI가 생성한 콘텐츠만으로는 검색 엔진에서 상위 노출이 어렵습니다.
              고유한 인사이트와 경험이 담겨야 진정한 SEO 효과를 얻을 수 있습니다.
            </div>

            <h2>6. AI 데이터 분석</h2>
            <p>
              AI 기반 데이터 분석은 방대한 마케팅 데이터에서 인사이트를 빠르게 추출하고,
              사람이 놓치기 쉬운 패턴과 트렌드를 발견합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 데이터 분석 활용 분야</h3>
              <ul>
                <li><strong>트렌드 예측:</strong> 과거 데이터 기반 미래 수요, 검색 트렌드, 시즌 패턴 예측. 재고 관리, 캠페인 타이밍에 활용</li>
                <li><strong>고객 행동 분석:</strong> 구매 패턴, 이탈 시점, 선호 채널 자동 분석. 개인화 마케팅의 기반</li>
                <li><strong>감성 분석:</strong> SNS, 리뷰에서 고객 감정(긍정/부정/중립) 자동 분류. 브랜드 평판 모니터링</li>
                <li><strong>이탈 예측:</strong> 이탈 가능성 높은 고객을 사전 식별하여 리텐션 캠페인 자동 실행</li>
                <li><strong>콘텐츠 성과 예측:</strong> 발행 전 콘텐츠의 예상 성과(참여율, 도달)를 AI가 예측</li>
                <li><strong>광고 예산 최적화:</strong> AI가 채널별 성과를 분석하여 최적 예산 배분 추천</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>ChatGPT/Claude로 데이터 분석하기:</strong>
              <ul>
                <li>Google Analytics 데이터를 CSV로 추출하여 AI에게 분석 요청</li>
                <li>"지난 3개월 트래픽 데이터를 분석하여 주요 인사이트 5개를 뽑아줘"</li>
                <li>"이 광고 성과 데이터에서 ROAS를 높이기 위한 액션 아이템 3개를 제안해줘"</li>
                <li>Excel/CSV 파일을 직접 첨부하여 차트, 피벗 테이블 생성 요청 가능</li>
              </ul>
            </div>

            <h2>7. AI 윤리와 주의사항</h2>
            <p>
              AI 도구를 마케팅에 활용할 때는 윤리적 가이드라인을 지키는 것이 중요합니다.
              투명성과 책임감 있는 AI 활용이 장기적인 브랜드 신뢰를 구축합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 윤리 가이드라인</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>영역</th><th>주의사항</th><th>실천 방법</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>저작권</strong></td>
                    <td>AI 생성물의 저작권은 법적으로 불확실</td>
                    <td>Adobe Firefly 등 상업적 안전 도구 사용, 라이선스 확인</td>
                  </tr>
                  <tr>
                    <td><strong>팩트체크</strong></td>
                    <td>AI는 사실과 다른 정보를 생성할 수 있음 (할루시네이션)</td>
                    <td>AI 생성 정보는 반드시 사실 확인 후 사용</td>
                  </tr>
                  <tr>
                    <td><strong>편향성</strong></td>
                    <td>학습 데이터의 편향이 결과물에 반영</td>
                    <td>성별, 인종, 문화적 편향 검토. 다양성 확보</td>
                  </tr>
                  <tr>
                    <td><strong>투명성</strong></td>
                    <td>AI 생성 콘텐츠임을 알려야 하는 경우 존재</td>
                    <td>딥페이크, AI 이미지는 명확한 라벨링</td>
                  </tr>
                  <tr>
                    <td><strong>개인정보</strong></td>
                    <td>고객 데이터를 AI에 입력하면 유출 위험</td>
                    <td>개인식별 정보는 AI에 입력하지 않기. 데이터 처리 정책 확인</td>
                  </tr>
                  <tr>
                    <td><strong>과의존</strong></td>
                    <td>AI에 과도하게 의존하면 창의성 저하</td>
                    <td>AI는 효율화 도구로 활용, 최종 판단은 사람이</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>AI 마케팅 주의사항:</strong>
              <ul>
                <li>AI 생성 콘텐츠를 그대로 사용하면 차별화 불가능. 반드시 개인의 경험과 인사이트 추가</li>
                <li>AI가 작성한 수치, 통계, 인용은 원본 소스에서 반드시 확인</li>
                <li>AI 도구의 이용약관 확인 필수 -- 입력 데이터가 학습에 사용될 수 있음</li>
                <li>Google은 AI 생성 콘텐츠 자체를 패널티 대상으로 보지 않지만, 품질이 낮은 콘텐츠는 불이익</li>
                <li>경쟁사도 같은 AI를 사용하므로, AI + 인간 전문성의 조합이 핵심 차별점</li>
              </ul>
            </div>

            <h2>8. AI 프롬프트 엔지니어링</h2>
            <p>
              프롬프트 엔지니어링은 AI에게 정확하고 유용한 결과물을 얻기 위한 입력 기술입니다.
              같은 AI 도구라도 프롬프트를 어떻게 작성하느냐에 따라 결과물의 품질이 크게 달라집니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>프롬프트 작성 공식 (CRISP)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>C - Context (맥락)</strong></td>
                    <td>배경 정보, 상황 설명</td>
                    <td>"우리 회사는 친환경 화장품 브랜드로, 2030 여성이 타겟이야"</td>
                  </tr>
                  <tr>
                    <td><strong>R - Role (역할)</strong></td>
                    <td>AI에게 부여할 전문가 역할</td>
                    <td>"너는 10년 경력의 뷰티 마케팅 전문가야"</td>
                  </tr>
                  <tr>
                    <td><strong>I - Instruction (지시)</strong></td>
                    <td>구체적인 작업 내용</td>
                    <td>"인스타그램 릴스 콘텐츠 아이디어 10개를 만들어줘"</td>
                  </tr>
                  <tr>
                    <td><strong>S - Style (스타일)</strong></td>
                    <td>톤, 길이, 형식 지정</td>
                    <td>"친근하고 캐주얼한 톤으로, 각 아이디어는 2~3문장"</td>
                  </tr>
                  <tr>
                    <td><strong>P - Parameters (제약)</strong></td>
                    <td>조건, 금지사항, 포함사항</td>
                    <td>"과학적 근거 포함, 과장 광고 금지, 해시태그 5개씩"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 전문 프롬프트 예시 모음</h3>
              <ul>
                <li><strong>콘텐츠 캘린더:</strong> "다음 달 인스타그램 콘텐츠 캘린더를 만들어줘. 주 5회 게시, 교육 40% / 관계 30% / 영감 20% / 프로모션 10% 비율. [업종] 타겟, 표 형태로"</li>
                <li><strong>페르소나 작성:</strong> "[제품/서비스]의 이상적인 고객 페르소나 3개를 만들어줘. 이름, 나이, 직업, 목표, 고민, 미디어 습관, 구매 트리거 포함"</li>
                <li><strong>SWOT 분석:</strong> "[업종/브랜드]의 디지털 마케팅 관점에서 SWOT 분석을 해줘. 각 항목 3~5개, 구체적 예시 포함"</li>
                <li><strong>A/B 테스트 아이디어:</strong> "이메일 마케팅 성과를 개선하기 위한 A/B 테스트 아이디어 10개. 테스트 변수, 가설, 예상 영향 포함"</li>
                <li><strong>광고 카피 변형:</strong> "다음 광고 카피를 PAS, AIDA, BAB 공식으로 각각 3가지 변형을 만들어줘: [원본 카피]"</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>프롬프트 최적화 팁:</strong>
              <ul>
                <li><strong>구체적으로:</strong> "좋은 마케팅 전략" 대신 "B2B SaaS의 월 100만원 예산 3개월 마케팅 전략"</li>
                <li><strong>예시 제공:</strong> 원하는 결과물의 예시를 1~2개 보여주면 품질 향상</li>
                <li><strong>단계별 요청:</strong> 복잡한 작업은 여러 단계로 나누어 순차적으로 요청</li>
                <li><strong>피드백 반복:</strong> 첫 결과가 완벽하지 않으면 수정 요청을 반복하여 개선</li>
                <li><strong>출력 형식 지정:</strong> "표 형태로", "불릿 포인트로", "마크다운으로" 등 원하는 형식 명시</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습: AI로 마케팅 콘텐츠 패키지 제작</h3>
              <p>AI 도구를 활용하여 하나의 주제로 통합된 마케팅 콘텐츠 패키지를 제작해 보세요.</p>
              <ol>
                <li><strong>주제 선정:</strong> 마케팅할 제품/서비스/주제 1개 선정</li>
                <li><strong>블로그 글 (ChatGPT/Claude):</strong> CRISP 공식을 적용한 프롬프트로 2,000자 블로그 초안 생성. 개인의 인사이트를 추가하여 편집</li>
                <li><strong>SNS 캡션 5종 (ChatGPT/Claude):</strong> 인스타그램 3개 + 링크드인 2개 캡션 생성</li>
                <li><strong>이메일 뉴스레터 (ChatGPT/Claude):</strong> 블로그 글 기반 뉴스레터 1통 작성. 제목줄 A/B 테스트용 3개 포함</li>
                <li><strong>SNS 이미지 3종 (Midjourney/DALL-E/Canva AI):</strong> 블로그 글에 맞는 인스타그램 이미지 3종 생성</li>
                <li><strong>광고 카피 (ChatGPT/Claude):</strong> Google 검색 광고 카피 3종 + Meta 광고 카피 3종 작성</li>
                <li><strong>데이터 분석 요청 (ChatGPT/Claude):</strong> 가상의 마케팅 데이터를 제공하고 인사이트 분석 요청</li>
                <li><strong>윤리 검토:</strong> 모든 AI 생성 콘텐츠의 팩트체크, 편향성, 저작권 검토 완료</li>
              </ol>
              <p><strong>제출물:</strong> 블로그 1편 + SNS 캡션 5종 + 이메일 1통 + 이미지 3종 + 광고 카피 6종 + 사용한 프롬프트 목록</p>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/design" className="lesson-nav-btn prev">&larr; 디자인 도구</Link>
              <Link to="/tools" className="lesson-nav-btn next">마케팅 도구 목록 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolAI;

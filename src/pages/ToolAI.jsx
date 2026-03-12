import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolAI = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="AI 활용 마케팅"
        description="ChatGPT, AI 이미지, 자동화 도구를 활용한 마케팅 효율화 전략 가이드"
        path="/tools/ai"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>AI 활용 마케팅</h1>
          <p>AI가 바꾸는 마케팅 패러다임, 실전에서 바로 쓸 수 있는 AI 마케팅 도구 활용법</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. AI 마케팅 개요</h2>
            <p>
              인공지능(AI)은 마케팅의 패러다임을 근본적으로 바꾸고 있습니다. 콘텐츠 생성, 데이터 분석,
              고객 서비스, 크리에이티브 제작까지 — AI를 활용하면 마케팅 효율을 획기적으로 높일 수 있습니다.
              AI를 도구로 활용하는 마케터와 그렇지 않은 마케터의 생산성 격차는 점점 벌어지고 있습니다.
            </p>

            <div className="info-box tip">
              <strong>AI 마케팅의 핵심 변화:</strong>
              <ul>
                <li>콘텐츠 생산 속도 5~10배 향상 (초안 작성 → 편집/검수에 집중)</li>
                <li>데이터 기반 의사결정의 민주화 (비전문가도 데이터 분석 가능)</li>
                <li>초개인화 마케팅 구현 (1:1 맞춤 콘텐츠 대량 생산)</li>
                <li>반복 업무 자동화로 전략적 사고에 집중할 시간 확보</li>
                <li>크리에이티브 제작 비용 대폭 절감</li>
              </ul>
            </div>

            <h2>2. ChatGPT 활용</h2>
            <p>
              ChatGPT(그리고 Claude 등 대형 언어 모델)는 마케터에게 가장 강력한 AI 도구입니다.
              다양한 마케팅 업무에 활용하여 생산성을 극대화할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>마케팅 활용 영역별 프롬프트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>활용 영역</th><th>구체적 활용</th><th>프롬프트 예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>콘텐츠 생성</strong></td>
                    <td>블로그 초안, 기획안 작성</td>
                    <td>"[주제]에 대한 2,000자 블로그 글을 [타겟]을 대상으로 작성해줘. H2 소제목 5개 포함"</td>
                  </tr>
                  <tr>
                    <td><strong>SNS 캡션</strong></td>
                    <td>인스타그램, 링크드인 캡션</td>
                    <td>"[제품/서비스]에 대한 인스타그램 캡션 5개 변형을 만들어줘. 이모지 포함, CTA 포함"</td>
                  </tr>
                  <tr>
                    <td><strong>이메일 초안</strong></td>
                    <td>뉴스레터, 세일즈 이메일</td>
                    <td>"[목적]을 위한 이메일을 작성해줘. 제목줄 3가지 옵션 포함. 오픈률을 높이는 제목으로"</td>
                  </tr>
                  <tr>
                    <td><strong>고객 응대</strong></td>
                    <td>FAQ 답변, 리뷰 응답</td>
                    <td>"다음 고객 불만에 대한 공감적이고 해결 중심의 응답을 작성해줘: [불만 내용]"</td>
                  </tr>
                  <tr>
                    <td><strong>전략 수립</strong></td>
                    <td>마케팅 전략, SWOT 분석</td>
                    <td>"[업종]의 [목표]를 위한 3개월 마케팅 전략을 수립해줘. 예산 [금액], 타겟 [대상]"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>효과적인 프롬프트 작성법 (CRISP 공식):</strong>
              <ul>
                <li><strong>Context (맥락):</strong> 배경 정보와 상황 설명</li>
                <li><strong>Role (역할):</strong> AI에게 부여할 역할 (예: "너는 10년 경력의 마케팅 전문가야")</li>
                <li><strong>Instruction (지시):</strong> 구체적인 작업 내용</li>
                <li><strong>Style (스타일):</strong> 톤, 길이, 형식 지정</li>
                <li><strong>Parameters (제약):</strong> 조건, 금지사항, 포함사항</li>
              </ul>
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
                  <tr><th>도구</th><th>특징</th><th>가격</th><th>마케팅 활용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Midjourney</strong></td>
                    <td>최고 품질 아트 이미지, Discord 기반</td>
                    <td>월 $10~$60</td>
                    <td>브랜드 비주얼, SNS 이미지, 광고 소재</td>
                  </tr>
                  <tr>
                    <td><strong>DALL-E (OpenAI)</strong></td>
                    <td>ChatGPT 통합, 텍스트 렌더링 우수</td>
                    <td>ChatGPT Plus 내 포함</td>
                    <td>제품 목업, 일러스트, 아이콘</td>
                  </tr>
                  <tr>
                    <td><strong>Stable Diffusion</strong></td>
                    <td>오픈소스, 로컬 설치 가능, 커스터마이징</td>
                    <td>무료 (로컬) / API 과금</td>
                    <td>대량 이미지 생성, 맞춤 스타일</td>
                  </tr>
                  <tr>
                    <td><strong>Adobe Firefly</strong></td>
                    <td>Adobe 통합, 상업적 안전한 학습 데이터</td>
                    <td>Adobe 구독 포함</td>
                    <td>상업용 안전 이미지, Photoshop 연동</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>AI 이미지 프롬프트 팁:</strong>
              <ul>
                <li>주제 + 스타일 + 분위기 + 색감 + 구도를 명시하세요</li>
                <li>예시: "밝은 자연광에서 노트북으로 일하는 젊은 여성, 미니멀 카페 배경, 따뜻한 톤, 35mm 사진 스타일"</li>
                <li>부정 프롬프트(네거티브 프롬프트)로 원하지 않는 요소 제거</li>
                <li>생성된 이미지를 Canva나 Photoshop에서 후보정하면 퀄리티 향상</li>
              </ul>
            </div>

            <h2>4. AI 영상 제작</h2>
            <p>
              AI 영상 제작 도구는 영상 마케팅의 진입 장벽을 크게 낮추었습니다.
              촬영 없이도 전문적인 영상 콘텐츠를 제작할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 영상 도구</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>기능</th><th>활용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Runway</strong></td>
                    <td>텍스트/이미지 → 영상 생성, AI 편집</td>
                    <td>광고 영상, 소셜 미디어 콘텐츠</td>
                  </tr>
                  <tr>
                    <td><strong>Sora (OpenAI)</strong></td>
                    <td>고품질 텍스트 → 영상 생성</td>
                    <td>브랜드 스토리, 프로모션 영상</td>
                  </tr>
                  <tr>
                    <td><strong>HeyGen</strong></td>
                    <td>AI 아바타 영상, 다국어 더빙</td>
                    <td>교육 영상, 제품 설명, 글로벌 마케팅</td>
                  </tr>
                  <tr>
                    <td><strong>Vrew</strong></td>
                    <td>AI 자동 자막, 텍스트 기반 영상 편집</td>
                    <td>유튜브/릴스 자막, 편집 자동화</td>
                  </tr>
                  <tr>
                    <td><strong>Opus Clip</strong></td>
                    <td>긴 영상 → 숏폼 자동 클립 생성</td>
                    <td>유튜브 → 릴스/쇼츠 변환</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>5. 마케팅 자동화</h2>
            <p>
              AI와 자동화 도구를 결합하면 반복적인 마케팅 업무를 자동으로 처리할 수 있습니다.
              시간을 절약하고 실수를 줄이며, 전략적 업무에 집중할 수 있게 됩니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>자동화 도구와 활용 사례</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>특징</th><th>마케팅 자동화 예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Zapier</strong></td>
                    <td>6,000+ 앱 연동, 노코드 자동화</td>
                    <td>폼 제출 → CRM 등록 → 웰컴 이메일 발송</td>
                  </tr>
                  <tr>
                    <td><strong>Make (Integromat)</strong></td>
                    <td>시각적 워크플로우, 복잡한 로직 지원</td>
                    <td>SNS 예약 → 크로스 포스팅 → 성과 리포트</td>
                  </tr>
                  <tr>
                    <td><strong>n8n</strong></td>
                    <td>오픈소스, 셀프 호스팅 가능</td>
                    <td>AI 콘텐츠 생성 → 검토 → 발행 파이프라인</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>마케팅 자동화 워크플로우 예시:</strong>
              <ol>
                <li>블로그 글 발행 (WordPress)</li>
                <li>→ Zapier가 감지하여 ChatGPT로 SNS 캡션 자동 생성</li>
                <li>→ 인스타그램, 링크드인에 자동 포스팅 (Buffer/Later)</li>
                <li>→ 뉴스레터 구독자에게 새 글 알림 이메일 발송 (Mailchimp)</li>
                <li>→ Google Sheet에 성과 데이터 자동 기록</li>
              </ol>
            </div>

            <h2>6. AI 분석</h2>
            <p>
              AI 기반 분석 도구는 방대한 데이터에서 인사이트를 빠르게 추출하고,
              사람이 놓치기 쉬운 패턴을 발견합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 분석 활용 분야</h3>
              <ul>
                <li><strong>감성 분석 (Sentiment Analysis):</strong> 소셜 미디어, 리뷰에서 고객의 감정(긍정/부정/중립)을 자동 분류. 브랜드 평판 모니터링에 활용</li>
                <li><strong>트렌드 예측:</strong> 과거 데이터를 기반으로 미래 수요, 검색 트렌드, 시즌 패턴 예측</li>
                <li><strong>고객 세분화:</strong> AI가 구매 행동, 인구통계, 관심사를 분석하여 자동으로 고객 그룹 분류</li>
                <li><strong>이탈 예측:</strong> 이탈 가능성이 높은 고객을 사전에 식별하여 리텐션 캠페인 실행</li>
                <li><strong>콘텐츠 성과 예측:</strong> 발행 전 콘텐츠의 예상 성과(참여율, 도달)를 AI가 예측</li>
              </ul>
            </div>

            <h2>7. AI 챗봇</h2>
            <p>
              AI 챗봇은 24/7 고객 서비스를 자동화하고, 리드 수집, FAQ 응답,
              제품 추천까지 다양한 마케팅 기능을 수행합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>AI 챗봇 활용 사례</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>활용</th><th>설명</th><th>기대 효과</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>고객 서비스 자동화</strong></td>
                    <td>자주 묻는 질문 자동 응답, 티켓 분류</td>
                    <td>응답 시간 80% 단축, CS 비용 30% 절감</td>
                  </tr>
                  <tr>
                    <td><strong>리드 수집</strong></td>
                    <td>대화를 통한 자연스러운 정보 수집</td>
                    <td>리드 생성 2~3배 증가</td>
                  </tr>
                  <tr>
                    <td><strong>제품 추천</strong></td>
                    <td>고객 니즈 파악 후 맞춤 제품 추천</td>
                    <td>전환율 20~30% 향상</td>
                  </tr>
                  <tr>
                    <td><strong>예약/주문</strong></td>
                    <td>챗봇을 통한 예약, 주문 처리</td>
                    <td>운영 효율 40% 개선</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>챗봇 구축 도구:</strong>
              <ul>
                <li><strong>Tidio:</strong> 웹사이트용 AI 챗봇, 라이브챗 통합. 월 $29~</li>
                <li><strong>ManyChat:</strong> 인스타그램/페이스북 DM 자동화. 무료~월 $15</li>
                <li><strong>Chatfuel:</strong> 노코드 챗봇 빌더, GPT 연동. 월 $15~</li>
                <li><strong>카카오 i 오픈빌더:</strong> 카카오톡 챗봇 구축. 무료</li>
              </ul>
            </div>

            <h2>8. 윤리적 AI 활용</h2>
            <p>
              AI 도구를 마케팅에 활용할 때는 윤리적 가이드라인을 지키는 것이 중요합니다.
              투명성과 책임감 있는 AI 활용이 장기적인 브랜드 신뢰를 구축합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>윤리적 AI 활용 가이드라인</h3>
              <ul>
                <li><strong>AI 콘텐츠 표시:</strong> AI로 생성된 콘텐츠임을 적절히 표시. 특히 딥페이크, AI 이미지는 명확한 라벨링</li>
                <li><strong>저작권 준수:</strong> AI 생성 이미지/텍스트의 저작권은 아직 법적으로 불확실한 영역. 상업적 사용 시 라이선스 확인 필수</li>
                <li><strong>편향 주의:</strong> AI 모델은 학습 데이터의 편향을 반영할 수 있음. 성별, 인종, 문화적 편향 검토</li>
                <li><strong>사실 확인:</strong> AI가 생성한 정보는 반드시 팩트체크. 할루시네이션(거짓 정보 생성) 주의</li>
                <li><strong>개인정보 보호:</strong> AI 도구에 고객 개인정보를 입력하지 않도록 주의. 데이터 처리 정책 확인</li>
                <li><strong>인간적 터치:</strong> AI 생성 콘텐츠를 그대로 사용하지 말고, 브랜드 톤과 개성을 담아 편집</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>주의할 점:</strong>
              <ul>
                <li>AI는 도구이지 대체물이 아닙니다. 최종 판단과 창의적 방향은 사람이 결정</li>
                <li>AI 생성 콘텐츠만으로는 차별화가 어렵습니다. 개인의 경험과 인사이트를 반드시 추가하세요</li>
                <li>AI 도구의 이용약관을 확인하세요. 입력한 데이터가 학습에 사용될 수 있습니다</li>
                <li>과도한 AI 의존은 창의성을 저하시킬 수 있습니다. AI는 효율화 도구로 활용하세요</li>
              </ul>
            </div>

            <h2>9. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th><th>추천 용도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ChatGPT</strong></td>
                    <td>텍스트 생성, 분석, 코딩, 번역</td>
                    <td>무료~월 $20</td>
                    <td>콘텐츠 작성, 전략 수립</td>
                  </tr>
                  <tr>
                    <td><strong>Claude</strong></td>
                    <td>긴 문서 분석, 정확한 텍스트 생성</td>
                    <td>무료~월 $20</td>
                    <td>리서치, 분석, 전략 문서</td>
                  </tr>
                  <tr>
                    <td><strong>Midjourney</strong></td>
                    <td>고품질 AI 이미지 생성</td>
                    <td>월 $10~$60</td>
                    <td>마케팅 비주얼, SNS 이미지</td>
                  </tr>
                  <tr>
                    <td><strong>Zapier</strong></td>
                    <td>앱 간 자동화, 워크플로우 구축</td>
                    <td>무료~월 $29.99</td>
                    <td>마케팅 자동화, 데이터 연동</td>
                  </tr>
                  <tr>
                    <td><strong>Jasper</strong></td>
                    <td>마케팅 특화 AI 카피라이팅</td>
                    <td>월 $49~</td>
                    <td>광고 카피, 블로그, 이메일</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>AI 검색 엔진, 소스 기반 리서치</td>
                    <td>무료~월 $20</td>
                    <td>시장 리서치, 경쟁사 분석</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/design" className="lesson-nav-btn prev">← 디자인 도구</Link>
              <Link to="/tools" className="lesson-nav-btn next">마케팅 도구 홈 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolAI;

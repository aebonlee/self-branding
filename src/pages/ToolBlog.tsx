import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolBlog = () => {
  useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="블로그 & SEO 마케팅"
        description="블로그 운영과 검색엔진 최적화를 통한 콘텐츠 마케팅 전략 가이드"
        path="/tools/blog"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>블로그 &amp; SEO 마케팅</h1>
          <p>검색 유입의 힘으로 장기적인 마케팅 자산을 구축하는 블로그 &amp; SEO 전략</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 블로그 마케팅 개요</h2>
            <p>
              블로그 마케팅은 가장 오래된 디지털 마케팅 채널 중 하나이면서도, 여전히 가장 효과적인 채널입니다.
              검색 엔진을 통한 유입은 SNS와 달리 콘텐츠가 삭제되지 않는 한 지속적으로 트래픽을 발생시키는
              장기적 자산입니다.
            </p>

            <div className="info-box tip">
              <strong>블로그 마케팅의 장점:</strong>
              <ul>
                <li>검색 유입: 한 번 작성한 글이 수년간 지속적으로 방문자를 유입</li>
                <li>전문성 구축: 깊이 있는 콘텐츠로 해당 분야 전문가로 인식</li>
                <li>다양한 수익화: 애드센스, 제휴 마케팅, 스폰서 포스트, 디지털 제품 판매</li>
                <li>콘텐츠 재활용: 블로그 글을 SNS, 뉴스레터, 영상 대본으로 변환 가능</li>
              </ul>
            </div>

            <h2>2. 블로그 플랫폼 선택</h2>
            <p>
              목적과 기술 수준에 맞는 플랫폼을 선택하는 것이 중요합니다.
              국내와 해외 플랫폼의 특성을 비교해 보겠습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>블로그 플랫폼 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>플랫폼</th><th>특징</th><th>SEO 효과</th><th>수익화</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>네이버 블로그</strong></td>
                    <td>국내 최대 검색 점유율, 쉬운 운영</td>
                    <td>네이버 검색 유리</td>
                    <td>체험단, 원고료</td>
                    <td>국내 타겟, 초보자</td>
                  </tr>
                  <tr>
                    <td><strong>티스토리</strong></td>
                    <td>구글 SEO 유리, 높은 자유도</td>
                    <td>Google 검색 유리</td>
                    <td>애드센스, 제휴</td>
                    <td>수익화 목적, 중급자</td>
                  </tr>
                  <tr>
                    <td><strong>브런치</strong></td>
                    <td>카카오 연동, 작가 선발제</td>
                    <td>다음/카카오 노출</td>
                    <td>출판, 연재</td>
                    <td>글쓰기 전문가</td>
                  </tr>
                  <tr>
                    <td><strong>WordPress</strong></td>
                    <td>완전한 커스터마이징, 플러그인</td>
                    <td>최고 수준 SEO</td>
                    <td>모든 방식 가능</td>
                    <td>전문 블로거, 기업</td>
                  </tr>
                  <tr>
                    <td><strong>Medium</strong></td>
                    <td>영어권 글로벌 플랫폼</td>
                    <td>도메인 권한 높음</td>
                    <td>파트너 프로그램</td>
                    <td>글로벌 타겟</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>플랫폼 선택 팁:</strong> 한 가지 플랫폼에 집중하되, 타겟에 따라 네이버 블로그(국내 일반인)
              + 티스토리(Google 유입) 조합을 추천합니다. WordPress는 기술적 자유도가 높지만 초기 학습이 필요합니다.
            </div>

            <h2>3. SEO 글쓰기</h2>
            <p>
              SEO(Search Engine Optimization) 글쓰기는 검색엔진에서 상위에 노출되는 글을 작성하는 기술입니다.
              단순히 키워드를 넣는 것이 아니라, 사용자의 검색 의도에 맞는 양질의 콘텐츠를 제공하는 것이 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>SEO 글쓰기 체크리스트</h3>
              <ol>
                <li><strong>키워드 리서치:</strong> Google 키워드 플래너, 네이버 키워드 도구로 검색량/경쟁도 분석</li>
                <li><strong>제목 최적화:</strong> 핵심 키워드를 앞쪽에 배치, 60자 이내, 클릭 유도 문구</li>
                <li><strong>메타 설명:</strong> 155자 이내로 글의 핵심 가치 요약, 키워드 포함</li>
                <li><strong>URL 구조:</strong> 짧고 의미 있는 URL, 키워드 포함 (예: /seo-writing-guide)</li>
                <li><strong>내부 링크:</strong> 관련 글로 자연스럽게 연결, 앵커 텍스트에 키워드 포함</li>
                <li><strong>외부 링크:</strong> 신뢰할 수 있는 소스로의 링크는 SEO에 도움</li>
              </ol>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> 키워드 스터핑(Keyword Stuffing)은 검색엔진 패널티를 받을 수 있습니다.
              키워드 밀도는 전체 글의 1~2%가 적절하며, 자연스러운 문맥에서 사용하세요.
            </div>

            <h2>4. 콘텐츠 구조</h2>
            <p>
              잘 구조화된 콘텐츠는 독자와 검색엔진 모두에게 좋습니다.
              HTML 헤딩 태그를 올바르게 활용하면 SEO 효과를 극대화할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>헤딩 태그 활용법</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>태그</th><th>용도</th><th>SEO 영향</th></tr>
                </thead>
                <tbody>
                  <tr><td>H1</td><td>글 제목 (페이지당 1개)</td><td>매우 높음</td></tr>
                  <tr><td>H2</td><td>주요 섹션 제목</td><td>높음</td></tr>
                  <tr><td>H3</td><td>하위 섹션 제목</td><td>중간</td></tr>
                  <tr><td>H4~H6</td><td>세부 항목</td><td>낮음</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>콘텐츠 구조 팁:</strong>
              <ul>
                <li>목차(Table of Contents)를 글 상단에 배치하여 UX 향상</li>
                <li>이미지에 alt 텍스트 반드시 추가 (키워드 포함)</li>
                <li>이미지 파일명도 의미 있게 작성 (IMG_001.jpg 대신 seo-guide-structure.jpg)</li>
                <li>글 길이는 최소 1,500자 이상 (심층 가이드는 3,000~5,000자)</li>
                <li>단락을 짧게 나누고 불릿 포인트를 적극 활용</li>
              </ul>
            </div>

            <h2>5. 블로그 수익화</h2>
            <p>
              블로그를 통한 수익 창출은 여러 방법이 있으며, 트래픽 규모와 분야에 따라 적절한 전략을 선택해야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>수익화 방법 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>방법</th><th>시작 조건</th><th>수익 잠재력</th><th>난이도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Google 애드센스</strong></td>
                    <td>양질의 콘텐츠 20+ 글</td>
                    <td>일 방문 1,000명 기준 월 5~30만원</td>
                    <td>초급</td>
                  </tr>
                  <tr>
                    <td><strong>제휴 마케팅</strong></td>
                    <td>제휴 프로그램 가입</td>
                    <td>구매당 3~30% 커미션</td>
                    <td>중급</td>
                  </tr>
                  <tr>
                    <td><strong>스폰서 포스트</strong></td>
                    <td>일정 수준의 트래픽</td>
                    <td>건당 10만~100만원+</td>
                    <td>중급</td>
                  </tr>
                  <tr>
                    <td><strong>디지털 제품</strong></td>
                    <td>전문 지식</td>
                    <td>제한 없음</td>
                    <td>고급</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>6. 네이버 SEO</h2>
            <p>
              국내 검색 시장에서 네이버의 점유율은 여전히 높습니다.
              네이버 검색 알고리즘의 특성을 이해하고 최적화 전략을 세워야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>네이버 상위 노출 전략</h3>
              <ul>
                <li><strong>C-Rank 알고리즘:</strong> 특정 주제에 대한 전문성과 신뢰도를 평가. 한 분야에 집중하여 꾸준히 글 작성</li>
                <li><strong>D.I.A. 모델:</strong> 문서의 경험, 정보성, 독창성을 종합 평가</li>
                <li><strong>키워드 전략:</strong> 네이버 자동완성, 연관검색어를 활용한 롱테일 키워드 발굴</li>
                <li><strong>스마트블록 노출:</strong> 인플루언서 검색, 쇼핑, 장소 등 스마트블록에 노출되도록 최적화</li>
                <li><strong>콘텐츠 품질:</strong> 최소 1,500자 이상, 이미지 5장 이상, 동영상 포함 시 가산점</li>
                <li><strong>체류시간:</strong> 독자가 오래 머무를 수 있는 양질의 콘텐츠 작성</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> 네이버는 중복 콘텐츠, 과도한 키워드 반복, 어뷰징 행위를 엄격히 제재합니다.
              다른 블로그 글을 복사하거나, 인위적인 방문 수 늘리기는 계정 제재로 이어질 수 있습니다.
            </div>

            <h2>7. 글쓰기 팁</h2>
            <p>
              온라인 독자는 글을 '읽는' 것이 아니라 '스캔'합니다.
              스캐너블(Scannable) 콘텐츠를 작성하는 것이 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>스캐너블 콘텐츠 작성법</h3>
              <ul>
                <li><strong>역피라미드 구조:</strong> 가장 중요한 정보를 맨 위에 배치</li>
                <li><strong>짧은 단락:</strong> 2~3줄 단락으로 나누어 가독성 확보</li>
                <li><strong>불릿 포인트:</strong> 목록을 활용하여 핵심 정보 정리</li>
                <li><strong>볼드체 강조:</strong> 핵심 키워드와 중요 문구를 볼드 처리</li>
                <li><strong>시각 자료:</strong> 이미지, 인포그래픽, 표를 적절히 삽입</li>
                <li><strong>CTA (행동 유도):</strong> 글 중간과 끝에 독자의 다음 행동 유도</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>가독성 체크 포인트:</strong>
              <ul>
                <li>문장 길이: 20~30자 이내가 최적</li>
                <li>전문 용어: 쉬운 말로 풀어서 설명</li>
                <li>수동태 최소화: "~되었다" 대신 "~했다"</li>
                <li>구체적 숫자 사용: "많은" 대신 "73%의"</li>
              </ul>
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Google Search Console</strong></td>
                    <td>검색 성과 분석, 인덱싱 관리, 오류 확인</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>Ahrefs</strong></td>
                    <td>키워드 리서치, 백링크 분석, 경쟁사 분석</td>
                    <td>월 $99~</td>
                  </tr>
                  <tr>
                    <td><strong>Ubersuggest</strong></td>
                    <td>키워드 추천, 사이트 감사, 콘텐츠 아이디어</td>
                    <td>무료~월 $29</td>
                  </tr>
                  <tr>
                    <td><strong>Yoast SEO</strong></td>
                    <td>WordPress SEO 플러그인, 실시간 최적화 가이드</td>
                    <td>무료~$99/년</td>
                  </tr>
                  <tr>
                    <td><strong>네이버 키워드 도구</strong></td>
                    <td>네이버 검색 키워드 분석, 월간 검색량</td>
                    <td>무료</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/youtube" className="lesson-nav-btn prev">← 유튜브 마케팅</Link>
              <Link to="/tools/linkedin" className="lesson-nav-btn next">링크드인 마케팅 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolBlog;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAOS = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 이동 시 스크롤 맨 위로
    window.scrollTo(0, 0);

    // 이전 페이지의 aos-animate 클래스 제거 (재진입 시 애니메이션 재생)
    document.querySelectorAll('.aos-animate').forEach((el) => {
      el.classList.remove('aos-animate');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('aos-animate');
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
        observer.observe(el);
      });
    };

    // 약간의 딜레이 후 observe 시작 (DOM 렌더링 보장)
    const initTimer = setTimeout(() => {
      observeAll();
    }, 50);

    const mutObs = new MutationObserver(observeAll);
    mutObs.observe(document.body, { childList: true, subtree: true });

    // Fallback: 1초 후에도 안보이는 요소는 강제로 표시
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
        el.classList.add('aos-animate');
      });
    }, 1000);

    return () => {
      observer.disconnect();
      mutObs.disconnect();
      clearTimeout(initTimer);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);
};

export default useAOS;

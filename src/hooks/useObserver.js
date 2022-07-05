import { useEffect, useRef } from "react";

export const useObserver = (ref, isCanLoad, isLoading, callback) => {
  const observer = useRef();
  // использование Intersection_Observer для бесконечной прокрутки
  // https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
  useEffect(() => {
    if (isLoading)
      return;
    if (observer.current)
      observer.current.disconnect();
    // var options = {
    //   root: document.querySelector('#scrollArea'),
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    var cllbck = function(entries, observer) {
        /* Content excerpted, show below */
        if (entries[0].isIntersecting && isCanLoad) {
          callback();
        }
    };
    observer.current = new IntersectionObserver(cllbck);
    observer.current.observe(ref.current);
  },[isLoading]);
};

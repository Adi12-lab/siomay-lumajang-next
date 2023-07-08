export function trigger(elemen: HTMLElement |HTMLDivElement| Element | null,cb: ()=> void, threshold=1) {
    if (elemen) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cb();
            observer.unobserve(entry.target)
          }
        });
      }, {
        threshold: threshold
      });
  
      observer.observe(elemen)
    }
  }
  
  export function getClass(phrase: HTMLElement | Element): string {
    return `.${phrase.className.split(" ")[0]}`
  } 
export function trigger(elemen: HTMLElement | HTMLDivElement | Element | null, cb: () => void, threshold = 1) {
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
export function formatPhone(str: string) {
  const noHp = str.substring(2)
  const newPhone = noHp.replace(/(\d{3})(\d{4})(\d*)/, "$1-$2-$3");
  return newPhone
}
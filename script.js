// Job search filter chips — toggles active styling on the filter checkboxes.
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('#job-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const discipline = document.querySelector('#discipline-select')?.value;
      const region = document.querySelector('#region-select')?.value;
      const models = [...document.querySelectorAll('.checkbox-row input:checked')].map(i => i.value);
      console.log('Search jobs', { discipline, region, models });
      // TODO: wire up to real job search endpoint / results view.
    });
  }

  // Scroll-up reveal animation — fades/slides .reveal-up elements in as they enter the viewport.
  const revealEls = document.querySelectorAll('.reveal-up');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }
});

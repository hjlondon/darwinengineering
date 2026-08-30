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
});

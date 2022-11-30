function toggleSiteSearch() {
  const siteSearch = this;

  siteSearch.siteOpenButton.classList.toggle(siteSearch.siteSearchActiveClass);
  siteSearch.siteSearchForm.classList.toggle(`${siteSearch.blockName}__form_hidden`);
}

function siteSearchOnClick(event) {
  const siteSearch = this;

  let target = event.target;

  if (target.classList.contains(`${siteSearch.blockName}__button`)) {
    toggleSiteSearch.call(siteSearch);
  }

  if (target.classList.contains(`${siteSearch.blockName}__form-close-button`)) {
    event.preventDefault();
    toggleSiteSearch.call(siteSearch);
  }
}

function documentOnClick(event) {
  const siteSearch = this;

  if (!siteSearch.siteSearchForm.contains(event.target) && !siteSearch.siteOpenButton.contains(event.target) && !siteSearch.siteSearchForm.classList.contains(`${siteSearch.blockName}__form_hidden`)) {
    siteSearch.siteOpenButton.classList.toggle(siteSearch.siteSearchActiveClass);
    siteSearch.siteSearchForm.classList.toggle(`${siteSearch.blockName}__form_hidden`);
  }
}

export {siteSearchOnClick, documentOnClick}

import {siteSearchOnClick, documentOnClick} from './onClick.js';

function attachEvents() {
  const siteSearch = this;

  siteSearch.siteSearchOnClick = siteSearchOnClick.bind(siteSearch);
  siteSearch.documentOnClick = documentOnClick.bind(siteSearch);

  siteSearch.container.addEventListener('click', siteSearch.siteSearchOnClick);
  document.addEventListener('click', siteSearch.documentOnClick);
}

export {attachEvents};

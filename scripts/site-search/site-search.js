import {attachEvents} from './events/index.js';

const prototypes = {
  attachEvents,
};

class SiteSearch {
  constructor(mainClass = 'site-search', siteSearchActiveClass = 'icon_activejs') {
    const siteSearch = this;

    siteSearch.blockName = mainClass.includes('__') ? mainClass.slice(0, mainClass.indexOf('__')) : mainClass;
    siteSearch.siteSearchActiveClass = siteSearchActiveClass;

    siteSearch.container = document.querySelector(`.${mainClass}`);
    siteSearch.siteOpenButton = siteSearch.container.querySelector(`.${siteSearch.blockName}__button`);
    siteSearch.siteSearchForm = siteSearch.container.querySelector(`.${siteSearch.blockName}__form`);
    siteSearch.siteSearchFormCloseButton = siteSearch.container.querySelector(`.${siteSearch.blockName}__form-close-button`);

    siteSearch.init();
  }

  init() {
    const siteSearch = this;

    siteSearch.attachEvents();
  }
}

Object.keys(prototypes).forEach(protoMethod => {
  SiteSearch.prototype[protoMethod] = prototypes[protoMethod];
});

export default SiteSearch;

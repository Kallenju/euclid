import {tabOnClick} from './onClick.js';

function attachEvents() {
  const tabs = this;

  tabs.tabOnClick = tabOnClick.bind(tabs);

  tabs.tabNav.addEventListener('click', tabs.tabOnClick);
}

export {attachEvents};

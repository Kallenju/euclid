import {attachEvents} from './events/index.js'
import {setAttributesOnTabMenu, setAttributesOnTab} from './tabNav/index.js'
import {setAttributesOnTabpanel} from './tabpanelList/index.js'

const prototypes = {
  attachEvents,
  setAttributesOnTabMenu,
  setAttributesOnTab,
  setAttributesOnTabpanel
};

class Tabs {
  constructor(mainClass = 'tabs', tabActiveClass = 'button_activejs') {
    const tabs = this;

    tabs.blockName = mainClass.includes('__') ? mainClass.slice(0, mainClass.indexOf('__')) : mainClass;
    tabs.TabActiveClass = tabActiveClass;
    tabs.container = document.querySelector(`.${mainClass}`);
    tabs.tabNav = tabs.container.querySelector(`.${this.blockName}__tab-nav`);
    tabs.tabpanelList = tabs.container.querySelector(`.${this.blockName}__tabpanel-list`);
    tabs.tabButtons = tabs.tabNav.querySelectorAll(`.${this.blockName}__tab`);
    tabs.tabpanels = tabs.tabpanelList.querySelectorAll(`.${this.blockName}__tabpanel`);

    tabs.init();
  }

  init() {
    const tabs = this;

    try {
      if (tabs.tabButtons.length === tabs.tabpanels.length) {
        tabs.attachEvents();
        tabs.setAttributesOnTabMenu();
        for (let i = 0, limit = tabs.tabpanels.length; i < limit; i++) {
          tabs.setAttributesOnTab(tabs.tabButtons[i], 'tab', i);
          tabs.setAttributesOnTabpanel(tabs.tabpanels[i], 'tab', i);
        }
      } else {
        throw new Error("Количество кнопок не соответствует количеству вкладок!");
      }
    } catch(error) {
      if (error.name === 'Error') {
        console.log(`${error.name} ${error.message}`);
      } else {
        throw error;
      }
    }
  }
}

Object.keys(prototypes).forEach(protoMethod => {
  Tabs.prototype[protoMethod] = prototypes[protoMethod];
});

export default Tabs;







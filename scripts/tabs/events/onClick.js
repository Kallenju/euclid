function switchTab(currentTab) {
  const tabs = this;

  tabs.tabButtons.forEach((tab) => {
    tab.classList.remove(tabs.TabActiveClass);
    tab.setAttribute('aria-selected', 'false');
  });

  currentTab.classList.add(tabs.TabActiveClass);
  currentTab.setAttribute('aria-selected', 'true');
}

function switchTabpanel(ariaControls) {
  const tabs = this;

  const currentTabpanel = tabs.tabpanelList.querySelector(`#${ariaControls}`);

  tabs.tabpanels.forEach((tabpanel) => {
    tabpanel.classList.remove(`${tabs.blockName}__tabpanel_activejs`);
  });

  currentTabpanel.classList.add(`${tabs.blockName}__tabpanel_activejs`);
}

function tabOnClick(event) {
  const tabs = this;

  let target = event.target;

  if (!target.classList.contains(`${this.blockName}__tab`)) {
    return
   }

  switchTab.call(tabs, target);

  const ariaControls = target.getAttribute('aria-controls');

  switchTabpanel.call(tabs, ariaControls);
}

export {tabOnClick}

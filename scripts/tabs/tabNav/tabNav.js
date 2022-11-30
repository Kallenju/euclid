function setAttributesOnTabMenu() {
  const tabs = this;

  tabs.tabNav.setAttribute('role', 'tablist');
  tabs.tabNav.setAttribute('aria-label', 'Навигация по вкладкам');
}

export {setAttributesOnTabMenu}

import Tabs from './tabs/tabs.js'

const stepsTabs = new Tabs('steps__tabs');

function disableFocusForElements(parentElement, elementClass) {
  parentElement.querySelectorAll(`.${elementClass}`).forEach((element) => element.setAttribute('tabindex', '-1'))
}

function enabledFocusForElements(parentElement, elementClass) {
  parentElement.querySelectorAll(`.${elementClass}`).forEach((element) => element.setAttribute('tabindex', ''));
}

stepsTabs.tabpanels.forEach((tabPanel, index) => {
  if (index !== 0) {
    disableFocusForElements(tabPanel, 'button')
  }
});

stepsTabs.tabNav.addEventListener('click', (event) => {
  let target = event.target;

  if (!target.classList.contains(`steps__tab`)) {
    return
  }

  const ariaControls = event.target.getAttribute('aria-controls');
  const currentTabpanel = stepsTabs.tabpanelList.querySelector(`#${ariaControls}`);

  stepsTabs.tabpanels.forEach((tabPanel) => {
    disableFocusForElements(tabPanel, 'button')
  });

  enabledFocusForElements(currentTabpanel, 'button');
});

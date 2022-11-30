{
  const headerBurgerButton = document.querySelector('.header__button-menu');
  const headerBurgerMenu = document.querySelector('.nav_theme_burger');
  const headerBurgerMenuLinks = headerBurgerMenu.querySelector('.nav__menu').querySelectorAll('.nav__link');
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerSearchForm = document.querySelector('.site-search');

  headerBurgerButton.addEventListener('click', () => {
    headerBurgerMenu.style.setProperty('--menu-burger-height', `${header.clientHeight + hero.clientHeight}px`);

    headerBurgerMenu.classList.toggle('nav_hidden');
    headerBurgerButton.classList.toggle('header__button-menu_activejs');

    if (!headerSearchForm.classList.contains('site-search_hidden')) {
      headerSearchForm.classList.add('site-search_hidden');
    }

    setTimeout(() => {
      const menuCoordinates = headerBurgerMenu.getBoundingClientRect();
      headerBurgerMenuLinks.forEach((element) => element.style.setProperty('--menu-width', `${menuCoordinates.width}px`));
    }, 1000);

    if (document.body.style.overflowY === '') {document.body.style.overflowY = 'hidden'} else {
      document.body.style.overflowY = '';
    }
  });

  headerBurgerMenuLinks.forEach((element) => element.addEventListener('click', () => {
    headerBurgerMenu.classList.toggle('nav_hidden');
    headerBurgerButton.classList.toggle('header__button-menu_activejs');
    document.body.style.overflowY = '';
  }));

  document.body.addEventListener('mouseup', (e) => {
    const menuCoordinates = headerBurgerMenu.getBoundingClientRect();

    if (e.clientX >= (menuCoordinates.x + menuCoordinates.width) && !headerBurgerMenu.classList.contains('nav_hidden')) {
      headerBurgerMenu.classList.toggle('nav_hidden');
      headerBurgerButton.classList.toggle('header__button-menu_activejs');
      document.body.style.overflowY = '';
    }
  });
}

{
  const headerSearchButton = document.querySelector('.header__button-search');
  const headerSearchForm = document.querySelector('.site-search');
  const headerSearchFormCloseButton = headerSearchForm.querySelector('.site-search__icon-close').parentNode;

  headerSearchButton.addEventListener('click', () => {
    headerSearchForm.classList.toggle('site-search_hidden');
    headerSearchButton.classList.toggle('icon_activejs');
  });

  headerSearchFormCloseButton.addEventListener('click', (e) => {
    e.preventDefault();

    headerSearchForm.classList.toggle('site-search_hidden');
    headerSearchButton.classList.toggle('icon_activejs');
  });
}

{
  const heroSliderNav = document.createElement('div');

  heroSliderNav.classList.add('hero__slider-pagination');

  heroSliderNav.setAttribute('aria-label', 'Навигация по слайдам');

  const sliderContainer = document.querySelector('.hero__slider');

  sliderContainer.append(heroSliderNav);

  new Swiper(sliderContainer, {

  direction: 'horizontal',
  allowTouchMove: true,
  simulateTouch: true,

  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
    bulletClass: 'hero__slider-bullet',
    bulletActiveClass: 'icon_activejs',
    renderBullet: function (index, className) {
      return `
        <button class="icon ${className}" aria-label="Перейти к слайду ${index + 1}">
          <svg class="hero__icon-bullet" width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="icon__path icon__path_theme_white" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5Z" fill="white" fill-opacity="0.4"/>
          </svg>
        </button>
      `;
    },
  },
  });

  sliderContainer.classList.remove('swiper-horizontal');
  heroSliderNav.classList.remove('swiper-pagination-horizontal');
}

{
  function createTab(ariaControlsText, index) {
    const button = document.createElement('button');

    button.classList.add('button', 'button_view_plain', 'steps__tab');

    button.setAttribute('role',`tab`);
    button.setAttribute('aria-selected',`false`);
    button.setAttribute('aria-controls',`${ariaControlsText}${index}`);

    button.textContent = `${index} шаг`;

    return button;
  }

  function switchTab(tabArray, currentTab) {
    tabArray.forEach((element) => {
      element.classList.remove('button_activejs');
      element.setAttribute('aria-selected', 'false');
    });

    currentTab.classList.add('button_activejs');
    currentTab.setAttribute('aria-selected', 'true');
  }

  function createTabListItem(className = ['steps__tablist-item']) {
    const li = document.createElement('li');

    li.classList.add(...className);

    return li;
  }

  function createTabNav(ariaControlsText) {
    const menu = document.createElement('ul');
    const tabButtonArray = [];
    const tabListItemArray = [];

    menu.classList.add('steps__tablist');

    menu.setAttribute('role', 'tablist');
    menu.setAttribute('aria-label', 'Навигация по статьям');

    const articles = document.querySelectorAll('.steps__article');

    for (let i = 1; i <= articles.length; i++) {
      const button = createTab(ariaControlsText, i);
      const li = createTabListItem();

      tabButtonArray.push(button);
      tabListItemArray.push(button);

      li.append(button);

      menu.append(li);
    }

    return {menu, tabButtonArray, tabListItemArray};
  }

  function giveTabAttributesToListItems(listItems, text) {
    listItems.forEach((element, index) => element.setAttribute('id', `${text}${index + 1}`));
    listItems.forEach((element) => element.setAttribute('role', `tabpanel`));
  }

  function disableFocusForElements(parentElement, elementClass) {
    parentElement.querySelectorAll(`.${elementClass}`).forEach((element) => element.setAttribute('tabindex', '-1'))
  }

  function enabledFocusForElements(parentElement, elementClass) {
    parentElement.querySelectorAll(`.${elementClass}`).forEach((element) => element.setAttribute('tabindex', ''));
  }

  const stepsList = document.querySelector('.steps__tabpanel-list');
  const stepsListItems = Array.from(stepsList.children);
  const tabNav = createTabNav('статья');

  tabNav.tabButtonArray[0].classList.add('button_activejs');
  tabNav.tabButtonArray[0].setAttribute('aria-selected', 'true');

  stepsList.before(tabNav.menu);

  giveTabAttributesToListItems(stepsListItems, 'статья');

  stepsListItems.forEach((tabPanel, index) => {
    if (index !== 0) {
      disableFocusForElements(tabPanel, 'button')
    }
  });

  tabNav.tabButtonArray.forEach((tabButton) => {
    tabButton.addEventListener('click', (e) => {
    const currentTab = e.currentTarget;
    const ariaControls = currentTab.getAttribute('aria-controls');
    const currentTabPanel = stepsList.querySelector(`#${ariaControls}`);

    switchTab(tabNav.tabButtonArray, currentTab);

    stepsListItems.forEach((element) => {
      element.classList.remove('steps__tabpanel_activejs');
      disableFocusForElements(element, 'button');
    });

    currentTabPanel.classList.add('steps__tabpanel_activejs');
    enabledFocusForElements(currentTabPanel, 'button');
    });
    });
}

{
  new Accordion('.faq__list', {
    duration: 400,
    showMultiple: true,
    elementClass: 'faq__item',
    triggerClass: 'faq__item-button',
    activeClass: 'faq__item_activejs',
  });
}

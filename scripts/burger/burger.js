import {attachEvents} from './events/index.js';

const prototypes = {
  attachEvents,
};

class Burger {
  constructor(mainClass = 'burger', burgerActiveClass = 'burger__button_activejs') {
    const burger = this;

    burger.blockName = mainClass.includes('__') ? mainClass.slice(0, mainClass.indexOf('__')) : mainClass;
    burger.burgerActiveClass = burgerActiveClass;

    burger.container = document.querySelector(`.${mainClass}`);
    burger.burgerButton = burger.container.querySelector(`.${burger.blockName}__button`);
    burger.burgerNav = burger.container.querySelector(`.${burger.blockName}__nav`);
    burger.burgerNavMenu = burger.burgerNav.querySelector(`.${burger.blockName}__nav-menu`);
    burger.burgerNavLinks = burger.burgerNavMenu.querySelectorAll(`.${burger.blockName}__nav-link`);

    burger.init();
  }

  init() {
    const burger = this;

    burger.attachEvents();
  }
}

Object.keys(prototypes).forEach(protoMethod => {
  Burger.prototype[protoMethod] = prototypes[protoMethod];
});

export default Burger;

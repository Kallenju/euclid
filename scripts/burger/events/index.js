import {burgerOnClick, documentOnClick} from './onClick.js';
import {burgerOnTransitionend} from './onTransitioned.js';

function attachEvents() {
  const burger = this;

  burger.burgerOnClick = burgerOnClick.bind(burger);
  burger.documentOnClick = documentOnClick.bind(burger);
  burger.burgerOnTransitionend = burgerOnTransitionend.bind(burger);

  burger.container.addEventListener('click', burger.burgerOnClick);
  document.addEventListener('click', burger.documentOnClick);
  burger.container.addEventListener('transitionend', burger.burgerOnTransitionend);
}

export {attachEvents};

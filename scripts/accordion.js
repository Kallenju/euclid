import Accordion from 'accordion-js/dist/accordion.min.js';

new Accordion('.faq__list', {
  duration: 400,
  showMultiple: true,
  elementClass: 'faq__item',
  triggerClass: 'faq__item-button',
  activeClass: 'faq__item_activejs',
});

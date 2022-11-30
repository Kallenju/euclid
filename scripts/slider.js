const heroSliderNav = document.createElement('div');

heroSliderNav.classList.add('hero__slider-pagination');

heroSliderNav.setAttribute('aria-label', 'Навигация по слайдам');

import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

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

function burgerOnTransitionend(event) {
  const burger = this;

  if (event.propertyName === 'width') {
    burger.burgerNavLinks.forEach((element) => element.style.setProperty('--burger__nav-link-before-width', `${burger.burgerNavMenu.clientWidth - 1}px`));
  }
}

export {burgerOnTransitionend}

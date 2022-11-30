function toggleBurger() {
  const burger = this;

  burger.burgerNav.classList.toggle(`${burger.blockName}__nav_hidden`);
  burger.burgerButton.classList.toggle(burger.burgerActiveClass);

  if (document.body.style.overflowY === '') {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = '';
  }
}

function burgerOnClick(event) {
  const burger = this;

  let target = event.target;

  if (target.classList.contains(`${burger.blockName}__nav-link`) || target.classList.contains(`${burger.blockName}__button`)) {
    toggleBurger.call(burger);
  }
}

function documentOnClick(event) {
  const burger = this;

  if (!burger.burgerNav.contains(event.target) && !burger.burgerButton.contains(event.target) && !burger.burgerNav.classList.contains(`${burger.blockName}__nav_hidden`)) {
    burger.burgerNav.classList.toggle(`${burger.blockName}__nav_hidden`);
    burger.burgerButton.classList.toggle(burger.burgerActiveClass);
    document.body.style.overflowY = '';
  }
}

export {burgerOnClick, documentOnClick}

function setAttributesOnTab(button, ariaControlsText, ariaControlsIndex) {
  const tabs = this;

  if (ariaControlsIndex === 0) {
    button.classList.add(tabs.TabActiveClass);
    button.setAttribute('aria-selected', 'true');
  }

  button.setAttribute('role',`tab`);
  button.setAttribute('aria-selected',`false`);
  button.setAttribute('aria-controls',`${ariaControlsText}${ariaControlsIndex + 1}`);
}

export {setAttributesOnTab}

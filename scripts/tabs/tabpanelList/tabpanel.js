function setAttributesOnTabpanel(tabpanel, idtext, index) {
  tabpanel.setAttribute('id', `${idtext}${index + 1}`);
  tabpanel.setAttribute('role', `tabpanel`);
}

export {setAttributesOnTabpanel}

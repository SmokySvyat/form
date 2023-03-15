bDateInput.setAttribute('max', max)

bDateInput.onfocus = () => {
  tipAge.classList.add(validationOptions.tipActiveClass);
};

bDateInput.onblur = () => {
  tipAge.classList.remove(validationOptions.tipActiveClass);
};

passInput.onfocus = () => {
  tip.classList.add(validationOptions.tipActiveClass);
};

passInput.onblur = () => {
    tip.classList.remove(validationOptions.tipActiveClass);
};

enableValidation(validationOptions);
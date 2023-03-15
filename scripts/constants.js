const validationOptions = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_invalid',
    errorClass: 'form__input-error_active',
    errorText: '.form__input-error',
    errorClosestParent: '.form__section',
    passwordSelector: '#password',
    passwordRepeatSelector: '#password-repeat',
    bDateSelector: '#b-date',
    tipSelector: '.tip',
    tipAgeSelector: '.tip__age',
    tipActiveClass: 'tip_active'
  };

  const passInputs = [
    document.querySelector('#password'),
    document.querySelector('#password-repeat')
  ];

const passInput = document.querySelector(validationOptions.passwordSelector);
const bDateInput = document.querySelector(validationOptions.bDateSelector);
const tip = document.querySelector(validationOptions.tipSelector);
const tipAge = document.querySelector(validationOptions.tipAgeSelector);
const date = new Date();
const max = `${date.getFullYear() - 18}-0${date.getMonth() + 1}-${date.getDate()}`;

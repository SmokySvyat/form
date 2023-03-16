// Открытие/закрытие ошибок
function addClassError (errorElement, inputElement, options) {
    errorElement.classList.add(options.errorClass);
    inputElement.classList.add(options.inputErrorClass);
};

function removeClassError (errorElement, inputElement, options) {
    errorElement.classList.remove(options.errorClass);
    inputElement.classList.remove(options.inputErrorClass);
};

function showError (errorElement, inputElement, options) {
    addClassError (errorElement, inputElement, options);
    errorElement.textContent = inputElement.validationMessage;
};
  
function hideError (errorElement, inputElement, options) {
    removeClassError (errorElement, inputElement, options);
    errorElement.textContent = '';
};

function showErrorPass(options) {    
  passInputs.forEach(input => {
      const inputParent = input.closest(options.errorClosestParent);
      const errorElement = inputParent.querySelector(options.errorText);
      addClassError (errorElement, passInput, options)
      errorElement.textContent = 'Пароли не совпадают';
  });
};

function hideErrorPass(options) {
  passInputs.forEach(passInput => {
      const inputParent = passInput.closest(options.errorClosestParent);
      const errorElement = inputParent.querySelector(options.errorText);
      removeClassError (errorElement, passInput, options)
      errorElement.textContent = 'Пароли не совпадают';
  });
};

// Состояние submit'a активное/неактивное
function setButtonActive (submitElement, inactiveButtonClass) {
    submitElement.removeAttribute('disabled');
    submitElement.classList.remove(inactiveButtonClass);
};
  
function setButtonInactive (submitElement, inactiveButtonClass) {
    submitElement.setAttribute('disabled', 'true');
    submitElement.classList.add(inactiveButtonClass);
};

//Возрастное ограничение
bDateInput.setAttribute('max', max)

// Сравнение паролей
function isPasswordsEqual (options) {
  const pass = document.querySelector(options.passwordSelector);
  const passRep = document.querySelector(options.passwordRepeatSelector);


  if (pass.value === passRep.value) {
      isEqual = true;
  } else {
      isEqual = false;
  }
  
  return isEqual;
};

function setPasswordState (isEqual, options) {
    
  if (!isEqual) {
      showErrorPass(options)
  } else {
      hideErrorPass(options)
  }
};

// Проверка на валидность
function setInputState (inputElement, isValid, options) {
  const inputSectionElement = inputElement.closest(options.errorClosestParent)
  const errorElement = inputSectionElement.querySelector(options.errorText)

    if (isValid) {
      hideError (errorElement, inputElement, options);
    } else {
      showError (errorElement, inputElement, options);
    };
};

const toggleInputState = (inputElement, options) => {
    const isValid = inputElement.validity.valid;
    isPasswordsEqual(options);
    setPasswordState(isEqual, options)
    setInputState(inputElement, isValid, options);
};

// Обработчик событий
const setEventListeners = (form, options) => {
    const submitElement = form.querySelector(options.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));

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
  
    inputs.forEach(inputElement => {
      inputElement.addEventListener('change', () => {
        toggleInputState(inputElement, options);
        toggleBtnState(inputs, submitElement, options.inactiveButtonClass);
      });
  })
  const toggleBtnState = (inputs, submitElement, inactiveButtonClass) => {
    const isFormValid = inputs.every((inputElement) => {
      return inputElement.validity.valid;
    });

    if (isFormValid && isEqual) {
      setButtonActive (submitElement, inactiveButtonClass);
    } else {
      setButtonInactive (submitElement, inactiveButtonClass);
    }
  }

  toggleBtnState(inputs, submitElement)
};


const enableValidation = ({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
    errorText,
    errorClosestParent,
    passwordSelector,
    passwordRepeatSelector,
  }) => {
    const form = document.querySelector(formSelector);

    setEventListeners(form, {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
      errorText,
      errorClosestParent,
      passwordSelector,
      passwordRepeatSelector,
    });
  };

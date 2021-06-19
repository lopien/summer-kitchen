// Отображение ошибок формы
let errorName = document.querySelector('.error__name');
let errorEmail = document.querySelector('.error__email');
let formName = document.querySelector('#form__name');
let formPhone = document.querySelector('#form_phone');
let formEmail = document.querySelector('#form_email')
let formCompany = document.querySelector('#form_company')
let formMessage = document.querySelector('#form_message')

document.querySelector('.feedback__form').onsubmit = function() {
  if(formName.value ==''){
    formName.style.borderColor = "#FF0101";
    errorName.style.display = "block";
    return false;
  } else if(formPhone.value == ''){
    formPhone.style.borderColor = "#FF0101";
    errorEmail.style.display = "block";
    return false;
  }else{
    formName.value = '';
    formPhone.value = '';
    formEmail.value = '';
    formCompany.value = '';
    formMessage.value = '';
    return true;
  }
};



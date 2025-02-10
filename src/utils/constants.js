export const settings = {
  inputSelector: '.form__input',
  submitButtonSelector: '.button-submit',
  inactiveButtonClass: 'button-submit_disabled',
  submitApplication: 'button-submit_application',
  inputErrorClass: 'border-red-500',
  errorClass: 'flex',
  errorSpanPostfix: '-error',
};

export const btnMenuOpen = document.getElementById('btnMenuOpen');
export const btnMenuClose = document.getElementById('btnMenuClose');
export const mobileMenu = document.getElementById('mobileMenu');
export const btnSubmitApplication = document.getElementById('btnApplication');

export const leadSlides = [
  {
    img: './assets/img/lead-1.svg',
    title: 'CRM-система и&nbsp;интернет-магазин запчастей',
    titleSpan: 'в&nbsp;одном',
    subtitle:
      'Комплексное решение для продажи запчастей: склад, проценка, работа с&nbsp;поставщиками, статистика, интеграции с&nbsp;другими сервисами&nbsp;— всё&nbsp;в&nbsp;одном!',
  },
  {
    img: './assets/img/lead-2.svg',
    title: 'Склад и проценка запчастей',
    titleSpan: 'в&nbsp;одном&nbsp;месте',
    subtitle:
      'Zplan&nbsp;–&nbsp;это универсальная платформа по&nbsp;продаже запчастей! Она позволяет вести продажи, начиная от&nbsp;формирования цен и&nbsp;заканчивая ведением финансов клиента.',
  },
];

export const applicationForm = document.forms.formApplication;

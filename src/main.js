import './index.css';

import Api from './components/Api';
import Popup from './components/Popup';
import Slider from './components/Slider';
import ApplicationInfo from './components/ApplicationInfo';
import FormValidator from './components/FormValidator';
import {
  btnMenuOpen,
  btnMenuClose,
  leadSlides,
  btnSubmitApplication,
  applicationForm,
  settings,
} from './utils/constants';

const api = new Api({
  baseUrl: '',
  headers: {
    // authorization: '',
    'Content-Type': 'application/json',
  },
});

const mobileMenuPopup = new Popup('.mobile-menu');

btnMenuOpen.addEventListener('click', () => {
  mobileMenuPopup.open();
});

btnMenuClose.addEventListener('click', () => {
  mobileMenuPopup.close();
});

mobileMenuPopup.setEventListeners();

const sliderLead = new Slider('.lead', leadSlides);

sliderLead.showSlide();
sliderLead.startTimer();
sliderLead.setEventListeners();

const applicationFormValidation = new FormValidator(settings, applicationForm);
applicationFormValidation.enableValidation();

const application = new ApplicationInfo(
  'name',
  'phone',
  'email',
  'message',
  (inputValues) => {
    application.loading(true);
    api
      .createApplication(inputValues)
      .then((data) => {
        application.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        application.loading(false, 'Оставить заявку');
      });
  },
);

btnSubmitApplication.addEventListener('click', () => {
  applicationFormValidation.resetErrors();
  applicationFormValidation.toggleButtonState();
});

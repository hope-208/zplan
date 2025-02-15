import '@/index.css';

import Api from '@/components/Api';
import Popup from '@/components/Popup';
import Slider from '@/components/Slider';
import ApplicationInfo from '@/components/ApplicationInfo';
import FormValidator from '@/components/FormValidator';
import {
  btnMenuOpen,
  btnMenuClose,
  btnSubmitApplication,
  applicationForm,
  settings,
} from '@/utils/constants';
import { Autoplay } from 'swiper/modules';

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

let sliderLead = new Slider('.lead', {
  direction: 'horizontal',
  modules: [Autoplay],
  effect: 'fade',
  loop: true,
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  edgeSwipeThreshold: 0,
});

document.addEventListener('DOMContentLoaded', () => {
  sliderLead = sliderLead.init();
});

const applicationFormValidation = new FormValidator(settings, applicationForm);
applicationFormValidation.enableValidation();

btnSubmitApplication.addEventListener('click', () => {
  applicationFormValidation.resetErrors();
  applicationFormValidation.toggleButtonState();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    if (
      document.querySelector('.mobile-menu').classList.contains('hidden') ==
      false
    ) {
      mobileMenuPopup.close();
    }
    const target = document.querySelector(anchor.getAttribute('href'));

    const targetPosition = target.offsetTop - 75;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});

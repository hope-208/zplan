import '@/index.css';

import { Autoplay } from 'swiper/modules';
import Api from '@/components/Api';
import Popup from '@/components/Popup';
import Slider from '@/components/Slider';
import ApplicationInfo from '@/components/ApplicationInfo';
import FormValidator from '@/components/FormValidator';
import {
  btnMenuOpen,
  btnMenuClose,
  btnSubmitApplication,
  smartCapthaContainer,
  applicationForm,
  settings,
  modalInfo,
  modalInfoImg,
  modalInfoTitle,
  modalInfoSubtitle,
  btnCloseModal,
} from '@/utils/constants';

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

function errorSubmit() {
  modalInfoImg.setAttribute('src', './assets/img/error.svg');
  modalInfoTitle.textContent = 'Внимание!';
  modalInfoSubtitle.textContent =
    'Пожалуйста, подтвердите, что вы не робот, чтобы отправить заявку.';
  modalInfo.classList.remove('hidden');
}

function successSubmit() {
  modalInfoImg.setAttribute('src', './assets/img/success.svg');
  modalInfoTitle.textContent = 'Ваша заявка принята!';
  modalInfoSubtitle.textContent = 'Благодарим за обращение.';
  modalInfo.classList.remove('hidden');
}
const applicationFormValidation = new FormValidator(settings, applicationForm);
applicationFormValidation.enableValidation();

let recaptchaToken = null;

const application = new ApplicationInfo(
  'name',
  'phone',
  'email',
  'message',
  (inputValues) => {
    application.loading(true);

    if (
      smartCapthaContainer.querySelector('input[name="smart-token"]').value ==
      ''
    ) {
      errorSubmit();
    }
    recaptchaToken = smartCapthaContainer.querySelector(
      'input[name="smart-token"]',
    ).value;

    if (recaptchaToken) {
      fetch(
        `/api/validate?secret=${import.meta.env.VITE_TOKEN_SMART_CAPTCHA_SERVER}&token=${recaptchaToken}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'x-www-form-urlencoded',
          },
        },
      ).then((res) => {
        console.log(
          '%c%s',
          'color: #8c0038',
          'res',
          res,
          'res.json()',
          res.json(),
        );
        if (res.status !== 200) {
          console.error(
            `Allow access due to an error: code=${res.status}; message=${res.statusText}`,
          );
          errorSubmit();
          return;
        } else {
          applicationForm.submit(inputValues, recaptchaToken);
          api
            .createApplication(inputValues, recaptchaToken)
            .then(() => {
              application.reset();
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.err(err);
            })
            .finally(() => {
              successSubmit();
              return application.loading(false, 'Оставить заявку');
            });
        }
      });
    } else {
      console.error('recaptchaToken is empty');
      errorSubmit();
      return application.loading(false, 'Оставить заявку');
    }
  },
);

btnSubmitApplication.addEventListener('click', () => {
  applicationFormValidation.resetErrors();
  applicationFormValidation.toggleButtonState();
});

btnCloseModal.addEventListener('click', () => {
  modalInfo.classList.add('hidden');
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
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

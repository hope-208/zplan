import './index.css';

import Popup from './components/Popup';
import Slider from './components/Slider';
import { btnMenuOpen, btnMenuClose, leadSlides } from './utils/constants';

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

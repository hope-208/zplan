import './index.css';

import Popup from './components/Popup';
import { btnMenuOpen, btnMenuClose } from './utils/constants';

const mobileMenuPopup = new Popup('.mobile-menu');

console.log('%c%s', 'color: #00a3cc', btnMenuOpen);
btnMenuOpen.addEventListener('click', () => {
  mobileMenuPopup.open();
});

btnMenuClose.addEventListener('click', () => {
  mobileMenuPopup.close();
});

mobileMenuPopup.setEventListeners();

import Swiper from 'swiper';
import 'swiper/css';

export default class Slider {
  constructor(sliderSelector, sliderConfig) {
    this._swiperSelector = sliderSelector;
    this._swiperConfig = sliderConfig;
    this.swiper = null;
  }

  init() {
    this.swiper = new Swiper(this._swiperSelector, this._swiperConfig);
    this.swiper.init();
  }
}

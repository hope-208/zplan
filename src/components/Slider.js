export default class Slider {
  constructor(sliderSelector, slides) {
    this._container = document.querySelector(sliderSelector);
    this._slidesList = slides;
    this._currentSlide = 0;
    this._timer = null;
  }

  showSlide() {
    const slide = this._slidesList[this._currentSlide];
    if (slide) {
      document.querySelector('.lead').innerHTML = `
        <div class="slide">
          <div class="flex flex-col w-full xl:p-0 xl:py-8 xl:flex-row-reverse justify-center xl:justify-between p-4 xl:px-4 gap-4 md:gap-8 sm:max-w-8/10 xl:max-w-full mx-auto xl:mx-0">
            <img class="flex justify-center items-center max-w-[200px] mx-auto md:max-w-[300px] lg:max-w-[520px]" src="${slide.img}" alt="" />
            <div class="flex flex-col justify-center xl:items-start gap-4 md:gap-8 mx-auto xl:mx-0">
              <div class="block sm:max-w-7/10 md:w-full mx-auto md:mx-0 md:max-w-full">
                <h1 class="text-3xl sm:text-4xl lg:text-6xl text-center xl:text-left font-semibold lg:font-bold text-gray-700">${slide.title}
                <span class="text-3xl sm:text-4xl lg:text-6xl text-center xl:text-left font-semibold lg:font-bold text-emerald-400">${slide.titleSpan}</span></h1>
              </div>
              <p class="xl:max-w-8/10 text-sm sm:text-base md:text-lg xl:text-xl text-center xl:text-left text-gray-700">${slide.subtitle}</p>
              <a href="#application" class="px-4 py-2 lg:px-5 lg:py-3 w-fit mx-auto xl:m-0 rounded-xl text-base lg:text-2xl text-white text-center bg-emerald-400">Начать работу</a>
            </div>
          </div>
        </div>
      `;

      const slideElement = document.querySelector('.slide');
      slideElement.classList.add('active');

      setTimeout(() => {
        slideElement.classList.remove('active');
      }, 3000);
    }

    this._currentSlide = (this._currentSlide + 1) % this._slidesList.length;
  }

  startTimer() {
    this._timer = setInterval(() => this.showSlide(), 3000);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  setEventListeners() {
    document
      .querySelector('.slide')
      .addEventListener('mousedown', this.stopTimer.bind(this));
    document
      .querySelector('.slide')
      .addEventListener('mouseup', this.startTimer.bind(this));
  }
}

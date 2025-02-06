export default class Slider {
  constructor(sliderSelector, slides) {
    this._container = document.querySelector(sliderSelector);
    this._slidesList = slides;
    this._currentSlide = 0;
    this._timer;
  }

  showSlide() {
    let slide = this._slidesList[this._currentSlide];
    if (slide) {
      document.querySelector('.lead').innerHTML = `
        <div class="slide">
            <div class="flex flex-col p-4 gap-4"><img src="${slide.img}" alt="">
              <div class="block">
                <h1 class="text-3xl text-center font-semibold text-gray-700">${slide.title}</h1>
                <h1 class="text-3xl text-center font-semibold text-emerald-400">${slide.titleSpan}</h1>
              </div>
              <p class="text-sm text-center text-gray-700">${slide.subtitle}</p>
            </div>
          </div>
      `;

      let slideElement = document.querySelector('.slide');
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

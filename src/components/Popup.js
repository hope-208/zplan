export default class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._container.classList.remove('hidden');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._container.classList.add('hidden');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._container.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('hidden') ||
        evt.target.classList.contains('button-close')
      ) {
        this.close();
      }
    });
  }
}

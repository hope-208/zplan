export default class ApplicationInfo {
  constructor(nameId, phoneId, emailId, messageId, handleFormSubmit) {
    this._form = document.forms.formApplication;
    this._nameField = document.querySelector(nameId);
    this._phoneField = document.querySelector(phoneId);
    this._emailField = document.querySelector(emailId);
    this._messageField = document.querySelector(messageId);
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
    this._buttonSubmit = this._form.querySelector('.button-submit');
  }

  _getInputValues() {
    const formData = new FormData(this._form);

    const values = Array.from(formData.entries()).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {},
    );

    return values;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  reset() {
    this._form.reset();
  }

  loading(isLoading, content) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Отправка...';
    } else {
      this._buttonSubmit.textContent = content;
    }
  }
}

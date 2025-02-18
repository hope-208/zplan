export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`код ошибки: ${res.status}`));
  }

  createApplication({ name, phone, email, message }) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

// import WebSocket from 'ws';

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

  createApplication({ name, phone, email, message }) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        message: message,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

import axios from 'axios';

export default class API {
  constructor({ baseURL, token = '' }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async fetch({ api = '', query = {}, method = 'get', body = {}, token = '' }) {
    const searchParams = new URLSearchParams(query);

    const url = `${this.baseURL}${api}/?${searchParams}`;

    switch (method) {
      case 'get':
        return await axios.get(url);
      case 'post':
        return await axios.post(url, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      case 'delete':
        return await axios.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      case 'patch':
        return await axios.patch(url, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      default:
        return await axios.get(url);
    }
  }
}

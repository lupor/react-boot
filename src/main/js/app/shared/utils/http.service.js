export class HttpService {
  constructor() {
    this.apiUrl = process.env.API_URL;
    this.generateDefaultHeaders();
  }

  get(url) {
    return fetch(this.apiUrl.concat(url), {
      method: "GET",
      headers: this.headers
    }).then(res => res.json());
  }

  post(url, payload) {
    return fetch(this.apiUrl.concat(url), {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload)
    }).then(res => res.json());
  }

  generateDefaultHeaders() {
    this.headers = new Headers();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
  }
}

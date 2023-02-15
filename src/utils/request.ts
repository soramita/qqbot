import * as process from 'process';
import axios from 'axios';

export class Http {
  url: string;
  constructor() {
    this.url = process.env.BASE_URL;
  }
  get<T>(path: string, params: T) {
    return axios({
      url: this.url + path,
      params,
    });
  }
  post<T>(path: string, data: T) {
    return axios({
      url: this.url + path,
      data,
      method: 'post',
    });
  }
}
export default new Http();

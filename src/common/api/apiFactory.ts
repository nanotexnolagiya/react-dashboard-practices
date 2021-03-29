import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiFactory {
  http: AxiosInstance;
  constructor(options: AxiosRequestConfig) {
    this.http = axios.create(options);
  }
}

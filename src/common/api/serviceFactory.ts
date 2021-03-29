import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ServiceFactory {
  constructor(private name: string, private http: AxiosInstance) {}

  fetchMany<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(this.name, config);
  }

  fetchOne<T = any>(id: string | number, config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(`${this.name}/${id}`, config);
  }

  create<T = any>(data: any, config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.post<T>(this.name, data, config);
  }

  update<T = any>(
    id: string | number,
    data: any,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.put<T>(`${this.name}/${id}`, data, config);
  }

  delete<T = any>(id: string | number, config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.delete<T>(`${this.name}/${id}`, config);
  }
}

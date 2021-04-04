import { permissionMock } from './permissionMock';
import { userMock } from './userMock';

export interface MockResponse<T> {
  data: T;
  message: string;
}

export const handlers = [...userMock, ...permissionMock];

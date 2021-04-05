import { permissionMock } from './permissionMock';
import { roleMock } from './roleMock';
import { userMock } from './userMock';

export interface MockResponse<T> {
  data: T;
  message: string;
}

export const handlers = [...userMock, ...permissionMock, ...roleMock];

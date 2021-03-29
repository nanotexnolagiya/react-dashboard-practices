import { MockResponse } from './handlers';
import fk from 'faker';
import { rest } from 'msw';

export interface IUser {
  id: number;
  username: string;
  password: string;
  role_id: number;
}

export const userMock = [
  rest.get<any, MockResponse<IUser[]>>('/users', (req, res, ctx) => {
    return res(
      ctx.json({
        data: new Array(10).fill({}).map(() => ({
          id: fk.random.number(),
          username: fk.internet.userName(),
          password: fk.internet.password(),
          role_id: 1,
        })),
        message: 'Request successfully',
      })
    );
  }),
  rest.get<any, MockResponse<IUser>>('/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          username: fk.internet.userName(),
          password: fk.internet.password(),
          role_id: 1,
        },
        message: 'Request successfully',
      })
    );
  }),
  rest.put<IUser, MockResponse<IUser>>('/users/:id', (req, res, ctx) => {
    const { username, password, role_id } = req.body;
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          username,
          password,
          role_id,
        },
        message: 'User successfully updated',
      })
    );
  }),
  rest.post<IUser, MockResponse<IUser>>('/users', (req, res, ctx) => {
    const { username, password, role_id } = req.body;

    return res(
      ctx.json({
        data: {
          id: fk.random.number(),
          username,
          password,
          role_id,
        },
        message: 'User successfully created',
      })
    );
  }),
  rest.delete<any, MockResponse<null>>('/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: null,
        message: 'User successfully deleted',
      })
    );
  }),
];

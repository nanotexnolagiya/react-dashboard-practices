import { MockResponse } from './handlers';
import fk from 'faker';
import { rest } from 'msw';

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  role_id: number;
}

export const userMock = [
  rest.get<any, MockResponse<IUser[]>>('/api/users', (req, res, ctx) => {
    return res(
      ctx.json({
        data: new Array(10).fill({}).map(() => ({
          id: fk.random.number(),
          first_name: fk.name.firstName(),
          last_name: fk.name.lastName(),
          email: fk.internet.email(),
          phone: fk.phone.phoneNumber(),
          password: fk.internet.password(),
          role_id: fk.random.number(),
        })),
        message: 'Request successfully',
      })
    );
  }),
  rest.get<any, MockResponse<IUser>>('/api/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          first_name: fk.name.firstName(),
          last_name: fk.name.lastName(),
          email: fk.internet.email(),
          phone: fk.phone.phoneNumber(),
          password: fk.internet.password(),
          role_id: fk.random.number(),
        },
        message: 'Request successfully',
      })
    );
  }),
  rest.put<IUser, MockResponse<IUser>>('/api/users/:id', (req, res, ctx) => {
    const { first_name, last_name, email, phone, password, role_id } = req.body;
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          first_name,
          last_name,
          email,
          phone,
          password,
          role_id,
        },
        message: 'User successfully updated',
      })
    );
  }),
  rest.post<IUser, MockResponse<IUser>>('/api/users', (req, res, ctx) => {
    const { first_name, last_name, email, phone, password, role_id } = req.body;

    return res(
      ctx.json({
        data: {
          id: fk.random.number(),
          first_name,
          last_name,
          email,
          phone,
          password,
          role_id,
        },
        message: 'User successfully created',
      })
    );
  }),
  rest.delete<any, MockResponse<null>>('/api/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: null,
        message: 'User successfully deleted',
      })
    );
  }),
];

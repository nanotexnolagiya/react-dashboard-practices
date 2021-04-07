import { MockResponse } from './handlers';
import fk from 'faker';
import { rest } from 'msw';

interface IRole {
  id: number;
  name: string;
  permission_id: number;
}

export const roleMock = [
  rest.get<any, MockResponse<IRole[]>>('/api/roles', (req, res, ctx) => {
    return res(
      ctx.json({
        data: new Array(10).fill({}).map(() => ({
          id: fk.random.number(),
          name: fk.lorem.words(),
          permission_id: fk.random.number(),
        })),
        message: 'Request successfully',
      })
    );
  }),
  rest.get<any, MockResponse<IRole>>('/api/roles/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          name: fk.lorem.words(),
          permission_id: fk.random.number(),
        },
        message: 'Request successfully',
      })
    );
  }),
  rest.put<IRole, MockResponse<IRole>>('/api/roles/:id', (req, res, ctx) => {
    const { name, permission_id } = req.body;
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          name,
          permission_id,
        },
        message: 'Successfully updated',
      })
    );
  }),
  rest.post<IRole, MockResponse<IRole>>('/api/roles', (req, res, ctx) => {
    const { name, permission_id } = req.body;

    return res(
      ctx.json({
        data: {
          id: fk.random.number(),
          name,
          permission_id,
        },
        message: 'Successfully created',
      })
    );
  }),
  rest.delete<any, MockResponse<null>>('/api/roles/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: null,
        message: 'Successfully deleted',
      })
    );
  }),
];

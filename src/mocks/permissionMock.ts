import { MockResponse } from './handlers';
import fk from 'faker';
import { rest } from 'msw';

interface IPermission {
  id: number;
  name: string;
}

export const permissionMock = [
  rest.get<any, MockResponse<IPermission[]>>('/api/permissions', (req, res, ctx) => {
    return res(
      ctx.json({
        data: new Array(10).fill({}).map(() => ({
          id: fk.random.number(),
          name: fk.lorem.words(),
        })),
        message: 'Request successfully',
      })
    );
  }),
  rest.get<any, MockResponse<IPermission>>('/api/permissions/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          name: fk.lorem.words(),
        },
        message: 'Request successfully',
      })
    );
  }),
  rest.put<IPermission, MockResponse<IPermission>>('/api/permissions/:id', (req, res, ctx) => {
    const { name } = req.body;
    return res(
      ctx.json({
        data: {
          id: req.params.id,
          name,
        },
        message: 'Successfully updated',
      })
    );
  }),
  rest.post<IPermission, MockResponse<IPermission>>('/api/permissions', (req, res, ctx) => {
    const { name } = req.body;

    return res(
      ctx.json({
        data: {
          id: fk.random.number(),
          name,
        },
        message: 'Successfully created',
      })
    );
  }),
  rest.delete<any, MockResponse<null>>('/api/permissions/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: null,
        message: 'Successfully deleted',
      })
    );
  }),
];

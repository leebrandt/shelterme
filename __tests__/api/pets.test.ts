import { createMocks, RequestMethod } from "node-mocks-http"
import type { NextApiRequest, NextApiResponse } from "next"
import pets from '../../pages/api/pets'

describe("pets API handler", ()=> {
  function mockRequestResponse(method: RequestMethod = 'GET') {
    const {
      req,
      res,
    }: { req: NextApiRequest; res: NextApiResponse } = createMocks({ method });
    req.headers = {
      'Content-Type': 'application/json'
    };
    return { req, res };
  }

  it('should return a successful response from pets API', async () => {
    const { req, res } = mockRequestResponse();
    await pets(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  })
})
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from "next";

export default (request, response: NextApiResponse) => {
  response.statusCode = 200;
  response.json({ name: "John Doe" });
};

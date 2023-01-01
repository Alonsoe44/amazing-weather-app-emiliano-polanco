import { rest } from "msw";
import { defaultCity } from "../App";

export const handlers = [
  rest.get("/:city", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(defaultCity))
  ),
];

import { z } from "zod"

export const inputParamsSchema = {
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "label": z.string().max(52)
}
import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().optional()
}
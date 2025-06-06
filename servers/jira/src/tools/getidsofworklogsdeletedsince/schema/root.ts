import { z } from "zod"

export const inputParamsSchema = {
  "since": z.number().int().describe("The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.").optional()
}
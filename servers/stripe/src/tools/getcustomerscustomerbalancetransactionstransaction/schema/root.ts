import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().max(5000),
  "transaction": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
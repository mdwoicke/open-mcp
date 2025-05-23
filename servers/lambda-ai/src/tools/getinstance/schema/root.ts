import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier (ID) of the instance")
}
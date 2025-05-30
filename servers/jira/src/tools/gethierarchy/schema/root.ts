import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.number().int().describe("The ID of the project.")
}
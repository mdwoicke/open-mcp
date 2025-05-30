import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the active workflow scheme that the draft was created from.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "description": z.string().max(1024).describe("The description of the field configuration scheme.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration scheme. The name must be unique.")
}
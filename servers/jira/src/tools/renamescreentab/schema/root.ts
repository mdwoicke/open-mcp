import { z } from "zod"

export const inputParamsSchema = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "id": z.number().int().describe("The ID of the screen tab.").readonly().optional(),
  "name": z.string().describe("The name of the screen tab. The maximum length is 255 characters.")
}
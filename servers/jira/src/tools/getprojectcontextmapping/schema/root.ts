import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the custom field, for example `customfield\\_10000`."),
  "contextId": z.array(z.number().int()).describe("The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
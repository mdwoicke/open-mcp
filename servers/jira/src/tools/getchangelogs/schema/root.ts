import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
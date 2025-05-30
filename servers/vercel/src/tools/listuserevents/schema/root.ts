import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().describe("Maximum number of items which may be returned.").optional(),
  "since": z.string().describe("Timestamp to only include items created since then.").optional(),
  "until": z.string().describe("Timestamp to only include items created until then.").optional(),
  "types": z.string().describe("Comma-delimited list of event \\\"types\\\" to filter the results by.").optional(),
  "userId": z.string().describe("Deprecated. Use `principalId` instead. If `principalId` and `userId` both exist, `principalId` will be used.").optional(),
  "principalId": z.string().describe("When retrieving events for a Team, the `principalId` parameter may be specified to filter events generated by a specific principal.").optional(),
  "withPayload": z.string().describe("When set to `true`, the response will include the `payload` field for each event.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
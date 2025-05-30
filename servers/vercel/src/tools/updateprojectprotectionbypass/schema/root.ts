import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "revoke": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `revoke` to the tool, first call the tool `expandSchema` with \"/properties/revoke\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional instructions for revoking and regenerating a automation bypass</property-description>").optional(),
  "generate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `generate` to the tool, first call the tool `expandSchema` with \"/properties/generate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.</property-description>").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "alias": z.string().describe("Alias of required action"),
  "b_alias": z.string().optional(),
  "name": z.string().optional(),
  "providerId": z.string().optional(),
  "enabled": z.boolean().optional(),
  "defaultAction": z.boolean().optional(),
  "priority": z.number().int().optional(),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}
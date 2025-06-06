import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) that was run."),
  "run_id": z.string().describe("The ID of the run to modify."),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n</property-description>").optional()
}
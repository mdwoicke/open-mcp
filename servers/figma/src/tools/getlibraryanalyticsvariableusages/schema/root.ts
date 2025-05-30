import { z } from "zod"

export const inputParamsSchema = {
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["variable","file"]).describe("A dimension to group returned analytics data by.")
}
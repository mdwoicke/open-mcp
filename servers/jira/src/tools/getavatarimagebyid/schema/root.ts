import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["issuetype","project","priority"]).describe("The icon type of the avatar."),
  "id": z.number().int().describe("The ID of the avatar."),
  "size": z.enum(["xsmall","small","medium","large","xlarge"]).describe("The size of the avatar image. If not provided the default size is returned.").optional(),
  "format": z.enum(["png","svg"]).describe("The format to return the avatar image in. If not provided the original content format is returned.").optional()
}
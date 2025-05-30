import { z } from "zod"

export const inputParamsSchema = {
  "workspaceId": z.string(),
  "users": z.array(z.object({ "id": z.string().uuid().optional(), "role": z.enum(["admin","member"]).optional() })).optional()
}
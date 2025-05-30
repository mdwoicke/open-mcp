import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(50).describe("The name of the access group").optional(),
  "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.union([z.literal("ADMIN"), z.literal("PROJECT_VIEWER"), z.literal("PROJECT_DEVELOPER"), z.literal(null)]).nullable().describe("The project role that will be added to this Access Group. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
  "membersToAdd": z.array(z.string()).describe("List of members to add to the access group.").optional(),
  "membersToRemove": z.array(z.string()).describe("List of members to remove from the access group.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.number().int().describe("The ID of the permission scheme."),
  "permissionId": z.number().int().describe("The ID of the permission grant."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission.").optional()
}
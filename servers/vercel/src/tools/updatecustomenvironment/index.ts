import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecustomenvironment",
  "toolDescription": "Update a custom environment",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "idOrName": "idOrName",
      "environmentSlugOrId": "environmentSlugOrId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "slug": "b_slug",
      "description": "description",
      "branchMatcher": "branchMatcher"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeprojectmember",
  "toolDescription": "Remove a Project Member",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/projects/{idOrName}/members/{uid}",
  "method": "delete",
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
      "uid": "uid"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool
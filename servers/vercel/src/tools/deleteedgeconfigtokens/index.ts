import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteedgeconfigtokens",
  "toolDescription": "Delete one or more Edge Config tokens",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/edge-config/{edgeConfigId}/tokens",
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
      "edgeConfigId": "edgeConfigId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "tokens": "tokens"
    }
  },
  inputParamsSchema
}

export default tool
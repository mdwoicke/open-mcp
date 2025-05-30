import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createlocation",
  "toolDescription": "Create a location for a given target.",
  "baseUrl": "https://api.example.com",
  "path": "/locations",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "dryRun": "dryRun"
    },
    "body": {
      "target": "target",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "admin_create_portal",
  "toolDescription": "Create Portal Admin Route",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/admin/billing/stripe/portals/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "organization_id": "organization_id"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getissuingauthorizations",
  "toolDescription": "List all authorizations",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/issuing/authorizations",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "card": "card",
      "cardholder": "cardholder",
      "created": "created",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "starting_after": "starting_after",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
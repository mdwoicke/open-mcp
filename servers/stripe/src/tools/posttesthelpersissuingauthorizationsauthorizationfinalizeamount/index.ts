import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "posttesthelpersissuingauthorizationsauthorizationfinalizeamount",
  "toolDescription": "Finalize a test-mode authorization's amount",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount",
  "method": "post",
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
    "path": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
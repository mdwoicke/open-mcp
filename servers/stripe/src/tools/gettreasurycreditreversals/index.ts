import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettreasurycreditreversals",
  "toolDescription": "List all CreditReversals",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/treasury/credit_reversals",
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
      "ending_before": "ending_before",
      "expand": "expand",
      "financial_account": "financial_account",
      "limit": "limit",
      "received_credit": "received_credit",
      "starting_after": "starting_after",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
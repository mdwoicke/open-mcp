import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulkmoveworklogs",
  "toolDescription": "Bulk move worklogs",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/worklog/move",
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
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "issueIdOrKey": "issueIdOrKey"
    },
    "query": {
      "adjustEstimate": "adjustEstimate",
      "overrideEditableFlag": "overrideEditableFlag"
    },
    "body": {
      "ids": "ids",
      "issueIdOrKey": "b_issueIdOrKey"
    }
  },
  inputParamsSchema
}

export default tool
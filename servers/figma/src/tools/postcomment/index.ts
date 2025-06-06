import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postcomment",
  "toolDescription": "Add a comment to a file",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/files/{file_key}/comments",
  "method": "post",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
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
      "file_key": "file_key"
    },
    "body": {
      "message": "message",
      "comment_id": "comment_id",
      "client_meta": "client_meta"
    }
  },
  inputParamsSchema
}

export default tool
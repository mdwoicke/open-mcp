import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_clients_client_uuid_default_client_scopes",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "clientScopeId": "clientScopeId"
    }
  },
  inputParamsSchema
}

export default tool
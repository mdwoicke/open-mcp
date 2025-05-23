import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_authz_resource_server",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/settings",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_analytics_groups_metadata_metadatakey_",
  "toolDescription": "Get metadata key based grouped data.",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/analytics/groups/metadata/{metadataKey}",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "metadataKey": "metadataKey"
    },
    "query": {
      "time_of_generation_min": "time_of_generation_min",
      "time_of_generation_max": "time_of_generation_max",
      "total_units_min": "total_units_min",
      "total_units_max": "total_units_max",
      "cost_min": "cost_min",
      "cost_max": "cost_max",
      "prompt_token_min": "prompt_token_min",
      "prompt_token_max": "prompt_token_max",
      "completion_token_min": "completion_token_min",
      "completion_token_max": "completion_token_max",
      "status_code": "status_code",
      "weighted_feedback_min": "weighted_feedback_min",
      "weighted_feedback_max": "weighted_feedback_max",
      "virtual_keys": "virtual_keys",
      "configs": "configs",
      "workspace_slug": "workspace_slug",
      "api_key_ids": "api_key_ids",
      "current_page": "current_page",
      "page_size": "page_size",
      "metadata": "metadata",
      "ai_org_model": "ai_org_model",
      "trace_id": "trace_id",
      "span_id": "span_id",
      "prompt_slug": "prompt_slug"
    }
  },
  inputParamsSchema
}

export default tool
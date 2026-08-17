import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-gateway.server-BIj8Su5R.js
function createDeepSeekProvider(apiKey) {
	return createOpenAICompatible({
		name: "deepseek",
		baseURL: "https://api.deepseek.com/v1",
		headers: { Authorization: `Bearer ${apiKey}` }
	});
}
//#endregion
export { createDeepSeekProvider };

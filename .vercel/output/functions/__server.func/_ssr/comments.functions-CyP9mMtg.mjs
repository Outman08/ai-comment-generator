import { n as __exportAll } from "../_runtime.mjs";
import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-CL_FzAQo2.mjs";
import { t as generateText } from "../_libs/ai.mjs";
import { n as objectType, r as stringType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/comments.functions-CyP9mMtg.js
var comments_functions_CyP9mMtg_exports = /* @__PURE__ */ __exportAll({ generateComments_createServerFn_handler: () => generateComments_createServerFn_handler });
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = objectType({
	post: stringType().min(1).max(4e3),
	tone: stringType().min(1).max(40),
	platform: stringType().min(1).max(40),
	intent: stringType().min(1).max(60)
});
var Schema = objectType({ comments: arrayType(stringType()) });
var RATE_LIMIT_WINDOW_MS = 6e4;
var RATE_LIMIT_MAX = 5;
var globalHits = [];
function checkRateLimit() {
	const now = Date.now();
	const freshHits = globalHits.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
	globalHits.length = 0;
	globalHits.push(...freshHits);
	if (globalHits.length >= RATE_LIMIT_MAX) return {
		ok: false,
		retryAfterMs: RATE_LIMIT_WINDOW_MS - (now - globalHits[0])
	};
	globalHits.push(now);
	return { ok: true };
}
var generateComments_createServerFn_handler = createServerRpc({
	id: "0f6edcf5444f104478b90b8548ace5da7b7bb81c1db6a05d8548442237717cae",
	name: "generateComments",
	filename: "src/lib/comments.functions.ts"
}, (opts) => generateComments.__executeServer(opts));
var generateComments = createServerFn({ method: "POST" }).inputValidator((input) => Input.parse(input)).handler(generateComments_createServerFn_handler, async ({ data }) => {
	const limit = checkRateLimit();
	if (!limit.ok) {
		const secs = Math.ceil(limit.retryAfterMs / 1e3);
		throw new Error(`Too many requests. Please try again in ${secs}s.`);
	}
	const key = process.env["DEEPSEEK_API_KEY"];
	if (!key) throw new Error("AI is not configured yet.");
	const { createDeepSeekProvider } = await import("./ai-gateway.server-BIj8Su5R.mjs");
	const deepseek = createDeepSeekProvider(key);
	const raw = (await generateText({
		model: deepseek("deepseek-chat"),
		system: "You write social media comments that sound human. Never use empty praise like 'Great post!'. Reference a specific idea from the original post, add a genuine perspective, and match the culture of the target platform. No hashtags unless the platform expects them. Return exactly three distinct comments, not three rewordings. Respond with ONLY a JSON object of the form {\"comments\":[\"...\",\"...\",\"...\"]} and no markdown fences.",
		prompt: `Original post to reply to:\n"""${data.post}"""\n\nPlatform: ${data.platform}\nTone: ${data.tone}\nComment type: ${data.intent}\n\nWrite 3 distinct comment options.`
	})).text.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "");
	const start = raw.indexOf("{");
	const end = raw.lastIndexOf("}");
	const parsed = Schema.safeParse(JSON.parse(start >= 0 && end > start ? raw.slice(start, end + 1) : raw));
	if (!parsed.success || parsed.data.comments.length === 0) throw new Error("The AI returned an unexpected response. Please try again.");
	return { comments: parsed.data.comments.slice(0, 3) };
});
//#endregion
export { generateComments_createServerFn_handler, comments_functions_CyP9mMtg_exports as t };

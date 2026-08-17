import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-CL_FzAQo2.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as Check, i as ChevronDown, n as Smartphone, o as ArrowUpRight, r as Copy, s as ArrowRight, t as Sparkles } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DL8NOPAm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var generateComments = createServerFn({ method: "POST" }).inputValidator((input) => Input.parse(input)).handler(createSsrRpc("0f6edcf5444f104478b90b8548ace5da7b7bb81c1db6a05d8548442237717cae"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var TONES = [
	"Casual",
	"Professional",
	"Conversational",
	"Friendly",
	"Humorous",
	"Authoritative",
	"Sarcastic",
	"Inspirational"
];
var PLATFORMS = [
	"LinkedIn",
	"X",
	"Instagram",
	"TikTok",
	"Reddit",
	"Facebook",
	"YouTube"
];
var INTENTS = [
	"Engagement / supportive",
	"Value-add insight",
	"Question",
	"Soft promotion",
	"Humor & personality",
	"Customer service"
];
var STEPS = [
	{
		title: "Paste the post",
		body: "Drop in the post you want to reply to, pick the platform, tone and comment type. You get three distinct replies, not three rewordings."
	},
	{
		title: "Pick and polish",
		body: "Copy the strongest draft, add a human detail — a name, a quick story, a platform-native phrase — before you send it."
	},
	{
		title: "Reply from a cloud phone",
		body: "Each account comments from its own Android cloud phone with a unique fingerprint and proxy, so volume never looks like a bot farm."
	}
];
var FAQS = [
	{
		q: "Is the AI comment generator free to try?",
		a: "Yes. Generate comments right on this page without a credit card. A GeeLark account unlocks saved voice profiles, multi-account commenting and cloud phones for every profile."
	},
	{
		q: "Will my comments sound like AI?",
		a: "Not if you use it as a drafting partner. Give it context, generate a few options, and tweak the winner. The result reads like you on a good day, not like a generic bot."
	},
	{
		q: "Can I use it for multiple social accounts?",
		a: "Absolutely. The generator is platform-aware, so you can switch between a polished LinkedIn profile, a witty X handle and a playful Instagram account without losing consistency."
	},
	{
		q: "Does it work in languages other than English?",
		a: "Yes. You can generate replies in most major languages, and the model will mirror the language of the post you paste in."
	},
	{
		q: "How does GeeLark keep accounts safe?",
		a: "Every profile runs on its own Android cloud phone with a distinct device fingerprint and proxy, so commenting across dozens of accounts doesn't share a browser, IP or device signature."
	},
	{
		q: "Is there a limit on how many comments I can generate?",
		a: "The free tool has fair-use limits to keep it fast for everyone. Signed-in workspaces get higher limits for daily engagement routines."
	},
	{
		q: "Can I edit the comments before posting them?",
		a: "Yes — every generated reply is fully editable. Treat the drafts as a starting point: tweak the wording, add a personal detail, then copy it into the app where you'll post it."
	},
	{
		q: "How long does it take to generate comments?",
		a: "Usually a few seconds. The model returns three distinct options at once, so you can pick the strongest, refine it, and move on without breaking your flow."
	},
	{
		q: "What if the comments don't match my brand voice?",
		a: "Choose a tone and comment type that fits, paste a post that reflects your style, and regenerate if the first batch isn't quite right. Saved voice profiles in a GeeLark workspace lock in a consistent voice across accounts."
	},
	{
		q: "Does the generator support threads and reply chains?",
		a: "Yes. Paste the full thread or the specific comment you want to reply to, and the generator reads the context to write a reply that fits the conversation rather than just the original post."
	}
];
var TOOLS = [
	{
		title: "AI post creator",
		description: "Turn a rough idea into a ready-to-publish post, sized and styled for the platform you are posting to.",
		href: "https://geelark-marketing-boost.lovable.app",
		cta: "Create posts"
	},
	{
		title: "TikTok hashtag generator",
		description: "Get a mix of broad, niche and branded TikTok hashtags built around your topic and audience.",
		href: "https://geelark-post-pal.lovable.app",
		cta: "Generate TikTok hashtags"
	},
	{
		title: "TikTok video hook generator",
		description: "Create attention-grabbing opening lines for your TikTok videos that stop the scroll and boost views.",
		href: "https://geelark-post-pal.lovable.app",
		cta: "Generate TikTok hooks"
	},
	{
		title: "Instagram hashtag generator",
		description: "Build hashtag sets for Reels, carousels and photos without hitting Instagram's 30-tag limit.",
		href: "https://geelark-post-pal.lovable.app",
		cta: "Generate Instagram hashtags"
	},
	{
		title: "Instagram bio generator",
		description: "Create a clear Instagram bio with the right hook, keywords and call to action for your link.",
		href: "https://geelark-post-pal.lovable.app",
		cta: "Generate Instagram bios"
	},
	{
		title: "YouTube bold text generator",
		description: "Convert regular text into bold Unicode characters that stand out in YouTube titles, comments and descriptions.",
		href: "https://geelark-post-pal.lovable.app",
		cta: "Generate bold text for YouTube"
	}
];
function CommentGenerator() {
	const [post, setPost] = (0, import_react.useState)("");
	const [tone, setTone] = (0, import_react.useState)(TONES[0]);
	const [platform, setPlatform] = (0, import_react.useState)(PLATFORMS[0]);
	const [intent, setIntent] = (0, import_react.useState)(INTENTS[0]);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const run = useServerFn(generateComments);
	const mutation = useMutation({ mutationFn: () => run({ data: {
		post,
		tone,
		platform,
		intent
	} }) });
	const copy = async (text, i) => {
		await navigator.clipboard.writeText(text);
		setCopied(i);
		setTimeout(() => setCopied(null), 1600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							className: "flex items-center gap-2 font-bold text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 items-center justify-center rounded-xl bg-brand text-brand-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" })
							}), "GeeLark"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#generator",
									className: "hover:text-foreground",
									children: "Generator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									className: "hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#guide",
									className: "hover:text-foreground",
									children: "Guide"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "hover:text-foreground",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#generator",
							className: "rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90",
							children: "Start free"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "generator",
					className: "px-5 pt-20 pb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-4xl text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[56px] font-medium leading-tight tracking-tight",
							children: "AI comment generator"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-12 max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-center text-xl font-medium",
								children: "What post do you want to reply to?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: post,
								onChange: (e) => setPost(e.target.value),
								rows: 5,
								placeholder: "Paste the original post here — e.g. 'Most teams don't have a content problem, they have a distribution problem. Here's what changed for us...'",
								className: "mt-5 w-full resize-none rounded-2xl bg-surface p-4 text-sm outline-none ring-brand/40 transition placeholder:text-muted-foreground focus:ring-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
								label: "Tone",
								options: TONES,
								value: tone,
								onChange: setTone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
								label: "Comment type",
								options: INTENTS,
								value: intent,
								onChange: setIntent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => mutation.mutate(),
								disabled: !post.trim() || mutation.isPending,
								className: "mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-bold text-brand-foreground transition hover:opacity-90 disabled:opacity-45",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), mutation.isPending ? "Writing comments…" : "Generate comment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-center text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "Pro tip:"
								}), " paste the full post and add one line about your angle — better input, better replies."]
							}),
							mutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-xl bg-destructive/10 p-3 text-center text-sm text-destructive",
								children: mutation.error.message || "Something went wrong. Try again."
							}),
							mutation.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-3",
								children: mutation.data.comments.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "group rounded-2xl border border-border bg-surface p-4 text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed whitespace-pre-line",
											children: c
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => copy(c, i),
											"aria-label": "Copy comment",
											className: "shrink-0 rounded-lg border border-border bg-card p-2 text-muted-foreground transition hover:text-foreground",
											children: copied === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
										})]
									})
								}, i))
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "how-it-works",
					className: "px-5 py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-medium sm:text-4xl",
							children: "From comment box to conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-3",
							children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-bold text-brand",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-[22px] font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: s.body
									})
								]
							}, s.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "guide",
					className: "px-5 py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-medium sm:text-4xl",
								children: "How to Write Better Social Media Comments with AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A good social media comment does more than say \"Nice post!\" It adds something relevant to the conversation, responds to what was actually shared, and gives the creator or other users a reason to engage."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "The GeeLark AI Comment Generator helps you turn a social media post, topic, or idea into natural comment suggestions in seconds. You can use it to brainstorm comments for platforms such as Instagram, TikTok, YouTube, Facebook, LinkedIn, and other social networks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Whether you want a comment that sounds friendly, professional, funny, supportive, or conversational, AI can give you a useful starting point. The final comment should still be reviewed and adapted to the actual conversation before you post it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "What Is an AI Comment Generator?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "An AI comment generator is a tool that creates comment suggestions based on the context you provide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Instead of trying to think of a response from scratch, you can enter the post, caption, topic, or key message and generate several possible comments."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example, imagine you're responding to a post about five lessons someone learned while building their first business."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A generic comment might be:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Great post! 🔥"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A more meaningful comment could be:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The point about talking to customers before building really stands out. It's easy to spend months solving a problem people don't actually have."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "The second comment demonstrates that you understood the content and gives the original poster something they can respond to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "That's where an AI comment generator is most useful: helping you find a relevant angle quickly, rather than filling comment sections with generic responses."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "How to Use the AI Comment Generator"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "Creating a comment with GeeLark takes just a few steps."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "1. Add the Post or Context"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Start by entering the social media post you want to respond to, or describe what the post is about."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "The more useful context you provide, the easier it is to generate a relevant comment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Instead of entering:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Marketing post"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Try:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "A LinkedIn post arguing that startups should focus on customer retention before spending more money on acquisition."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "This gives the AI enough information to understand the conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "2. Choose Your Comment Style"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Decide how you want the comment to sound."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Depending on the situation, you might choose a tone such as:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-2 sm:grid-cols-2",
								children: [
									"Friendly",
									"Professional",
									"Casual",
									"Funny",
									"Supportive",
									"Curious",
									"Enthusiastic",
									"Thoughtful"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Match the tone to both the platform and the original post."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A playful TikTok video may invite a completely different response from a professional LinkedIn discussion."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "3. Generate Comment Ideas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Generate several comments and compare the results."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Don't automatically choose the first suggestion. Look for the option that best reflects what you actually want to say."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "4. Personalize Your Comment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Before posting, add your own perspective when appropriate."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A generated comment such as:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "That's a great point about consistency. Small improvements really add up over time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "could become:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "That's a great point about consistency. We saw something similar when we stopped changing our content strategy every two weeks and gave each experiment more time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "The second version is more specific because it contributes a real experience to the discussion."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "How to Write a Good Social Media Comment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "The best comments usually feel like part of a conversation rather than a piece of promotion."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Here are several principles to keep in mind."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Respond to Something Specific"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Reference an idea, example, question, or detail from the original content."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Instead of:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Very insightful!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Try:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Your point about testing the hook before changing the entire video is especially useful. That's an easy variable to overlook."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Specificity signals that the comment is actually connected to the post."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Add Something to the Conversation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "You don't always need to agree with the creator. A useful comment can contribute:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"A related experience",
									"An additional example",
									"A useful observation",
									"A respectful alternative perspective",
									"A follow-up question",
									"A practical tip"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "We've found the same thing with short-form video. I'd add that the first frame matters almost as much as the opening line, especially when people are scrolling quickly."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Now the comment provides information instead of simply offering praise."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Ask Questions That Are Easy to Answer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Questions can encourage conversation when they're genuinely relevant."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Instead of:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Thoughts?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Try:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Did you notice the biggest improvement from changing the topic, the hook, or the editing style?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A specific question gives the other person something concrete to respond to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Keep the Comment Relevant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Avoid forcing your product, website, or service into an unrelated conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Great advice! By the way, check out our marketing software..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "may feel promotional even if the first sentence is relevant."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "If your company or experience genuinely relates to the discussion, explain the connection naturally rather than turning every comment into an advertisement."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Avoid Generic AI Comments"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "One of the biggest risks of using an AI comment generator is producing comments that technically make sense but don't say anything meaningful."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Common examples include:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"Great insights! Thanks for sharing.",
									"This is so valuable! 🔥",
									"Couldn't agree more!",
									"Absolutely! Consistency is key.",
									"Love this perspective!"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "There is nothing inherently wrong with short supportive comments. But if every response follows the same pattern, your comments can quickly feel automated."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A stronger comment usually includes at least one detail connected to the original content."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-semibold text-foreground",
								children: "Generic:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Great tips! This is really helpful."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-semibold text-foreground",
								children: "Better:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The suggestion to repurpose customer questions into content is a good one. It solves the \"what should we post?\" problem while keeping the topics grounded in what customers actually care about."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "AI should help you create a more relevant response—not remove the need to understand what you're responding to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "AI Comment Examples for Different Social Media Platforms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "Different social networks have different communities and communication styles. Adapt your comment to the platform instead of posting the exact same response everywhere."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Instagram Comment Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Instagram comments often work well when they're concise and directly related to the photo, Reel, carousel, or caption."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a travel Reel:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "That sunrise view alone looks worth the early wake-up 😍 Was this crowded when you went?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For an educational carousel:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Slide 4 is such an important point. It's easy to focus on posting more when improving the actual message might make a bigger difference."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a product announcement:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The new design looks clean 👏 Curious to see how the new workflow works in practice."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "TikTok Comment Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "TikTok comments are often shorter and more conversational."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a tutorial:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The fact that step 2 was the problem the whole time 😭 This would've saved me an hour."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a travel video:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Adding this to the list immediately ✈️ What month did you visit?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For an educational TikTok:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "That last tip deserves its own video 👀"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A TikTok comment doesn't need to be long to be relevant. It simply needs to fit naturally into the conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "YouTube Comment Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "YouTube gives viewers an opportunity to respond to longer-form content, so comments can often go deeper into a particular point from the video."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a tutorial:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The explanation around 6:20 finally made this click for me. I had been changing both variables at once, which explains why my tests were impossible to compare."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For an educational video:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Interesting point about retention being more important than views alone. I'd be curious to see a follow-up comparing retention across different video lengths."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a review:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Really appreciate that you showed the limitations as well as the good parts. How has it held up after using it for a few months?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Referencing something specific from the video can make a YouTube comment considerably more useful than a generic response."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "LinkedIn Comment Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "LinkedIn comments often benefit from professional context, personal experience, or a thoughtful question."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For an industry post:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The point about distribution is important. Teams often spend most of their resources creating content and comparatively little thinking about how the right audience will actually find it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a founder story:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "This is a useful reminder that early customer feedback doesn't always mean adding more features. Sometimes the better decision is simplifying what already exists."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a data-driven post:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Interesting result. Do you think the improvement came primarily from the new positioning, or did the change in audience targeting play a significant role too?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Avoid turning every LinkedIn comment into a miniature essay. Say as much as you need to make your point."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-8 text-lg font-semibold",
								children: "Facebook Comment Examples"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed text-muted-foreground",
								children: "Facebook comments can range from quick reactions to longer discussions, depending on whether you're interacting with a business Page, Group, creator, or community."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a local business post:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "These look amazing! Is the seasonal menu available all month?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For a community discussion:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "We tried something similar last year. Starting with a smaller group made organizing everything much easier before opening it up to everyone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For an educational post:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "The second tip worked well for us. I'd also recommend testing one change at a time so you can tell what actually affected the result."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "As with other platforms, context matters more than following one fixed comment formula."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "How Long Should a Social Media Comment Be?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "There is no perfect comment length."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A useful comment could be five words or several paragraphs depending on the conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Where was this filmed? 👀"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "is perfectly reasonable when responding to a travel video."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "But if you're contributing to a detailed professional discussion, a longer response may be more appropriate."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Instead of aiming for a specific character count, ask:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Does the comment say everything it needs to say without unnecessary filler?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "If yes, it's probably long enough."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "Can AI Generate Replies to Social Media Comments?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "Yes. An AI comment generator can also help you brainstorm responses to comments people leave on your own content."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example, suppose someone comments:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "We've been struggling with exactly this. How do you decide which content ideas are worth testing?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "A useful response might be:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "We usually start with questions customers are already asking, then prioritize ideas that connect those questions to a clear problem we can help solve. It gives us a much stronger starting point than brainstorming topics from scratch."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For brands and creators, replying thoughtfully can be just as important as writing the original post."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "AI can help draft the response, but make sure factual questions, complaints, support requests, and sensitive conversations are reviewed carefully before replying."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "How to Make AI-Generated Comments Sound More Natural"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "If a generated comment sounds too generic or robotic, don't just regenerate it repeatedly. Give the AI better instructions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Provide information such as:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"The original post: What exactly are you responding to?",
									"Platform: Is this Instagram, TikTok, YouTube, LinkedIn, or somewhere else?",
									"Your perspective: Do you agree, disagree, have experience with the topic, or want to learn more?",
									"Tone: Should the response be casual, professional, funny, curious, or supportive?",
									"Length: Do you want a quick reaction or a more thoughtful response?"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "For example, instead of:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Generate a LinkedIn comment about this post."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Try:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
								children: "Write a short LinkedIn comment responding to the author's point about content distribution. Agree with the main argument, add that teams often spend too much time creating content compared with distributing it, and keep the tone conversational."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Better context generally leads to more specific comments."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "Should You Use AI-Generated Comments?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "AI-generated comments can save time when they're used to help you think and write, rather than to imitate genuine engagement at scale."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Good uses include:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"Brainstorming ways to respond",
									"Improving the wording of a comment",
									"Turning an idea into a concise response",
									"Adjusting your tone for a platform",
									"Generating follow-up questions",
									"Drafting replies to comments on your own posts"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Before publishing an AI-generated comment, check that it:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"Accurately reflects the original content",
									"Says something you genuinely want to communicate",
									"Doesn't invent personal experiences or facts",
									"Matches the context and tone",
									"Doesn't make unsupported claims",
									"Doesn't sound like generic spam"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "If the AI writes, \"I tried this last year and it completely changed my business,\" don't post it unless that's actually true."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "AI can help with the words. You remain responsible for what the comment says."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-[22px] font-semibold",
								children: "Create Social Media Comments in Seconds"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: "Use the GeeLark AI Comment Generator to create relevant comment ideas without starting from a blank box."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "Add the post or topic you want to respond to, choose your preferred tone, and generate comments for Instagram, TikTok, YouTube, Facebook, LinkedIn, and other social platforms."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "You can generate a quick reaction, thoughtful response, question, professional comment, or casual reply—and then personalize it before posting."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: "The goal isn't to comment more for the sake of commenting. It's to make it easier to contribute something worth reading."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "faq",
					className: "px-5 py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-medium sm:text-4xl",
							children: "Frequently asked questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-8",
							children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: f.q,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-left text-base font-semibold",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: f.a
								})]
							}, f.q))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "more-tools",
					className: "px-5 py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-medium tracking-tight sm:text-4xl",
							children: "More free tools for creators"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: t.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold",
									children: t.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t.description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-5 ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary",
									children: [t.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})]
							}, t.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl rounded-3xl bg-brand px-8 py-16 text-center text-brand-foreground shadow-glow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-medium sm:text-4xl",
								children: "Write it here. Reply from anywhere."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl opacity-90",
								children: "Draft the comment, then send it from a real cloud phone with its own identity."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#generator",
								className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-medium text-foreground transition hover:opacity-90",
								children: ["Start free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-5 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto max-w-6xl text-sm text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" GeeLark. Cloud phones for multi-account social growth."
					]
				})
			})
		]
	});
}
function ChipRow({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onChange(o),
				className: cn("rounded-full px-4 py-2 text-sm transition", value === o ? "bg-brand text-brand-foreground" : "bg-surface text-muted-foreground hover:text-foreground"),
				children: o
			}, o))
		})]
	});
}
//#endregion
export { CommentGenerator as component };

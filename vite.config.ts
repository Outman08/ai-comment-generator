// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // 部署到 Vercel：让 nitro 输出 Vercel Functions 格式（默认是 cloudflare）
    nitro: { preset: "vercel" },
  },
  vite: {
    ssr: {
      // 强制 Vite 把这些包打包进 SSR bundle，确保模块加载顺序正确
      // 解决 Vercel 部署时 createMiddleware is not a function 的问题
      noExternal: [
        "@tanstack/start-client-core",
        "@tanstack/start-server-core",
        "@tanstack/start-fn-stubs",
      ],
    },
  },
});

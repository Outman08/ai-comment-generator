import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// 根据环境变量决定是否加载中间件
// Vercel 环境下 createCsrfMiddleware/createMiddleware 有兼容性问题，不加载
const isVercel = process.env["VERCEL"] === "1";

const requestMiddleware = isVercel
  ? []
  : (() => {
      const errorMiddleware = createMiddleware().server(async ({ next }) => {
        try {
          return await next();
        } catch (error) {
          if (error != null && typeof error === "object" && "statusCode" in error) {
            throw error;
          }
          console.error(error);
          return new Response(renderErrorPage(), {
            status: 500,
            headers: { "content-type": "text/html; charset=utf-8" },
          });
        }
      });
      return [errorMiddleware];
    })();

export const startInstance = createStart(() => ({
  requestMiddleware,
}));

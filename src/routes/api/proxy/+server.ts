import { VITE_API_SERVER_URL } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

const API_BASE = VITE_API_SERVER_URL;

const proxyRequest: RequestHandler = async ({ request, url, locals }) => {
  const targetUrl = API_BASE + url.pathname.replace("/api/proxy", "");

  const auth = await locals.auth();
  const user = auth?.user;
  const Authorization = user ? `Bearer ${(user as any).name}` : ""; // 필요하면 인증 헤더 추가
  const headers = {
    ...Object.fromEntries(request.headers), // 기존 헤더 유지
  };
  if (Authorization) {
    headers.Authorization = Authorization;
  }
  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? await request.text()
        : null,
  });

  return new Response(await response.text(), {
    status: response.status,
    headers: response.headers,
  });
};

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const DELETE = proxyRequest;

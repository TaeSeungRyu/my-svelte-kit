import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ request }) => {
  return json(
    {
      // retrieve a specific header
      userAgent: request.headers.get("user-agent"),
      justSimpleData: "hello",
    },
    {
      // set a header on the response
      headers: { "x-custom-header": "custom header!" },
    }
  );
};

import type { LayoutServerLoad } from "./$types";

export const ssr = true;
//루트 레이아웃 로더
export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.auth();
  const stringUser = JSON.stringify(session?.user) || "";
  return {
    a: 1,
    desc: "a라는 값은 루트에서 내려주는 값",
    sessionName: stringUser,
  };
};

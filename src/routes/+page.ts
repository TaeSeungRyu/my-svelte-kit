import type { PageLoad } from "./$types";

export const ssr = true; //서버에서만 실행 되도록 설정
export const load: PageLoad = async ({ fetch, params }) => {
  const serverReqResult = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const serverReqData = await serverReqResult.json();
  return {
    preload: {
      data1: `Title for ${params}`,
      data2: `Content for ${params}`,
      ...serverReqData,
    },
  };
};

import type { PageLoad } from "./$types";

export const ssr = true;
export const load: PageLoad = async ({ fetch, params, parent }) => {
  const serverReqResult = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const serverReqData = await serverReqResult.json();
  const { a } = await parent(); //layout에서 return한 값
  return {
    b: a + 1003,
    preload: {
      data1: `Title for ${params}`,
      data2: `Content for ${params}`,
      ...serverReqData,
    },
  };
};

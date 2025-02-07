//서버 사이드 렌더링을 위한 파일(클라이언트에서 동작 x)
export const load = async ({ fetch }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const result = await res.json();
  return { result };
};

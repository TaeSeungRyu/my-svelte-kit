<script lang="ts">
  import type { PageProps } from "./$types";
  import { signIn, signOut } from "@auth/sveltekit/client";

  let { data }: PageProps = $props();
  //console.log(data);
  const _signin = async () => {
    const signinResult = await signIn("credentials", {
      email: "email@aaa.com",
      password: "email from custom signin",
      redirect: false,
    });
    //console.log("signinResult : ", signinResult);
    if (signinResult?.status === 200) {
      signinResult.body
        ?.getReader()
        .read()
        .then(({ done, value }) => {
          console.log("signinResult.body : ", new TextDecoder().decode(value));
        });
    }
  };
  const _signOut = async () => {
    const signoutResult = await signOut();
    //console.log("signoutResult : ", signoutResult);
  };
</script>

<p>스벨트...</p>
<div>
  {JSON.stringify(data)}
</div>
<div>
  <a
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
    href="/main">go main page</a
  >
  <div class="flex flex-row my-4 gap-4 items-center">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onclick={_signin}
      >로그인 해 보기(별도의 리다이렉션 추가는 안했습니다.)</button
    >
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onclick={_signOut}>로그아웃</button
    >
    <div
      class="capitalize font-bold col-span-2 text-center bg-gray-200 p-4 rounded-lg"
    >
      로그인 여부 세션 :{data.sessionName}
    </div>
  </div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</div>

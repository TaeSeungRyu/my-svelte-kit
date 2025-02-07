<script lang="ts">
  import type { PageProps } from "./$types";
  import { signIn, signOut } from "@auth/sveltekit/client";

  let { data }: PageProps = $props();
  console.log(data);
  const _signin = async () => {
    const signinResult = await signIn("credentials", {
      email: "email@aaa.com",
      password: "email from custom signin",
      redirect: false,
    });
    console.log("signinResult : ", signinResult);
  };
  const _signOut = async () => {
    const signoutResult = await signOut();
    console.log("signoutResult : ", signoutResult);
  };
</script>

<p>스벨트...</p>
<div>
  {JSON.stringify(data)}
</div>
<div>
  <a href="/main">go main page</a>
  <div style="margin-top: 20px;">
    <button onclick={_signin}
      >로그인 해 보기(별도의 리다이렉션 추가는 안했습니다.)</button
    >
    <button onclick={_signOut}>로그아웃</button>
    <div>로그인 여부 세션 :{data.sessionName}</div>
  </div>
</div>

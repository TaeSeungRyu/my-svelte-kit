<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  //console.log(data);
  import { goto } from "$app/navigation";

  function navigateToPage() {
    goto("/");
  }

  let sampleData = $state({
    data: "sample",
  });

  //proxy 요청 테스트
  //localhost 부분을 나중에 env로 변경해야 함
  const requestApiServer = async () => {
    const response = await fetch("http://localhost:5173/api/proxy");
    const _data = await response.json();
    sampleData.data = JSON.stringify(_data);
  };
</script>

<p>메인 페이지 라우팅 샘플</p>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
  type="button"
  onclick={navigateToPage}>뒤로가기</button
>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
  type="button"
  onclick={requestApiServer}>API 서버 proxy 요청</button
>
<div>
  sampleData ::: {sampleData.data}
</div>

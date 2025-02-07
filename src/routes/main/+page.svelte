<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  console.log(data);
  import { goto } from "$app/navigation";

  function navigateToPage() {
    goto("/");
  }
</script>

<p>메인 페이지 라우팅 샘플</p>
<button type="button" onclick={navigateToPage}>뒤로가기</button>

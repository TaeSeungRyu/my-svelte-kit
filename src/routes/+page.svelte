<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  console.log(data);
</script>

<p>스벨트...</p>
<div>
  {JSON.stringify(data)}
</div>

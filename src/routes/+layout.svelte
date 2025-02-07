<script lang="ts">
  //루트 레이아웃 컴포넌트
  import type { LayoutProps } from "./$types";
  let { data, children }: LayoutProps = $props();
</script>

<h1>~layout area~</h1>

{@render children()}

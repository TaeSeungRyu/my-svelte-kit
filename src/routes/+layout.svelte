<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<h1>~layout area~</h1>

{@render children()}

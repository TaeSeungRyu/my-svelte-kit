<script lang="ts">
  //루트 레이아웃 컴포넌트
  import type { LayoutProps } from "./$types";
  import "../app.css"; //전역 스타일 적용
  let { data, children }: LayoutProps = $props();
  import { beforeNavigate } from "$app/navigation";
  import { onMount } from "svelte";

  //페이지 접근 제어하는 방법
  beforeNavigate((to) => {
    console.log("page move to beforeNavigate : ", to);
  });

  //새로고침 시에도 실행됨
  onMount(() => {
    console.log("page move to onMount");
  });
</script>

<h1>~layout area~</h1>

{@render children()}

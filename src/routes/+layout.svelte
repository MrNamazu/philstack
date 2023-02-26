<script>
  import Sidebar from "$lib/components/layout/sidebar.svelte";
  import "../app.css";
</script>

<div class="flex">
  <Sidebar />
  <div class="flex-1 ml-[50px] p-2">
    <slot />
  </div>
</div>


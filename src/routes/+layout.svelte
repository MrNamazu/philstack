<script>
  import Logo from '$lib/components/logo.svelte';
  import "../app.css";
</script>

<div class="h-full">
  <div class="w-[75px] h-full bg-[#141414] fixed flex flex-col justify-between">
    <div>
      <a href="/">
        <Logo />
      </a>
    </div>
    <div class="flex flex-col items-center gap-4 mb-5">
      <a href="/" class="test">
        <div class="h-1 w-1 bg-white"></div> 
        Github 
        <div class="h-1 w-1 bg-white"></div>
      </a>
      <a href="/" class="test">
        <div class="h-1 w-1 bg-white"></div> 
        LinkedIn 
        <div class="h-1 w-1 bg-white"></div>
      </a>
      <a href="/" class="test">
        <div class="h-1 w-1 bg-white"></div> 
        Linktree
        <div class="h-1 w-1 bg-white"></div>
      </a>
    </div>
  </div>
  <div class="ml-[75px] h-full">
    <slot />
  </div>
</div>

<style>
  .test {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
  }
</style>
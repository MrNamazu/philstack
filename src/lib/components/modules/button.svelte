<script lang="ts">
  export let link: string;
</script>

<a href={link}>
  <button class="px-6 p-3 font-semibold uppercase bg-gradient-to-r from-rose-500 to-orange-500">
    <slot/>
  </button>
</a>
<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: songs = data.songs;
</script>

{#each songs as song}
  <div class="card bg-base-100">
    <div class="card-body">
      <h2 class="card-title">{song}</h2>
    </div>
  </div>
{/each}

<script lang="ts">
  import type { PageData } from './$types';
  import LyricListItem from './LyricListItem.svelte';

  export let data: PageData;

  $: songs = data.songs;
</script>

<div class="card bg-base-100">
  <div class="card-body">
    {#each songs as song, i}
      <LyricListItem index={i + 1} songName={song.name} id={song.id} />
    {/each}
  </div>
</div>

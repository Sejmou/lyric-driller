<script lang="ts">
  import type { PageData } from './$types';
  import LyricListItem from './LyricListItem.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let songs = $derived(data.songs);
</script>

<div class="card bg-base-100">
  <div class="card-body">
    {#each songs as song, i}
      <LyricListItem index={i + 1} songName={song.name} id={song.id} />
    {/each}
  </div>
</div>

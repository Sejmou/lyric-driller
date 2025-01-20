<script lang="ts">
  import type { SongSection } from '$lib/types/song';
  import Icon from '@iconify/svelte';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import SectionLines from './SectionLines.svelte';
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let song = $derived(data.song);
  let sections = $derived(song.lyrics);

  let sectionIdx: number = $state();
  let section: SongSection = $state();

  onMount(() => {
    sectionIdx = 0;
    section = sections[sectionIdx];
  });

  function handleNextSection() {
    if (sectionIdx >= sections.length - 1) return;
    sectionIdx++;
    section = sections[sectionIdx];
  }

  function handlePrevSection() {
    if (sectionIdx <= 0) return;
    sectionIdx--;
    section = sections[sectionIdx];
  }

  let hasNext = $derived(sectionIdx < sections.length - 1);
  let hasPrev = $derived(sectionIdx > 0);
</script>

<div class="flex flex-1 flex-col w-full items-center gap-2">
  <div class="w-full">
    <a class="btn btn-neutral mb-1" href="/lyrics">
      <Icon icon="mdi:arrow-left-circle" class="w-6 h-6" />
    </a>
    <h1 class="text-center mb-2">{song.name}</h1>
  </div>
  {#if section}
    <div class="flex gap-2 w-full justify-center items-center">
      <button
        class="btn btn-neutral"
        onclick={handlePrevSection}
        disabled={!hasPrev}
      >
        <Icon icon="mdi:skip-previous" class="w-8 h-8" />
      </button>
      <span>{section.name}</span>
      <button
        class="btn btn-neutral"
        onclick={handleNextSection}
        disabled={!hasNext}
      >
        <Icon icon="mdi:skip-next" class="w-8 h-8" />
      </button>
    </div>
    <SectionLines lines={section.lines} />
  {/if}
</div>

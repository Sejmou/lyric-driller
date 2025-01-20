<script lang="ts">
  import { run } from 'svelte/legacy';

  import { alwaysShowFirstLine } from '$lib/stores/settings';
  import { get } from 'svelte/store';
  import Icon from '@iconify/svelte';
  interface Props {
    lines: string[];
  }

  let { lines }: Props = $props();


  function init() {
    const showFirstLine = get(alwaysShowFirstLine);
    if (showFirstLine) {
      visibleLines = [lines[0]];
      remainingLines = [...lines.slice(1)];
    } else {
      visibleLines = [];
      remainingLines = [...lines];
    }
  }

  let visibleLines: string[] = $state([]);
  let remainingLines: string[] = $state([]);

  function handleNext() {
    const next = remainingLines[0];
    if (!next) {
      console.warn('no next line');
      return;
    }
    visibleLines = [...visibleLines, next];
    remainingLines = remainingLines.slice(1);
  }

  function handleReset() {
    init();
  }

  // this is a bit whacky, but it works
  run(() => {
    if (lines) init();
  });
  let atLastLine = $derived(remainingLines.length === 0);
</script>

<div class="flex-1 overflow-y-auto">
  {#each visibleLines as line}
    <p class="text-center">{line}</p>
  {/each}
</div>
<div class="flex gap-2">
  <button class="btn btn-neutral" onclick={handleReset}>
    <Icon icon="mdi:restart" class="w-8 h-8" />
  </button>
  <button class="btn btn-neutral" onclick={handleNext} disabled={atLastLine}
    ><Icon icon="ci:add-row" class="w-8 h-8" /></button
  >
</div>

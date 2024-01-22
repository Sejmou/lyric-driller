<script lang="ts">
  import Icon from '@iconify/svelte';
  export let lines: string[];

  // this is a bit whacky, but it works
  $: if (lines) init();

  function init() {
    visibleLines = [];
    remainingLines = [...lines];
  }

  let visibleLines: string[] = [];
  let remainingLines: string[] = [];

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

  $: atLastLine = remainingLines.length === 0;
</script>

<div class="flex-1 overflow-y-auto">
  {#each visibleLines as line}
    <p class="text-center">{line}</p>
  {/each}
</div>
<div class="flex gap-2">
  <button class="btn btn-neutral" on:click={handleReset}>
    <Icon icon="mdi:restart" class="w-8 h-8" />
  </button>
  <button class="btn btn-neutral" on:click={handleNext} disabled={atLastLine}
    ><Icon icon="ci:add-row" class="w-8 h-8" /></button
  >
</div>

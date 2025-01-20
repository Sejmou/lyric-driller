<script lang="ts">
  import type { SongSection } from '$lib/types/song';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  interface Props {
    section: SongSection;
    index: number;
    onAdd: (section: SongSection) => void;
    canRemove?: boolean;
    onRemove: (index: number) => void;
  }

  let {
    section = $bindable(),
    index,
    onAdd,
    canRemove = true,
    onRemove
  }: Props = $props();

  let inputElement: HTMLTextAreaElement = $state();

  onMount(() => {
    inputElement.focus();
  });

  let linesStr = $derived(section.lines.join('\n'));

  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const lines = target.value.split('\n');

    // iterate through lines, emit onAdd event if two empty lines follow each other directly
    let emptyLineCount = 0;
    let splitIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '') {
        emptyLineCount++;
        if (emptyLineCount === 2) {
          splitIndex = i;
          break;
        }
      } else {
        emptyLineCount = 0;
      }
      if (emptyLineCount === 2) {
        lines.splice(i - 1, 1);
        emptyLineCount = 0;
        i--;
      }
    }

    if (splitIndex !== -1) {
      const newSection = {
        name: '',
        lines: lines.slice(splitIndex + 1).filter(line => line.trim() !== ''),
      };
      lines.splice(splitIndex + 1);
      section.lines = lines.filter(line => line.trim() !== '');
      onAdd(newSection);
    } else {
      section.lines = lines;
    }

    section.lines = lines;
  }
</script>

<div class="w-full flex gap-2">
  <input type="text" bind:value={section.name} placeholder="Section name" />
  {#if canRemove}
    <button
      onclick={() => onRemove(index)}
      onkeydown={event => {
        if (event.key === 'Enter') onRemove(index);
      }}
    >
      <Icon icon="mdi:close" class="w-6 h-6 text-gray-500 cursor-pointer" />
    </button>
  {/if}
</div>
<textarea
  class="w-full h-32 p-2 border rounded"
  value={linesStr}
  bind:this={inputElement}
  oninput={handleInput}
></textarea>

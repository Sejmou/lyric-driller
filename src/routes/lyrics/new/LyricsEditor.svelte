<script lang="ts">
  import type { Song, SongSection } from '$lib/types/song';
  import SectionEditor from './SectionEditor.svelte';

  export let song: Song;

  $: name = song.name;
  $: sections = song.lyrics;
  $: disabled = name.trim() === '' || sections.length === 0;

  function handleAdd(section: SongSection) {
    sections = [...sections, section];
  }

  function handleRemove(index: number) {
    sections = sections.filter((_, i) => i !== index);
  }

  function handleNameInput(event: Event) {
    const target = event.target as HTMLInputElement;
    name = target.value;
  }

  export let onCancel: () => void;
  export let onSave: () => void;
</script>

<input
  type="text"
  value={name}
  on:input={handleNameInput}
  placeholder="Song name"
/>
{#each sections as section, index}
  <SectionEditor
    {section}
    {index}
    onAdd={handleAdd}
    onRemove={handleRemove}
    canRemove={sections.length > 1}
  />
{/each}
<div class="w-full flex gap-2">
  <button {disabled} class="btn btn-primary" on:click={() => onSave()}
    >Save</button
  >
  <button class="btn btn-error" on:click={() => onCancel()}>Cancel</button>
</div>

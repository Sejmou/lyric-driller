<script lang="ts">
  import { run } from 'svelte/legacy';

  import type { Song, SongSection } from '$lib/types/song';
  import SectionEditor from './SectionEditor.svelte';



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

  interface Props {
    song: Song;
    onCancel: () => void;
    onSave: () => void;
  }

  let { song, onCancel, onSave }: Props = $props();
  let name;
  run(() => {
    name = song.name;
  });
  let sections;
  run(() => {
    sections = song.lyrics;
  });
  let disabled = $derived(name.trim() === '' || sections.length === 0);
</script>

<input
  type="text"
  value={name}
  oninput={handleNameInput}
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
  <button {disabled} class="btn btn-primary" onclick={() => onSave()}
    >Save</button
  >
  <button class="btn btn-error" onclick={() => onCancel()}>Cancel</button>
</div>

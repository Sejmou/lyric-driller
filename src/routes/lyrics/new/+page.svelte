<script lang="ts">
  import type { Song, SongSection } from '$lib/types/song';
  import LyricsEditor from './LyricsEditor.svelte';
  let song: Song | null = $state(null);

  function handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      const text = e.target!.result as string;
      song = processText(text);
    };
    reader.readAsText(file);
  }

  function handleEnterLyrics() {
    song = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      lyrics: [
        {
          name: '',
          lines: [''],
        },
      ],
    };
  }

  function processText(text: string): Song {
    // squash more than 2 consecutive newlines into 2 newlines
    text = text.replace(/\n{3,}/g, '\n\n');
    const lyrics: SongSection[] = text.split('\n\n').map(block => {
      const lines = block.split('\n').map(line => line.trim());
      return {
        name: '',
        lines,
      };
    });
    return {
      // generate a random id
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      lyrics,
    };
  }

  function handleSave() {
    console.log(JSON.stringify(song));
  }

  function handleCancel() {
    song = null;
  }
</script>

{#if !song}
  <div class="flex flex-col items-center gap-2">
    <input
      class="file-input"
      type="file"
      accept=".txt"
      onchange={handleFileInput}
    />
    <span>or</span>
    <button class="btn" onclick={handleEnterLyrics}>Enter lyrics</button>
  </div>
{:else}
  <LyricsEditor {song} onSave={handleSave} onCancel={handleCancel} />
{/if}

<script lang="ts">
  import Icon from '@iconify/svelte';

  export let index: number;
  export let songName: string;
  export let id: string;
  let hovered = false;

  function handleMouseEnter() {
    hovered = true;
  }

  function handleMouseLeave() {
    hovered = false;
  }
</script>

<li
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class="flex items-center justify-between hover:opacity-60 pt-2"
>
  <a href={`/lyrics/${id}`}>
    <div class="flex items-center space-x-4">
      <div class="relative flex-shrink-0">
        {#if hovered}
          <div>
            <Icon icon="mdi-play-circle" class="w-6 h-6 text-primary" />
          </div>
        {:else}
          <div class="w-6 h-6 flex items-center justify-center">{index}</div>
        {/if}
      </div>
      <div>
        <p class="font-medium">{songName}</p>
        <!-- <p class="text-gray-500">Artist Name 1</p> -->
      </div>
    </div>
  </a>
</li>

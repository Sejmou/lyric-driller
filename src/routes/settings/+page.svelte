<script lang="ts">
  import { alwaysShowFirstLine } from '$lib/stores/settings';
</script>

<div class="card max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Sections</h2>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Always show first line</span>
        <input
          type="checkbox"
          bind:checked={$alwaysShowFirstLine}
          class="checkbox"
        />
      </label>
    </div>
  </div>
</div>

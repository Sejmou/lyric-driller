<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/ui/Navbar/Navbar.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
</script>

<!-- TODO: Change this as needed. -->
<!-- Can also override stuff on subsites. -->
<svelte:head>
  <title>Lyric Drill</title>
  <meta name="description" content="Make sure you know those lyrics!" />
  <meta name="keywords" content="music, lyrics, drill" />
  <meta name="author" content="Samo Kolter" />
</svelte:head>

<div class="flex flex-col min-h-[100vh] bg-base-200">
  <Navbar />
  <main
    class="flex-1 flex flex-col p-4 w-full max-w-screen-lg mx-auto my-auto box-border"
  >
    <slot />
  </main>
  <Footer />
</div>

<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/ui/Navbar/Navbar.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
</script>

<!-- TODO: Change this as needed. -->
<!-- Can also override stuff on subsites. -->
<svelte:head>
  <title>App Name</title>
  <meta name="description" content="App description" />
  <meta name="keywords" content="App keywords" />
  <meta name="author" content="Your name here" />
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

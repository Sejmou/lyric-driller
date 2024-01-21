<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a {href} class={$page.url.pathname == href ? 'text-black dark:text-white' : 'text-gray-500'}
	><slot /></a
>

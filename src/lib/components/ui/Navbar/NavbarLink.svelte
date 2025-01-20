<script lang="ts">
	import { page } from '$app/stores';
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a {href} class={$page.url.pathname == href ? 'text-black dark:text-white' : 'text-gray-500'}
	>{@render children?.()}</a
>

<script>
	export let routes;
	export let prefix = "";
	export let level;
	import { page } from "$app/stores";
</script>

<nav class="flex flex-col">
	<div class="flex-row [&>*]:m-2">
		{#if level === 1}
			<a class="rounded-lg bg-purple-400 px-4 text-black hover:bg-purple-500" href="/">Home</a>
		{/if}
		{#each routes as route}
			{#if level === 1}
				<a
					class="rounded-lg bg-purple-400 px-4 text-black hover:bg-purple-500"
					href="{prefix}{route.link}">{route.display.replace("/", "")}</a>
			{:else if level === 2}
				<a
					class="rounded-lg bg-violet-400 px-4 text-black hover:bg-violet-500"
					href="{prefix}{route.link}">{route.display.replace("/", "")}</a>
			{:else if level === 3}
				<a
					class="rounded-lg bg-indigo-400 px-4 text-black hover:bg-indigo-500"
					href="{prefix}{route.link}">{route.display.replace("/", "")}</a>
			{:else if level === 4}
				<a
					class="rounded-lg bg-blue-400 px-4 text-black hover:bg-blue-500"
					href="{prefix}{route.link}">{route.display.replace("/", "")}</a>
			{/if}
		{/each}
	</div>
</nav>

<style>
</style>

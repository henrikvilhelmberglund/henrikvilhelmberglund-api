<script>
	import { toNiceDate } from "./helpers";

	export let post;
</script>

<div class="flex w-[60%] items-center from-slate-200 to-slate-300 bg-gradient-to-b p-4 rounded-md">
	<h2 class="text-2xl">{post.title}</h2>
	<p>{toNiceDate(post.date)}</p>
	<p class="text-lg">{post.content}</p>
	<div class="flex flex-row gap-2 self-end pt-9">
		{#each post.tags as tag}
			<a class="rounded-2xl bg-white p-1" href="/tag/{tag}">
				#{tag}
			</a>
		{/each}
	</div>
</div>

<style>
</style>

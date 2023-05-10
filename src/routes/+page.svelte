<script>
	import Footer from "$lib/Footer.svelte";
	import { toNiceDate } from "$lib/helpers.js";

	export let data;
</script>

<main class="[&>*]:m-4">
  <div class="flex items-center justify-center gap-12">
    <h1 class="text-3xl">Blog</h1>
		{#each data.posts as post}
			<div class="flex w-[60%] items-center bg-slate-300 p-4">
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
		{/each}
	</div>
</main>

<Footer />

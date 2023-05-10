<script>
	import Footer from "$lib/Footer.svelte";
	import Post from "$lib/Post.svelte";
	import { toNiceDate } from "$lib/helpers.js";

	export let data;
</script>

<main class="[&>*]:m-4">
	<h1 class="text-3xl">Blog</h1>
	<div class="flex items-center justify-center gap-12">
		{#each data.posts as post}
			<Post {post} />
		{/each}
	</div>
</main>

<Footer />

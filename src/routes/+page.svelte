<script>
	import Footer from "$lib/Footer.svelte";
	import Post from "$lib/Post.svelte";
	import { toNiceDate } from "$lib/helpers.js";

	export let data;
</script>

<main class="[&>*]:m-4">
	<div class="flex items-center justify-center gap-12">
		<h1 class="text-3xl">Blog</h1>
		{#if data.posts.length > 0}
			{#each data.posts as post}
				<Post {post}/>
			{/each}
		{:else}
			<h2 class="text-2xl">There are no posts yet!</h2>
		{/if}
	</div>
</main>

<Footer />

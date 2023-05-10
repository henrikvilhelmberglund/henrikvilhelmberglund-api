<script>
	const api = [
		{
			title: "Get all posts",
			method: "GET",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts",
		},
		{
			title: "Get a single post",
			method: "GET",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts/1",
		},
		{
			title: "Get the latest posts",
			method: "GET",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts?latest=true",
		},
		{
			title: "Get some posts",
			method: "GET",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts?limit=2",
		},
		{
			title: "Get posts with tag",
			method: "GET",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts?tag=meditation",
		},
		{
			title: "Add a post",
			method: "POST",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts",
			format: `{
  "title": "Title here",
  "content": "Post content here",
  "date": "Datetime here",
  "tags": ["tags", "over", "here"]
}`,
		},
		{
			title: "Update a post",
			method: "PUT",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts/1",
			format: `{
  "title": "Title here",
  "content": "Post content here",
  "date": "Datetime here",
  "tags": ["tags", "over", "here"]
}`,
		},
		{
			title: "Delete a post",
			method: "DELETE",
			link: "https://henrikvilhelmberglund-api.vercel.app/api/posts/1",
		},
	];
</script>

<main class="[&>*]:m-4">
	<h1 class="text-center text-4xl">API Documentation</h1>
	{#each api as route}
		<div class="flex-row">
			<div class="w-[39%]" />
			<div class="flex-col items-center pb-4">
				<div class="w-fit flex-row-reverse gap-7 self-start">
					<h2 class="text-2xl">{route.title}</h2>
					<span
						class:bg-blue-400={route.method === "GET"}
						class:bg-violet-400={route.method === "POST"}
						class:bg-fuchsia-400={route.method === "PUT"}
						class:bg-rose-400={route.method === "DELETE"}
						class="w-fit rounded p-1">{route.method}</span>
				</div>
				<p>{route.link}</p>
				{#if route.method === "POST" || route.method === "PUT"}
					<pre>{route.format}</pre>
				{/if}
			</div>
		</div>
	{/each}
</main>

<style>
</style>

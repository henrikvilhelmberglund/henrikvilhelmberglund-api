<script>
	import "@unocss/reset/antfu.css";
	import Nav from "$lib/Nav.svelte";
	const routes = [{ link: "api-documentation", display: "API Documentation" }];
</script>

<Nav {routes} level={1} />

<slot />

<style uno:preflights uno:safelist global></style>

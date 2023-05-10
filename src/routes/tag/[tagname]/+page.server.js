/** @type {import('./$types').PageLoad} */
import { error } from "@sveltejs/kit";
import { getPostsCollection } from "../../../hooks.server";

export async function load({ params }) {
	const postsCollection = await getPostsCollection();

	let result;
	const latest = false;
	const limit = 0;
	const tag = params.tagname;

	if (latest) {
		result = await postsCollection
			.find(tag ? { tags: tag } : {})
			.sort({ _id: -1 })
			.limit(parseInt(limit, 10))
			.toArray();
	} else {
		result = await postsCollection
			.find(tag ? { tags: tag } : {})
			.limit(limit)
			.toArray();
	}
	console.log(result.length);
	if (result.length === 0) {
		throw error(404, "page not found");
	}

	result.forEach((item) => {
		item._id = item._id.toString();
	});

	return { posts: result };
}

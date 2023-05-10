import { getPostsCollection } from "../hooks.server";
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const postsCollection = await getPostsCollection();
	let result;
	const latest = true;
	const limit = 0;

	if (latest) {
		result = await postsCollection.find({}).sort({ _id: -1 }).limit(parseInt(limit, 10)).toArray();
	} else {
		result = await postsCollection.find({}).limit(limit).toArray();
	}

	result.forEach((item) => {
		item._id = item._id.toString();
	});
	// console.log(result)

	// return { posts: [] };
	return { posts: result };
}

import { error, json } from "@sveltejs/kit";
import { getPostsCollection } from "../../../../hooks.server";

const postsCollection = await getPostsCollection();
export async function GET({ params }) {
	const offsetNumber = +params.id - 1;
	const result = await postsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();
	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	console.log(result);

	return json({
		result: result[0],
	});
}

export async function PUT({ request, params }) {
	const body = await request.json();
	const offsetNumber = +params.id - 1;
	const post = await postsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();

	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	// const post = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	const result = await postsCollection.updateOne(post[0], { $set: body });
	console.log(result);
	return json({
		result,
	});
}

export async function DELETE({ params }) {
	// app.delete("/api/posts/:id", async (req, res) => {
	const offsetNumber = +params.id - 1;
	const foundPost = await postsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();

	const result = await postsCollection.deleteOne(foundPost[0]);
	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	console.log(result);
	return json({
		result,
	});
}

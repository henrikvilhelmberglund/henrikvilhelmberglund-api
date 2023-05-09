import { MongoClient, ObjectId } from "mongodb";
import { envVariables } from "/src/lib/envVariables";

// const client = new MongoClient("mongodb://localhost:27017");
let client;

async function run() {
	try {
		client = new MongoClient(
			`mongodb+srv://henrikvilhelmberglund:${envVariables.mongoPass}@cluster0.9bryuke.mongodb.net/?retryWrites=true&w=majority`
		);
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
		// const db = client.db("zoo");
		// const animalCollection = db.collection("animals");

		// console.log(postsCollection)
	} catch (error) {
		console.log(error);
	} finally {
		// await client.close();
	}
	return client;
}

export async function getPostsCollection() {
	const client = await run();
	const db = client.db("publicapi");
	return db.collection("posts");
}

// run().catch(console.dir);

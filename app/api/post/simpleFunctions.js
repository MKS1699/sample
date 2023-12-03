import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
// getposts

export async function GETPOSTS() {
  await connectMongoDB();
  const posts = await Post.find();
  return posts;
}

export async function POSTDATA() {
  const { name, age, address } = await request.json();
  await connectMongoDB();
  await Post.create({ name, age, address });
  return;
}

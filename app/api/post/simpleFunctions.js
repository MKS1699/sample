import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
// getposts

export async function GETPOSTS() {
  await connectMongoDB();
  const posts = await Post.find();
  return posts;
}

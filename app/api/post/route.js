import connectMongoDB from "../../../libs/mongodb";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, age, address } = await request.json();
  await connectMongoDB();
  await Post.create({ name, age, address });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

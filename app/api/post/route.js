import connectMongoDB from "../../../libs/mongodb";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

// POST

export async function POST(request) {
  const { name, age, address } = await request.json();
  await connectMongoDB();
  await Post.create({ name, age, address });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

// GET

export async function GET() {
  await connectMongoDB();
  const posts = await Post.find();
  return NextResponse.json({ posts });
}

// DELETE

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Post.findByIdAndDelete(id);
  return NextResponse.json(
    { message: `Post having id: ${id} deleted` },
    { status: 200 }
  );
}

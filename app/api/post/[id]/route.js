import connectMongoDB from "../../../../libs/mongodb";
import Post from "../../../../models/post";
import { NextResponse } from "next/server";

// UPDATE
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newAge: age,
    newAddress: address,
  } = await request.json();
  await connectMongoDB();
  await Post.findByIdAndUpdate(id, { name, age, address });
  return NextResponse.json(
    { message: `Post id: ${id} updated.` },
    { status: 200 }
  );
}

// GET post by specific id
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Post.findOne({ _id: id });
  return NextResponse.json({ post }, { status: 200 });
}

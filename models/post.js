import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    name: String,
    age: Number,
    address: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;

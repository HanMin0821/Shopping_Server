import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        itemId: String,
        itemTitle: String,
    },
    {collection: "likes"}
);
export default Schema;

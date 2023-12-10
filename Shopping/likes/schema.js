import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "projectusers"},
        itemId: String,
        itemTitle: String,
    },
);
export default Schema;

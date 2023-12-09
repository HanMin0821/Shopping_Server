import schema from "./schema.js";
import mongoose from "mongoose";
const Likemodel = mongoose.model("likes", schema);
export default Likemodel;
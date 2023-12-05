import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("items", schema);
export default model;

import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("projectusers", schema);
export default model;
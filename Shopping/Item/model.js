import mongoose from "mongoose";
import schema from "./schema.js";
const itemModel = mongoose.model("items", schema);
export default itemModel;

import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category:String,
        manufactureDate: Date,
        productionDate: Date,
        description: String,
        price: Number
    },
    { collection: "items" }
);
export default itemSchema;

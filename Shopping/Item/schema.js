import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category:String,
        productionDate: {type: String, format:Date},
        expirationDate:  {type: String, format:Date},
        description: String,
        price: String,
        seller:String,
        seller_id:String
    },
    { collection: "items" }
);
export default itemSchema;

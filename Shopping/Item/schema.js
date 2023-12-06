import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category:String,
        productionDate: {type: String, format:Date},
        expirationDate:  {type: String, format:Date},
        description: String,
            email:String,
        price: String,
    },
    { collection: "items" }
);
export default itemSchema;

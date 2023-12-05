import model from "./model.js";

export const findAllItems = () => model.find();

export const findItemById = (id)=>model.findById(id)
// export const findItemById = (id) => model.findById(id); //model.find({ _id: id });
// export const findItemByName = (name) =>
//     model.findOne({ name: name });


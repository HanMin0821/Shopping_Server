import model from "./model.js";

export const findAllItems = () => model.find();

export const findItemById = (id) => model.findById(id);

export const createItem = (item) => model.create(item);
// export const findItemById = (id) => model.findById(id); //model.find({ _id: id });
// export const findItemByName = (name) =>
//     model.findOne({ name: name });

export const deleteItem = (id) => model.deleteOne({_id: id});

export const updateItem = (id, item) =>
    model.updateOne({_id: id}, {$set: item});
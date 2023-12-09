import itemModel from "./model.js";

export const findAllItems = () => itemModel.find().sort({_id: -1});

export const findItemById = (id) => itemModel.findById(id);

export const createItem = (item) => itemModel.create(item);
// export const findItemById = (id) => model.findById(id); //model.find({ _id: id });
// export const findItemByName = (name) =>
//     model.findOne({ name: name });

export const deleteItem = (id) => itemModel.deleteOne({_id: id});

export const updateItem = (id, item) =>
itemModel.updateOne({_id: id}, {$set: item});
import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesItem = (userId, itemId) =>
    model.create({ user: userId, itemId: itemId });
export const deleteUserLikesItem = (userId, itemId) =>
    model.deleteOne({ user: userId, itemId: itemId });
export const findUsersThatLikeItem = (itemId) =>
    model.find({ itemId: itemId }).populate("user");
export const findItemsThatUserLikes = (userId) => model.find({ user: userId });
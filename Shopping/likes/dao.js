import Likemodel from "./model.js";
import itemModel from "../Item/model.js";

export const findAllLikes = () => Likemodel.find();
export const createUserLikesItem = (userId, itemId) =>
    Likemodel.create({ user: userId, itemId: itemId });
export const deleteUserLikesItem = (userId, itemId) =>
    Likemodel.deleteOne({ user: userId, itemId: itemId });
export const findUsersThatLikeItem = (itemId) =>
    Likemodel.find({ itemId: itemId }).populate("user");
export const findItemsThatUserLikes = (userId) => Likemodel.find({ user: userId });
export const findLikedItemsByUser = async (userId) => {
    const likes = await Likemodel.find({ user: userId });
    const itemIds = likes.map(like => like.itemId);
    const items = await Promise.all(itemIds.map(itemId => itemModel.findOne({ _id: itemId })));
    return items;
};
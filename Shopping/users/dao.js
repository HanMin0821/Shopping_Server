import model from "./model.js";
import Likemodel from "../likes/model.js";
import itemModel from "../Item/model.js";
import mongoose from 'mongoose';

export const createUser = (user) => model.create(user);export const findUserById = (userId) => model.findById(userId);
export const findAllUsers = () => model.find();

export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const findLikedItemsByUser = async (userId) => {
  try {
      const likes = await Likemodel.find({ user: userId }).select('itemId -_id');
      const itemIds = likes.map(like => like.itemId);
      return itemIds;
  } catch (error) {
      console.error('Error in findLikedItemsByUser:', error);
      throw error;
  }
};

// In dao.js or your equivalent file
export const findItemsBySeller = async (sellerId) => {
  try {
      return await itemModel.find({ seller_id: sellerId }); // Adjust the field name as per your schema
  } catch (error) {
      console.error('Error in findItemsBySeller:', error);
      throw error;
  }
};

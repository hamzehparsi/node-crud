import { log } from "console";
import User from "../models/userModel.js";
import path from "path";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "user has exist" });
    }
    const saveUser = await userData.save();
    res.status(200).json(saveUser);
  } catch (error) {
    console.log(error);
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log("error fetch");
  }
};

export const findUser = async (req, res) => {
  try {
    // const id = req.params.id;
    const name = req.params.name;
    const userExist = await User.findOne({ name: name });
    if (!userExist) {
      res.status(404).json({ msg: "user is not found!" });
    }
    return res.json(userExist);
  } catch (error) {}
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ msg: "user is not found!" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = User.findOne({ _id: id });
      if (!userExist) {
        res.status(404).json({ msg: "user is not found!" });
      }
      await User.findByIdAndDelete(id)
      res.status(201).json({msg: 'user has deleted'});
    } catch (error) {
      console.log(error);
    }
  };
  
  
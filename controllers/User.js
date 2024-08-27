import UserModel from "../models/User.model.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";
const registerUser = asyncHandler(async (req, res) => {
  var { fullName, email, password } = req.body;
  const userExists = await UserModel.findOne({ email: email });
  if (!userExists) {
    fullName = fullName.trim();
    email = email.trim();
    password = password.trim();
    const user = new UserModel({ fullName, email, password });
    await user.save();
    const token = generateToken(user._id);
    const userObject = user.toObject();
    delete userObject.password;
    delete user.password;
    res.status(201).json({ user: userObject, token });
  } else {
    res.status(403);
    throw new Error(`User already exists`);
  }
});
const loginUser = asyncHandler(async (req, res) => {
  var { email, password } = req.body;
  email = email.trim();
  password = password.trim();
  console.log("req.body=", req.body);
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(403);
    throw new Error(`User not found`);
  }
  const isPassCorrect = await user.checkPass(password);
  if (isPassCorrect) {
    const userObject = user.toObject();
    delete userObject.password;
    const token = generateToken(user._id);
    res.status(200).json({ token, user: userObject });
  } else {
    // res.status(403).json({ msg: "Invalid password" });
    res.status(403);
    throw new Error(`Invalid password`);
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const id = req.user.id;
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error(`User not found`);
  }
  const userObject = user.toObject();
  res.status(200).json({ user: userObject });
});
export { registerUser, loginUser, getUserProfile };

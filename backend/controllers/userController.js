import UserModel from "../models/UserSchema.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
 export const signup = async(req , res)=>{
    try{
        const {name, email  , password} = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser){
            return res.status(400).json({ error: "Email already in use" });
        }
        const hashedPassword = await bcrypt.hash(password , 10);
         const user = new UserModel({ name, email, password: hashedPassword });
         await user.save();
          const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

          res.status(201).json({ user, token });


    } catch (error) {
        res.status(500).json({ error: "Internal server error" , error });
    }
}
export const signin = async(req , res)=>{
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};
export const getUserById = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


export const updateUserById = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


export const addHistory = async (req, res, next) => {
  try {
    const { place, ratingGiven, review } = req.body;
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.history.push({ place, ratingGiven, review });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};


export const getHistory = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id).populate("history.place");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user.history);
  } catch (error) {
    next(error);
  }
};
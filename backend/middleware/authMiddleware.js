import jwt from "jsonwebtoken";
import UserModel from "../models/UserSchema.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;

    const user = await UserModel.findById(req.userId);
    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized or invalid token" });
  }
};

export const ownerOnly = (req, res, next) => {
  if (req.userId !== req.params.id) {
    return res.status(403).json({ error: "Forbidden: You can only access your own data" });
  }
  next();
};

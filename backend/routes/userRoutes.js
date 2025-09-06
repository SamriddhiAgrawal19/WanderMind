import express from "express";
import {
  signup,
  signin,
  getUserById,
  updateUserById,
  addHistory,
  getHistory,
} from "../controllers/userController.js";

import { authMiddleware, ownerOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);


router.get("/:id", authMiddleware, ownerOnly, getUserById);
router.put("/:id", authMiddleware, ownerOnly, updateUserById);
router.post("/:id/history", authMiddleware, ownerOnly, addHistory);
router.get("/:id/history", authMiddleware, ownerOnly, getHistory);

export default router;

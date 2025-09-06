import express from "express";
import { createPlace, getAllPlaces } from "../controllers/placeController.js";

const router = express.Router();

// Routes
router.post("/", createPlace);
router.get("/", getAllPlaces);

export default router;

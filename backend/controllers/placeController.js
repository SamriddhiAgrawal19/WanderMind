import placeModel from "../models/placeSchema.js";

export const createPlace = async (req, res, next) => {
  try {
    const place = new placeModel(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    next(error);
  }
};
export const getAllPlaces = async (req, res, next) => {
  try {
    const places = await placeModel.find({});
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
};

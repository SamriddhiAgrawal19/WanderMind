import mongoose from "mongoose";
const placeSchema = mongoose.Schema({
    name: String,
    address: String,
    city : String ,
    rating : Number,
    userRatingsTotal : Number,
    location : {
        lat : Number,
        lng : Number,

    },
    googplePlaceId: String,
    types :[String],
    openingHours : {
        open : [String],
        close : [String]
    },
    priceLevel : Number,
    photos : [String],
}, {timestamps : true});

const placeModel= mongoose.model("Place", placeSchema);
export default placeModel;
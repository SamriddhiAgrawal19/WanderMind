import mongoose from 'mongoose';
 const UserSchema = mongoose.Schema({
     name : {
         type : String,
         required : true
     },
     email : {
         type : String,
         required : true,
         unique : true
     },
     password : {
         type : String,
         required : true
     },
     profilePicture : {
         type : String,
         default : ""
     },
      preferences: [String],


  history: [
    {
      place: { type: mongoose.Schema.Types.ObjectId, ref: "placeModel" }, 
      visitedAt: { type: Date, default: Date.now },
      ratingGiven: Number, 
      review: String,
    }
  ],

}, 

     
     
  {timestamps : true});

 const UserModel = mongoose.model("User", UserSchema);
 export default UserModel;

import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://karthik:karthik123@cluster0.3jumqsc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
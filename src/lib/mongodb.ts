import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL!)
    console.log("connected");
    
  } catch (e) {
    console.log(e)
  }
}

export default connectMongoDB;
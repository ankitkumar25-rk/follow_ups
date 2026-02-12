import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("MONGO URI:", process.env.MONGODB_URI ? "loaded" : "missing");

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MONGODB connected Successfully: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Errrr!!", ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDatabase = async () => {
  try {
    if (!ENV.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    await mongoose.connect(ENV.MONGO_URL);
    console.log("Database connected successfuly");
  } catch (error) {
    console.error("Error connecting database", error.message);
    process.exit(1);
  }
};

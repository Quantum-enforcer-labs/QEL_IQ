import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URL);
    console.log("Database connected successfuly");
  } catch (error) {
    console.error("Error connecting database", error.message);
    process.exit(1);
  }
};

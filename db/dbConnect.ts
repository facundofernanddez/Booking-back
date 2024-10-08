import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    const mongodbUri = process.env.MONGODB_URI ?? "";
    await mongoose.connect(mongodbUri);

    console.log("DB connected successfully");
  } catch (error) {
    console.log("Db connection error:", error);
  }
}

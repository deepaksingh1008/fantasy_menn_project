import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB", conn.connection.host);
  } catch (err) {
    console.log("error in connecting database", err);
  }
};

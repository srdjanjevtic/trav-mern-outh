import mongoose from "mongoose";

// DB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xpltb.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
    );
    console.log(`MongoDB connected to cluster: ${conn.connection.host}`);
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;

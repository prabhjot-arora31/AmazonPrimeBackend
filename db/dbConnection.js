import mongoose from "mongoose";
const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};
export { connectDb };

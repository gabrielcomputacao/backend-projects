import mongoose, { mongo } from "mongoose";

async function connectDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@alura-api.bbutirw.mongodb.net/library?appName=alura-api"
  );

  return mongoose.connection;
}

export default connectDatabase;

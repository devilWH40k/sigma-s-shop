import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function connectToDatabase() {
  const db = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "store",
  });

  return db;
}

export default connectToDatabase;

//process.env.MONGODB_URI

import mongoose from "mongoose";

// async function connectDB() {
//   try {
//     // await mongoose.connect(
//     //   "mongodb+srv://fatemeghafari77:NoERisX99wBrN4Bl@cluster0.xhmztka.mongodb.net/?retryWrites=true&w=majority"
//     // );

//     await mongoose.connect(
//         `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xhmztka.mongodb.net/?retryWrites=true&w=majority`
//       );
//     // await mongoose.connect(process.env.MONGO_URI);
//     console.log("connect to DB");
//   } catch (error) {
//     console.log("error mongo--->", error);
//     // throw new Error("Connection failed!");
//   }
// }

// export default connectDB;






let isConnected:any; // Keep track of connection status

async function connectDB() {
  if (isConnected) {
    console.log("Already connected to DB");
    return; // Exit if already connected
  }

  try {
    await mongoose.connect(
      "mongodb+srv://fatemeghafari77:NoERisX99wBrN4Bl@cluster0.xhmztka.mongodb.net/filmfolioTest",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true; // Set the connection status
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error MongoDB--->", error);
    // throw new Error("Connection failed!");
  }
}

export default connectDB;


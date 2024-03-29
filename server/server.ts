import { app } from "./app";
import { v2 as cloudnary } from "cloudinary";
import connectDB from "./utils/db";
require("dotenv").config();

//cloudinary config
cloudnary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

//create server
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
  connectDB();
});

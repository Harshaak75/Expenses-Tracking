import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import UserRouter from "./src/Users/Router.js"

// import { AddUser, getAuthToken } from "./Functionality/Function.js";

import { v4 as uuidv4 } from "uuid";

const app = express();

const corsOption = {
  origin: "http://localhost:5173", // Specify the origin URL where the API will be accessed
  //optionsSuccessStatus: 200,  // Return status 200 for successful requests
  credentials: true, // Enable sending credentials with requests (e.g., cookies)
};

app.use(cors(corsOption)); // Enable CORS for all requests

app.use(express.json());

app.use(cookieParser());


app.use("/api/user/",UserRouter); // router for users



app.listen(8080, () => {
  console.log("Server is running on port 8080"); // Server is listening on port 8080
});

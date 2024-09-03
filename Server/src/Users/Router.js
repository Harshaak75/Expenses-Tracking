// Handles all the routes

import express from "express";
import { controller } from "./Controller.js";
import { functionality } from "./Functions.js";

const router = express.Router();

router.post("/createAccount", controller.createUser); // create a new account

router.post("/loginUser", controller.loginUser); // login a user

router.get("/checkAuth",restrictToLoginUseronly, (req, res) => { // check the current user and redirect to the login page
    res.json({ message: "Authenticated", status: 200 });
})

async function restrictToLoginUseronly(req, res, next) {
  const auth = req.cookies.uid;

  if (!auth) {
    return res.json({ status: 501, message: "Unauthorized user" });
    // next();
  } else {
    const response = await functionality.GetToken(auth);

    console.log(response);

    if (response.rows.length > 0) {
    //   res.json({ status: 200, message: "user is authenticated" });
        next();
    } else {
        return res.json({ status: 501, message: "user is not authenticated" });
    }
  }
}

export default router;

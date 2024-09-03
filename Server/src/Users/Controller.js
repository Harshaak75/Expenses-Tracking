// // Related to user request and fulfill it
import db from "../../ds.js";
import { Quries } from "./Quries.js";

import { v4 as uuidv4 } from "uuid";

import { functionality } from "./Functions.js";

import bcrypt from "bcrypt";

const getData = async (req, res) => {
  try {
    const user = await db.query(Quries.userinfo);
    res.json(user.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userId = uuidv4(); // creating the user id

    const hashedPassword = await bcrypt.hash(password, 10); // password hash algorithm

    const response = await db.query(Quries.createUserInfo, [
      userId,
      email,
      hashedPassword,
    ]); // create the user info object

    const token = functionality.AddCookies(userId, email); // add cookies to the user info object

    res.cookie("uid", token, {
      httponly: true,
      secure: false,
      sameSite: "lax",
    }); //  add cookies to the user info object

    res
      .status(200)
      .json({ message: "User created successfully: ", userId, status: 200 });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    // console.log("Authent");

    const { email, password } = req.body;
    const response = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    // console.log(response)

    if (response.rows.length > 0) {
      const user = response.rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = functionality.AddCookies(response.rows[0].id, email); // add cookies to the user info object

        res.cookie("uid", token, {
          httponly: true,
          secure: false,
          sameSite: "lax",
        }); //  add cookies to the user info object

        res.json({ message: "user is logged in successfully: ", status: 200 });
      } else {
        res.json({ message: "Invalid credentials: ", status: 401 });
      }
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const controller = {
  getData,
  createUser,
  loginUser,
};

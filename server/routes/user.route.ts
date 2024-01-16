import express from "express";
import {
  activateUser,
  loginUser,
  logoutUser,
  resgistrationUser,
} from "../controllers/user.controllers";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);

export default userRouter;

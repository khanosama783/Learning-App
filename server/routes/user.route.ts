import express from "express";
import {
  activateUser,
  resgistrationUser,
} from "../controllers/user.controllers";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
userRouter.post("/activate-user", activateUser);
export default userRouter;

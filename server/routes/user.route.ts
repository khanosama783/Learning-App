import express from "express";
import { resgistrationUser } from "../controllers/user.controllers";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
export default userRouter;

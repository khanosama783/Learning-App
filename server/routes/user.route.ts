import express from "express";
import {
  activateUser,
  loginUser,
  logoutUser,
  resgistrationUser,
} from "../controllers/user.controllers";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, authorizeRoles("admin"), logoutUser);

export default userRouter;

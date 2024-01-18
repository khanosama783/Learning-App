import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  resgistrationUser,
  socialAuth,
  updateAccessToken,
} from "../controllers/user.controllers";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, authorizeRoles("admin"), logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);

export default userRouter;

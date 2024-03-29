import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  resgistrationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateUserInfo,
  updateProfilePicture,
  getAllUsers,
  updateUserRole,
  deleteUser,
  deleteCourse,
} from "../controllers/user.controllers";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { updateUserRoleService } from "../services/user.service";
const userRouter = express.Router();

userRouter.post("/registration", resgistrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, authorizeRoles("admin"), logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.post("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-users",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);
userRouter.delete(
  "/delete-user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

userRouter.delete(
  "/delete-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);

export default userRouter;

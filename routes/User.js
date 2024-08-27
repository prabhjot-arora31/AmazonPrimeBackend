import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/User.js";
import { protectRoute } from "../middleware/ProtectRoute.js";
const router = express.Router();
router.route("/user").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/user/profile").get(protectRoute, getUserProfile);
export default router;

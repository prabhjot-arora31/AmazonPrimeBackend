import express from "express";
import { getMovies } from "../controllers/Movies.js";
const router = express.Router();
router.get("/get", getMovies);
export default router;

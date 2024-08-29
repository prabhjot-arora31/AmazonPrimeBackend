import asynHandler from "express-async-handler";
import fs from "fs";
import data2 from '../data/adventure_movies.json' assert {type : "json" }
import data from "../data/animation_movies.json" assert { type: "json" };
export const getMovies = asynHandler(async (req, res) => {
  res.json([data,data2]);
});

import asynHandler from "express-async-handler";
import fs from "fs";
import data from "../data/romance_movies.json" assert { type: "json" };
export const getMovies = asynHandler(async (req, res) => {
  res.json(data);
});

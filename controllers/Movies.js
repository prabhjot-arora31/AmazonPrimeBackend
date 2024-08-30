import asynHandler from "express-async-handler";
// import data2 from "../data/adventure_movies.json" assert { type: "json" };
// import data from "../data/animation_movies.json" assert { type: "json" };
// import data3 from "../data/crime_movies.json" assert { type: "json" };
// import data4 from "../data/horror_movies.json" assert { type: "json" };
// import data5 from "../data/romance_movies.json" assert { type: "json" };
export const getMovies = asynHandler(async (req, res) => {
  res.json([]);
});

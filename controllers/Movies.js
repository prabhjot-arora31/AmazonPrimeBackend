import asynHandler from "express-async-handler";
import fs from "fs";
import data from "../data/horror_movies.json" assert { type: "json" };
export const getMovies = asynHandler(async (req, res) => {
  fetch(
    "https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/genres/Family/1",
    {
      headers: {
        "x-rapidapi-key": "6b27eda253msh9e2953c59dbe5dap1516c6jsn3848acb69309",
        "x-rapidapi-host": "advance-movie-api.p.rapidapi.com",
        "X-RapidAPI-Proxy-Secret": "4d633e10-2ff4-11ef-a338-672c018612df",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data is: ", data);
      fs.writeFile(
        "../backend/data/family_movies.json",
        JSON.stringify(data, null, 2),
        (err) => {
          if (err) console.log("error occurred in saving movies:", err.message);
          else console.log("saved movies");
        }
      );
    })
    .catch((error) => console.log("An error occurred:", error.message));
  res.json(data);
});

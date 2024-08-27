import jwt from "jsonwebtoken";
const protectRoute = (req, res, next) => {
  const header = req.headers.authorization;
  //   console.log(token);
  if (header.split(" ")[0].startsWith("Bearer")) {
    console.log("bearer token is: " + header.split(" ")[1]);
    const token = header.split(" ")[1];
    const userId = jwt.verify(token, process.env.JWT_SECRET);
    if (userId) {
      req.user = userId;
      next();
    } else {
      throw new Error("Invalid token");
    }
  } else {
    throw new Error("Bearer token is required");
  }
};
export { protectRoute };

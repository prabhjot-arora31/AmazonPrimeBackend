const errorHandler = (err, req, res, next) => {
  if (!res.statusCode || res.statusCode === 200) {
    res.status(500); // Internal server error if status code is not set
  }
  console.log("ERROR STACK:", err.stack);
  res.json({
    error: err.message || "Something went wrong",
    status: res.statusCode,
  });
};
export { errorHandler };

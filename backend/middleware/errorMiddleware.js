/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 22:13:43
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-06 22:22:49
 */

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //check for Mongoose bad ObjecId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not Found";
    statusCode = 404;
  }

  res.status(404).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export { notFound, errorHandler };

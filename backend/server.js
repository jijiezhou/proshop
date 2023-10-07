/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-04 23:17:50
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-06 22:23:04
 */
/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-04 23:17:50
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-05 01:01:10
 */
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
//const express = require('express')

const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));

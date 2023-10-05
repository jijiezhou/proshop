/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-04 23:17:50
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-04 23:49:41
 */
import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
//const express = require('express')

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on ${port}`));

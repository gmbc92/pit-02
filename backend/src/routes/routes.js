const express = require("express");

const TodoRouter = require("./todo.router");
const UserRouter = require("./user.router");
const CarRouter = require("./car.router");
const ProductRouter = require("./product.router");

const Router = express.Router();

Router.use(TodoRouter);
Router.use(UserRouter);
Router.use(CarRouter);
Router.use(ProductRouter);

module.exports = Router;

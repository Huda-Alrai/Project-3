const express = require("express");
const { register, login, getUsers } = require("./controller");
const middleware = require("./middlewares");

const authRouter = express.Router();

authRouter.get("/", async (req, res) => {
  res.json(getUsers());
});

authRouter.get("/protected", middleware, (req, res) => {
  res.json("Hello World");
});

authRouter.post("/register", async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

module.exports = authRouter;

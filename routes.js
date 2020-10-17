const express = require("express");
const { register, login, getUsers, deleteUser, updateUser } = require("./controller");
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

authRouter.delete("/delete",async (req, res) =>{
  try{
    res.json(await deleteUser(req.query.userName));
  } catch (err){
    throw err;
  }
});

authRouter.put("/update",async (req, res) =>{
  try{
    res.json(await updateUser(req));
  } catch (err){
    throw err;
  }
});

module.exports = authRouter;

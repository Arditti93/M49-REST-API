const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass} = require("../middleware");
const { registerUser, login, getAllUsers } = require("./controllers");

userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/login", comparePass, login);
userRouter.get("/users/getUsers", getAllUsers)

module.exports = userRouter;
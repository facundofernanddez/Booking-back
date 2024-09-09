import userController from "./controller";
import express from "express";

const userRouter = express.Router();

const { createUser } = userController;

userRouter.post("/register", createUser);

export default userRouter;

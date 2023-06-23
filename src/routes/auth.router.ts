import express from "express";

import { authController } from "../controllers";

const userRouter = express.Router();

userRouter.post("/login", authController.signIn);
userRouter.post("/register", authController.signUp);
userRouter.get("/getme", authController.getMe);

export default userRouter;

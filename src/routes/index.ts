import express from 'express';

import userRouter from './auth.router';

const appRoutes = express.Router();

appRoutes.use("/user", userRouter);

export default appRoutes;
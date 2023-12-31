import * as bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express, { Express } from 'express';

import appRoutes from '../routes';

import { MESSAGES } from '../constants';

const port = process.env.PORT || 3001;

export const backendSetup = (app: Express) => {
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());

  app.use(`/api/`, appRoutes);

  app.listen(port, () => {
    console.info(MESSAGES.SERVER_RUN_SUCCESS);
  })
}
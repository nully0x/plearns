import express from "express";
import { config } from "./config/config";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ALLOWED_ORIGINS } from './utils/constants';
import { authRoutes } from "./api/v1/auth";
import APIToolkit from 'apitoolkit-express';

dotenv.config();

async function startServer() {
  const app = express();
  const port = config.port;

  const apitoolkitClient = await APIToolkit.NewClient({ apiKey: config.api_toolkit_key });

  app.use(
    cors({
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
      ],
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      origin: ALLOWED_ORIGINS,
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(apitoolkitClient.expressMiddleware);

  app.get("/", (req, res) =>
    res.send("Welcome to PLEarn API!")
  );

  authRoutes(app);

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

startServer();

import express, {
  Application,
  Response,
  Request,
  NextFunction,
  Express,
} from "express";
import { config } from "./config/config";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ALLOWED_ORIGINS } from './utils/constants';
import { authRoutes } from "./api/v1/auth";

dotenv.config();

const app: Express = express();
const port = config.port;

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

console.log("I ran")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) =>
  res.send("welcome to PLEarn API!")
);

authRoutes(app);

app.listen(port, () => console.log(`listening on port ${port}!`));

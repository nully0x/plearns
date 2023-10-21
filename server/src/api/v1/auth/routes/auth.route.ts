import type { Express, Router } from "express";
import express from "express";
import * as signup from "../controllers/signup";
import * as login from "../controllers/login";
import * as activateAccount from "../controllers/activateAccount";



const router: Router = express.Router();

export function authRoutes(app: Express) {
  router.post("/auth/signup", signup.signup);
  router.post ("/auth/login", login.login);
  router.put("/auth/activate/:token", activateAccount.activateAccount);

  app.use("/api/", router);
}

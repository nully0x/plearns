import { Request, Response } from "express";
import { config } from "../../../config/config";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { NextFunction } from "connect";
import { EXPIRES_IN } from "../../../utils/constants";

export async function generatePassword(password: string): Promise<string> {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}

export async function comparePasswords(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export async function generateJWT(user: any): Promise<string> {
    if (!config.secret) {
      throw new Error("JWT secret is not configured.");
    }
    return jwt.sign(user, config.secret, { expiresIn: EXPIRES_IN });
  }
  

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).send({ message: "No authorization headers." });
  }

  const tokenBearer = req.headers.authorization.split(" ");
  if (tokenBearer.length != 2) {
    return res.status(401).send({ message: "Malformed token." });
  }

  if (!config.secret) {
    throw new Error("JWT secret is not configured.");
  }

  const token = tokenBearer[1];
  return jwt.verify(token, config.secret, (err: any, decoded: any) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate." });
    }
    return next();
  });
}

// export function isAgent(req: Request, res: Response, next: NextFunction) {
//   if (req.user.role !== 'agent') {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   return next();
// }

// export function isAmin(req: Request, res: Response, next: NextFunction) {
//   if (req.user.role !== 'admin') {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   return next();
// }
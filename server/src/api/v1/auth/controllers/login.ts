import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as EmailValidator from "email-validator";
import { generateJWT, comparePasswords } from "../../middleware/auth";

const prisma = new PrismaClient();

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !EmailValidator.validate(email)) {
      return res
        .status(400)
        .send({ auth: false, message: "Email is required or malformed" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ auth: false, message: "Password is required" });
    }
    await prisma.$connect();
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).send({ auth: false, message: "Unauthorized" });
    }
    const authValid = await comparePasswords(password, user.password);
    if (!authValid) {
      return res.status(401).send({ auth: false, message: "Unauthorized" });
    }
    const jwt = await generateJWT(user);
    await prisma.$disconnect();
    res.status(200).send({ auth: true, token: jwt, user: user });
  } catch (error) {
    throw error;
  }
}

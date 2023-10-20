import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as EmailValidator from "email-validator";
import { generateJWT, generatePassword } from "../../middleware/auth";
import { IUser } from "../../../../utils/types";

const prisma = new PrismaClient();

export async function signup(req: Request, res: Response) {
  try {
    const { email, password, fullName, phoneNumber } = req.body;
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
    if (!fullName) {
      return res
        .status(400)
        .send({ auth: false, message: "First name or last name is required" });
    }
    if (!phoneNumber) {
      return res
        .status(400)
        .send({ auth: false, message: "Phone number is required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
        phoneNumber: phoneNumber,
      },
    });
    if (existingUser) {
      return res
        .status(422)
        .send({ auth: false, message: "User already exist" });
    }
    const hashedPassword = await generatePassword(password);

    const user: IUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        fullName: fullName,
        phoneNumber: phoneNumber,
      },
    });
    const jwt = await generateJWT(user);
    await prisma.$disconnect();
    res.status(201).send({ auth: true, token: jwt, user: user });
  } catch (error) {
    throw error;
  }
}

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function activateAccount(req: Request, res: Response) {
    try {
        const { token }= req.params;
        await prisma.$connect();
        const userToken = await prisma.user.findFirst({
          where: {
            secretToken: token,
          },
        });
        if (userToken === null) {
          res
            .status(400)
            .json({ message: "Invalid token or account activated please try logging in" });
        } else {
          await prisma.user.update({
            where: {
              id: userToken.id,
            },
            data: {
              isActive: true,
              secretToken: null,
            },
          });
          await prisma.$disconnect();
         return res.status(200).json({ message: "Account activated" });
        }
      } catch (error) {
        throw error;
      }
}
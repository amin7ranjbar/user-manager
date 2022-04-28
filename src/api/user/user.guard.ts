import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  exp: number;
  iat: number;
}

export const checkToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const payload = jwt.verify(
      req.header("token")!,
      process.env.JWT_SECRET
    ) as UserPayload;

    if (payload.id != userId) {
      const error = new Error("invalid token");
      error.name = "AuthorizationError";
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

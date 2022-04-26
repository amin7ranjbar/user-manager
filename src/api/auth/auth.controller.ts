import { NextFunction, Request, Response } from "express";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ user: 1 });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ user: 2 });
  } catch (error) {
    next(error);
  }
};

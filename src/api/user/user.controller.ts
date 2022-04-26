import { NextFunction, Request, Response } from "express";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ user: 3 });
  } catch (error) {
    next(error);
  }
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ user: 4 });
  } catch (error) {
    next(error);
  }
};

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ user: 5 });
  } catch (error) {
    next(error);
  }
};

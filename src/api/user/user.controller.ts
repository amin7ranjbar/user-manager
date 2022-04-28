import { NextFunction, Request, Response } from "express";
import userModel from "./user.model";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findOne({
      attributes: ["name", "age", "mobile"],
      where: {
        id: userId,
      },
    });

    return res.json(user);
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
    const { name, age, mobile } = req.body;
    const { userId } = req.params;
    const user = await userModel.update(
      {
        name,
        age,
        mobile,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    if (user[0] == 1) {
      return res.status(200).json({ message: "Done" });
    } else {
      return res.status(400).json({ message: "Failed" });
    }
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      const db_error = new Error("mobile must be unique");
      db_error.name = "ValidationError";
      next(db_error);
    } else {
      next(error);
    }
  }
};

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user: any = await userModel.destroy({
      where: {
        id: userId,
      },
    });

    if (user == 1) {
      return res.status(200).json({ message: "Done" });
    } else {
      return res.status(400).json({ message: "Failed" });
    }
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import userModel from "../user/user.model";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, age, mobile, password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const user = await userModel.create(
      {
        name,
        age,
        mobile,
        password: hash,
      },
      {
        returning: true,
      }
    );
    return res.json({ id: user.id, mobile: user.mobile });
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

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mobile, password } = req.body;
    const user = await userModel.findOne({
      attributes: ["id", "password"],
      where: {
        mobile,
      },
    });

    console.log(user, password, user.password);

    if (user && bcrypt.compareSync(password, user.password)) {
      const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h", // expires in 24 hours
      });

      return res.json({ accessToken });
    } else {
      const error = new Error("invalid mobile or password");
      error.name = "ValidationError";
      throw error;
    }
  } catch (error) {
    console.log(error);

    next(error);
  }
};

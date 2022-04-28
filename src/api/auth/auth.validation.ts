import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const registerUserJoi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required().max(80),
        mobile: Joi.string().required(),
        password: Joi.string()
          .min(8)
          .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/)
          .required()
          .messages({
            "string.pattern.base":
              "password should contains at least a number,an Uppercase alphabet and Lowercase alphabet",
          }),
        rePassword: Joi.string().valid(Joi.ref("password")).required(),
      }),
      params: Joi.object({}),
      query: Joi.object({}),
    });
    const { body, query, params } = req;
    const error = schema.validate({ body, query, params }).error;
    if (error) {
      next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const loginUserJoi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({
        mobile: Joi.string().required(),
        password: Joi.string()
          .min(8)
          .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/)
          .required()
          .messages({
            "string.pattern.base":
              "password should contains at least a number,an Uppercase alphabet and Lowercase alphabet",
          }),
      }),
      params: Joi.object({}),
      query: Joi.object({}),
    });
    const { body, query, params } = req;
    const error = schema.validate({ body, query, params }).error;
    if (error) {
      next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const editUserJoi = async (
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
      }),
      params: Joi.object({
        userId: Joi.number().required(),
      }),
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

export const getUserJoi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({}),
      params: Joi.object({
        userId: Joi.number().required(),
      }),
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

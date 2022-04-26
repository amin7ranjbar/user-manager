import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({
        name: Joi.string().required(),
        role: Joi.string().required().valid("superAdmin", "admin", "user"),
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

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({
        name: Joi.string().required(),
        role: Joi.string().required().valid("superAdmin", "admin", "user"),
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

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      body: Joi.object({
        name: Joi.string().required(),
        role: Joi.string().required().valid("superAdmin", "admin", "user"),
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

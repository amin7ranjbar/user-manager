import { Application, Request, Response } from "express";
import logger from "./logger";

export function loadErrorHandlers(app: Application) {
  app.use((err: any, req: Request, res: Response, next: any) => {
    if (err.name === "ValidationError") {
      err.status = 400;
    }
    logger.error(err);

    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: !(process.env.APP_ENV == "production") ? err : {},
      },
    });
  });
}

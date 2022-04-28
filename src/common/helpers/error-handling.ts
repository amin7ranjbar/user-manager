import { Application, Request, Response } from "express";
import logger from "./logger";

export function loadErrorHandlers(app: Application) {
  app.use((err: any, req: Request, res: Response, next: any) => {
    logger.error(err);
    const status =
      err.name === "ValidationError"
        ? 400
        : err.name === "AuthorizationError"
        ? 401
        : err.status || 500;
    const message = status == 500 ? "unexpected error" : err.message;
    res.status(status).json({ message });
  });
}

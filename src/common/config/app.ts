import express from "express";
import { Application } from "express";
import { MainRouter } from "../../api/index";
import { loadErrorHandlers } from "../helpers/error-handling";
import helmet from "helmet";
import compression from "compression";
// import "./database"; // initialize database

const app: Application = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(MainRouter);

loadErrorHandlers(app);

export default app;

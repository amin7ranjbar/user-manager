import { createLogger, format, transports } from "winston";
import * as fs from "fs";
import DailyRotateFile from "winston-daily-rotate-file";

if (!fs.existsSync(process.env.LOG_DIRECTORY)) {
  fs.mkdirSync(process.env.LOG_DIRECTORY);
}

const logLevel = process.env.APP_ENV === "dev" ? "debug" : "warn";

const options = {
  file: {
    level: logLevel,
    filename: process.env.LOG_DIRECTORY + "/%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: "20m",
    colorize: true,
    maxFiles: "14d",
  },
};

export default createLogger({
  transports: [
    new transports.Console({
      stderrLevels: ["info", "error"],
      format: format.combine(
        format.errors({ stack: true }),
        format.prettyPrint()
      ),
    }),
  ],
  exceptionHandlers: [new DailyRotateFile(options.file)],
  exitOnError: false,
});

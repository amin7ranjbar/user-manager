import { Sequelize } from "sequelize";
import logger from "./logger";

const dbName = `${process.env.DATABASE_NAME}_${process.env.APP_ENV}` as string;
const dbUser = process.env.DATABASE_USER as string;
const dbHost = process.env.DATABASE_HOST;
const dbPassword = process.env.DATABASE_PASS;
const dbDriver = "postgres";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
});

logger.info("database connected");

export default sequelizeConnection;

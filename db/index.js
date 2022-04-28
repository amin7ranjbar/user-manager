require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: `${process.env.DATABASE_NAME}_${process.env.APP_ENV}`,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: `${process.env.DATABASE_NAME}_${process.env.APP_ENV}`,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: `${process.env.DB_NAME}_${process.env.APP_ENV}`,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  }
};



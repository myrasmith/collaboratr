const pgp = require("pg-promise")();
const config = (process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
    });
const db = pgp(config);

module.exports = db;

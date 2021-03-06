require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PWD || "password",
    "database": process.env.MYSQL_DATABASE || "associations",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql",
  },
  "test": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PWD || "password",
    "database": process.env.MYSQL_DATABASE || "associations",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PWD || "password",
    "database": process.env.MYSQL_DATABASE || "associations",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql",
  }
}

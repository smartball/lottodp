"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const config = exports.config = {
  stage: process.env.STAGE,
  host: process.env.host,
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
};
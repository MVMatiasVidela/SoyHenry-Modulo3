"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: _1.DB_HOST,
    port: _1.DB_PORT,
    username: _1.DB_USERNAME,
    password: _1.DB_PASSWORD,
    database: _1.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
});

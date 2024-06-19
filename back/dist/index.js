"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var config_1 = require("./config");
var server_1 = require("./server");
config_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    (0, server_1.serverInitializer)();
})
    .catch(function (err) {
    console.log(err);
});

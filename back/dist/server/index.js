"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInitializer = void 0;
var config_1 = require("../config");
var server_1 = __importDefault(require("./server"));
function serverInitializer() {
    server_1.default.listen(config_1.PORT, config_1.HOST, function () {
        console.log("Server listening on ".concat(config_1.PROTO, "://").concat(config_1.HOST, ":").concat(config_1.PORT));
    });
}
exports.serverInitializer = serverInitializer;

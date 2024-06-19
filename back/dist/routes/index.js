"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./user"));
var appointment_1 = __importDefault(require("./appointment"));
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).send("Todo OK");
});
router.use("/users", user_1.default);
router.use("/appointments", appointment_1.default);
exports.default = router;

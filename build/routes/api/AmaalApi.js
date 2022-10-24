"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var amaal = express_1.default.Router();
amaal.get("/images/:filename/:width", function (req, res) {
    res.send(req.params);
});
exports.default = amaal;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeApi = express_1.default.Router();
resizeApi.get("/:filename/:width/:height", function (req, res) {
    res.send(req.params);
});
exports.default = resizeApi;
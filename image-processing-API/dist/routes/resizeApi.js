"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var util1_1 = __importDefault(require("../Utilities/util1"));
var validation_1 = __importDefault(require("../middlewares/validation"));
var resizeApi = express_1.default.Router();
resizeApi.get('/:image/:width/:height', validation_1.default.validateImage, function (req, res) {
    util1_1.default.resizeImage(req, res);
});
exports.default = resizeApi;

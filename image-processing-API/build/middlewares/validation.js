"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function validateImage(req, res, next) {
    var width = Number(req.params.width);
    var height = Number(req.params.height);
    var files = fs_1.default.readdirSync('./images');
    var fileExists = files.includes(req.params.image + ".jpg");
    if (!fileExists) {
        res.status(404).send("<h3>Image not found</h3>");
    }
    else if (isNaN(width) || isNaN(height) || width < 1 || height < 1) {
        res.status(400).send("<h3> Width and height must be positive numbers</h3>");
    }
    else {
        next();
    }
}
exports.default = { validateImage: validateImage };

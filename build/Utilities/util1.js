"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var resizeImage = function (req, res) {
    var filename = req.params.image + ".jpg".trim();
    var fullpath = "".concat(req.params.width, "_").concat(req.params.height, "_").concat(filename);
    if (createThumbnailFolder() == false && checkCache(fullpath) == true) {
        res.sendFile(fullpath, { root: './images/thumbnails' });
    }
    else {
        (0, sharp_1.default)("./images/".concat(filename))
            .resize(Number(req.params.width), Number(req.params.height), {
            kernel: sharp_1.default.kernel.nearest,
            fit: 'contain',
            position: 'right top',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 }
        })
            .toFile("./images/thumbnails/".concat(fullpath))
            .then(function () {
            res.sendFile(fullpath, { root: './images/thumbnails' });
        });
    }
};
function createThumbnailFolder() {
    var isCreated = false;
    if (!fs_1.default.existsSync('./images/thumbnails')) {
        fs_1.default.mkdirSync('./images/thumbnails');
        isCreated = true;
    }
    return isCreated;
}
function checkCache(filename) {
    var files = fs_1.default.readdirSync('./images/thumbnails');
    var fileExists = files.includes(filename);
    return fileExists;
}
exports.default = {
    resizeImage: resizeImage
};

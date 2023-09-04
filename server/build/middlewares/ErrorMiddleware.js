"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorMiddleware(req, res) {
    console.log("error!!!");
    return res.status(400).json({ message: "Error!" });
}
exports.default = ErrorMiddleware;

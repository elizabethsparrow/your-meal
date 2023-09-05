"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeFilesMiddleware = void 0;
const safeFilesMiddleware = (req, res, next) => {
    next();
};
exports.safeFilesMiddleware = safeFilesMiddleware;

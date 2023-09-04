"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError {
    constructor(status, message, type) {
        this.status = status;
        this.message = message;
        this.type = type;
    }
    static badRequest() {
        return new ApiError(400, "BadRequest", "Bad request");
    }
}
exports.ApiError = ApiError;

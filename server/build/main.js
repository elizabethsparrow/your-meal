"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)(), port = 4000;
app.use((0, express_fileupload_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: function (origin, callback) {
        callback(null, true);
        // if (whitelist.indexOf(origin) !== -1) {
        // } else {
        //   callback(new Error('Not allowed by CORS'))
        // }
    },
}));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "static")));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(middlewares_1.ErrorMiddleware);

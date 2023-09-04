"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)(), port = 4000;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use("/api", routes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use((error, req, res) => {
    console.log("error!!!");
    return res.status(400).json({ message: "Error!" });
});

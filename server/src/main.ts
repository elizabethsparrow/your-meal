import express, { Express, Response, Request } from "express";
import router from "./routes";
import path from "path";
import { ErrorMiddleware } from "./middlewares";
import bodyParser from "body-parser";

const app: Express = express(),
  port = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use("/api", router);
app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(ErrorMiddleware);

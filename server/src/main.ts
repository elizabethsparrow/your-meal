import express, { Express, Response, Request } from "express";
import fileupload from "express-fileupload";
import router from "./routes";
import path from "path";
import cors from "cors";
import { ErrorMiddleware } from "./middlewares";
import bodyParser from "body-parser";

const app: Express = express(),
  port = 4000;

app.use(fileupload());
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      callback(null, true);
      // if (whitelist.indexOf(origin) !== -1) {
      // } else {
      //   callback(new Error('Not allowed by CORS'))
      // }
    },
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);
app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(ErrorMiddleware);

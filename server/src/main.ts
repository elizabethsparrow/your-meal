import express, { Express, Response, Request } from "express";
import router from "./routes";
import { ErrorMiddleware } from "./middlewares";
import bodyParser from "body-parser";

const app: Express = express(),
  port = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use((error: Error, req: Request, res: Response) => {
  console.log("error!!!");

  return res.status(400).json({ message: "Error!" });
});

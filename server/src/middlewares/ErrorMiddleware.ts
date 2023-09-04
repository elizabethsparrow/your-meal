import { Request, Response } from "express";

export default function ErrorMiddleware(req: Request, res: Response) {
  console.log("error!!!");

  return res.status(400).json({ message: "Error!" });
}

import { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errorUtils.js";

export function errorHandlerMiddleware(
  error: Error | AppError | AxiosError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if ("response" in error) {
    if (error.response)
        return res.sendStatus(error.response.status);
    else    
        return res.sendStatus(500);
  }

  if ("type" in error) {
    if (error.type === "not_found") {
      return res.sendStatus(404);
    }

    if (error.type === "bad_request") {
      return res.sendStatus(400);
    }
  }

  res.sendStatus(500);
}

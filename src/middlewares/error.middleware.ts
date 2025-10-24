import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof ZodError) {
    return res
      .status(400)
      .json({ message: "Validation Error", issues: err.issues });
  }

  if (err instanceof Error && err.message === "Product not found") {
    return res.status(404).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
}

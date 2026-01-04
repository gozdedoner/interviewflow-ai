import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = (req as any).cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

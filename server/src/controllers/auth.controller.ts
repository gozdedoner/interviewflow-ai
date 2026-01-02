import { Request, Response } from "express";
import { signToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  const { email } = req.body;

  // (Şimdilik DB yok → mock user)
  const token = signToken({ email });

  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    })
    .json({ message: "Registered successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email } = req.body;

  const token = signToken({ email });

  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    })
    .json({ message: "Logged in successfully" });
};

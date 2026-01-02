import { Request, Response } from "express";

export const startInterview = async (req: Request, res: Response) => {
  const user = (req as any).user;

  res.json({
    message: "Interview started",
    user,
    question:
      "Tell me about a challenging frontend project you worked on. How did you approach the problem and what was the outcome?",
  });
};

export const submitAnswer = async (req: Request, res: Response) => {
  const { answer } = req.body;
  const user = (req as any).user;

  // AI burada bağlanacak (bir sonraki adım)
  res.json({
    message: "Answer received",
    user,
    answerLength: answer.length,
  });
};

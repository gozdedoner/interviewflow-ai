// imports
import type { Request, Response } from "express";
import { analyzeAnswer } from "../services/ai.service.js";
import { interviewStore } from "../utils/interviewStore.js";
import { randomUUID } from "crypto";

// start interview
export const startInterview = async (req: Request, res: Response) => {
  const user = (req as any).user;

  res.json({
    message: "Interview started",
    user: {
      email: user.email,
    },
    question:
      "Tell me about a challenging frontend project you worked on. How did you approach the problem and what was the outcome?",
  });
};

// submit answer
export const submitAnswer = async (req: Request, res: Response) => {
  const { answer } = req.body;
  const user = (req as any).user;

  if (!answer || answer.length < 50) {
    return res.status(400).json({
      message: "Answer is too short",
    });
  }

  const feedback = await analyzeAnswer(answer);

  const session = {
    id: randomUUID(),
    userEmail: user.email,
    question:
      "Tell me about a challenging frontend project you worked on. How did you approach the problem and what was the outcome?",
    answer,
    feedback,
    createdAt: new Date(),
  };

  interviewStore.push(session);

  res.json({
    message: "Answer analyzed",
    sessionId: session.id,
    feedback,
  });
};

// get history
export const getInterviewHistory = (req: Request, res: Response) => {
  const user = (req as any).user;

  const history = interviewStore.filter((i: any) => i.userEmail === user.email);

  res.json({
    count: history.length,
    history,
  });
};

// analytics
export const getInterviewAnalytics = (req: Request, res: Response) => {
  const user = (req as any).user;

  const sessions = interviewStore.filter(
    (i: any) => i.userEmail === user.email
  );

  if (sessions.length === 0) {
    return res.json({
      totalInterviews: 0,
      averageScore: 0,
      trend: "no data",
      recommendation: "Start practicing interviews",
    });
  }

  const scores = sessions.map((s: any) => s.feedback.score);
  const averageScore =
    scores.reduce((a: number, b: number) => a + b, 0) / scores.length;

  const trend =
    scores.length >= 2 && scores[scores.length - 1] > scores[0]
      ? "improving"
      : "stable";

  const strengthsMap: Record<string, number> = {};

  sessions.forEach((s: any) => {
    s.feedback.strengths.forEach((skill: string) => {
      strengthsMap[skill] = (strengthsMap[skill] || 0) + 1;
    });
  });

  const strongestSkill = Object.entries(strengthsMap).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  let recommendation = "Needs more practice";
  if (averageScore >= 8.5) recommendation = "Ready for Senior interviews";
  else if (averageScore >= 7.5)
    recommendation = "Ready for Mid-level interviews";

  res.json({
    totalInterviews: sessions.length,
    averageScore: Number(averageScore.toFixed(2)),
    trend,
    strongestSkill,
    recommendation,
  });
};

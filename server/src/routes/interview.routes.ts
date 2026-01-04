import { Router } from "express";
import {
  startInterview,
  submitAnswer,
  getInterviewHistory,
  getInterviewAnalytics,
} from "../controllers/interview.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/start", authMiddleware, startInterview);
router.post("/submit", authMiddleware, submitAnswer);
router.get("/history", authMiddleware, getInterviewHistory);
router.get("/analytics", authMiddleware, getInterviewAnalytics);

export default router;

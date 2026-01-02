import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  startInterview,
  submitAnswer,
} from "../controllers/interview.controller";

const router = Router();

router.post("/start", authMiddleware, startInterview);
router.post("/submit", authMiddleware, submitAnswer);

export default router;

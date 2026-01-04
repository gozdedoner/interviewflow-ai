import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import QuestionCard from "../components/interview/QuestionCard";
import AnswerInput from "../components/interview/AnswerInput";
import ActionButtons from "../components/interview/ActionButtons";

import { submitAnswer } from "../services/interviewApi";

export default function InterviewPage() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      await submitAnswer(answer);

      // ✅ submit sonrası analytics sayfasına geç
      navigate("/analytics");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <InterviewHeader
        role="Frontend Developer"
        difficulty="Mid"
        language="EN"
      />

      <QuestionCard question="Tell me about a challenging frontend project you worked on. How did you approach the problem and what was the outcome?" />

      <AnswerInput value={answer} onChange={setAnswer} minLength={150} />

      <ActionButtons
        canSubmit={answer.length >= 150}
        isLoading={loading}
        onSubmit={handleSubmit}
      />

      {error && <p className="text-red-400 text-center mt-4">{error}</p>}
    </div>
  );
}

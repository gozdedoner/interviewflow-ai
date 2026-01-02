import { useState } from "react";
import InterviewHeader from "./components/interview/InterviewHeader";
import QuestionCard from "./components/interview/QuestionCard";
import AnswerInput from "./components/interview/AnswerInput";
import ActionButtons from "./components/interview/ActionButtons";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <InterviewHeader
        role="Frontend Developer"
        difficulty="Mid"
        language="EN"
      />

      <QuestionCard question="Tell me about a challenging frontend project you worked on. How did you approach the problem and what was the outcome?" />

      <AnswerInput minLength={150} />

      <ActionButtons
        canSubmit={answer.length >= 150}
        isLoading={loading}
        onSubmit={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      />
    </div>
  );
}

import { useState } from "react";

type AnswerInputProps = {
  minLength?: number;
};

export default function AnswerInput({ minLength = 150 }: AnswerInputProps) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer as if you are speaking in an interview..."
        className="w-full min-h-[180px] resize-none rounded-xl bg-[#0f0f0f] border border-white/10 p-6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      <div className="flex justify-between items-center mt-2 text-sm text-white/50">
        <span>{answer.length} characters</span>

        {answer.length < minLength && (
          <span>Minimum recommended: {minLength}</span>
        )}
      </div>
    </div>
  );
}

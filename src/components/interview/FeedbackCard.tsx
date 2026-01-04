import React from "react";

type FeedbackProps = {
  feedback: {
    score: number;
    strengths: string[];
    improvements: string[];
    star: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
  };
};

type SectionProps = {
  title: string;
  color: "green" | "amber";
  children: React.ReactNode;
};

function Section({ title, color, children }: SectionProps) {
  const colorMap = {
    green: "text-green-400",
    amber: "text-amber-400",
  };

  return (
    <div className="mt-6">
      <h3 className={`font-semibold mb-2 ${colorMap[color]}`}>{title}</h3>
      <ul className="list-disc list-inside text-white/80 space-y-1">
        {children}
      </ul>
    </div>
  );
}

type StarBlockProps = {
  label: string;
  text: string;
};

function StarBlock({ label, text }: StarBlockProps) {
  return (
    <div className="mb-3">
      <span className="text-purple-400 font-semibold">{label}: </span>
      <span className="text-white/80">{text}</span>
    </div>
  );
}

export default function FeedbackCard({ feedback }: FeedbackProps) {
  const { score, strengths, improvements, star } = feedback;

  return (
    <div
      className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10
      shadow-[0_0_40px_rgba(168,85,247,0.15)]"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-purple-300">
          Interview Evaluation
        </h2>

        <div className="text-right">
          <p className="text-white/60 text-sm">Overall Score</p>
          <p className="text-3xl font-bold text-green-400">
            {score.toFixed(1)} / 10
          </p>
        </div>
      </div>

      {/* STRENGTHS */}
      <Section title="Strengths" color="green">
        {strengths.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Section>

      {/* IMPROVEMENTS */}
      <Section title="Areas for Improvement" color="amber">
        {improvements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Section>

      {/* STAR */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-300 mb-4">
          STAR Analysis
        </h3>

        <StarBlock label="Situation" text={star.situation} />
        <StarBlock label="Task" text={star.task} />
        <StarBlock label="Action" text={star.action} />
        <StarBlock label="Result" text={star.result} />
      </div>
    </div>
  );
}

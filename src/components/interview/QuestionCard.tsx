type QuestionCardProps = {
  question: string;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="max-w-3xl mx-auto mt-12 bg-[#0f0f0f] border border-white/10 rounded-xl p-8 shadow-lg">
      <p className="text-sm text-white/50 mb-3">Interview Question</p>

      <h1 className="text-xl md:text-2xl font-medium text-white leading-relaxed">
        {question}
      </h1>
    </div>
  );
}

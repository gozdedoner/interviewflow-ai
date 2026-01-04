type AnswerInputProps = {
  value: string;
  onChange: (v: string) => void;
  minLength?: number;
};

export default function AnswerInput({
  value,
  onChange,
  minLength = 150,
}: AnswerInputProps) {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer as if you are speaking in an interview..."
        className="w-full min-h-[180px] resize-none rounded-xl bg-[#0f0f0f] border border-white/10 p-6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      <div className="flex justify-between mt-2 text-sm text-white/50">
        <span>{value.length} characters</span>
        {value.length < minLength && (
          <span>Minimum recommended: {minLength}</span>
        )}
      </div>
    </div>
  );
}

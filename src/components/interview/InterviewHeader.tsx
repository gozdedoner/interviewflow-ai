type InterviewHeaderProps = {
  role: string;
  difficulty: string;
  language: string;
};

export default function InterviewHeader({
  role,
  difficulty,
  language,
}: InterviewHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
      {/* Logo / Title */}
      <h2 className="text-lg font-semibold text-purple-400">
        InterviewFlow AI
      </h2>

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-sm text-white/70">
        <span>
          Role: <strong className="text-white">{role}</strong>
        </span>
        <span>
          Level: <strong className="text-white">{difficulty}</strong>
        </span>
        <span>
          Lang: <strong className="text-white">{language}</strong>
        </span>
      </div>
    </header>
  );
}

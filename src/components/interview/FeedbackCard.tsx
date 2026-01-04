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
      <h3 className={`text-lg font-semibold mb-2 ${colorMap[color]}`}>
        {title}
      </h3>
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
      <h4 className="text-sm font-semibold text-purple-300">{label}</h4>
      <p className="text-white/80 text-sm">{text}</p>
    </div>
  );
}

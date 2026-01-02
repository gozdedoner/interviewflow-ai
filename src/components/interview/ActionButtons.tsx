type ActionButtonsProps = {
  canSubmit: boolean;
  isLoading: boolean;
  onSubmit: () => void;
};

export default function ActionButtons({
  canSubmit,
  isLoading,
  onSubmit,
}: ActionButtonsProps) {
  return (
    <div className="max-w-3xl mx-auto mt-6 flex justify-end gap-4">
      <button
        disabled={!canSubmit || isLoading}
        onClick={onSubmit}
        className={`px-6 py-3 rounded-lg font-medium transition
          ${
            canSubmit && !isLoading
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-600/40 text-white/50 cursor-not-allowed"
          }`}
      >
        {isLoading ? "Analyzing..." : "Submit Answer"}
      </button>
    </div>
  );
}

type Props = {
  canSubmit: boolean;
  isLoading: boolean;
  onSubmit: () => void;
};

export default function ActionButtons({
  canSubmit,
  isLoading,
  onSubmit,
}: Props) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onSubmit}
        disabled={!canSubmit || isLoading}
        className={`px-6 py-3 rounded-xl font-semibold transition
          ${
            canSubmit
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
      >
        {isLoading ? "Analyzing..." : "Submit Answer"}
      </button>
    </div>
  );
}

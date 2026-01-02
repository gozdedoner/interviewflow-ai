export type AIFeedback = {
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

export const analyzeAnswer = async (answer: string) => {
  return {
    score: 8.3,
    star: {
      situation:
        "The candidate worked on a large-scale frontend application with performance issues.",
      task: "They were responsible for identifying bottlenecks and improving performance.",
      action:
        "They analyzed bundle size, optimized rendering, and refactored components.",
      result:
        "Performance improved significantly and user engagement increased.",
    },
    strengths: [
      "Clear problem understanding",
      "Strong technical decision making",
      "Good communication",
    ],
    improvements: [
      "Add measurable business impact",
      "Mention collaboration with team members",
    ],
  };
};

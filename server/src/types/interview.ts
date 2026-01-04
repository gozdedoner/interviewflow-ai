export type InterviewFeedback = {
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

export type InterviewSession = {
  id: string;
  userEmail: string;
  question: string;
  answer: string;
  feedback: InterviewFeedback;
  createdAt: Date;
};

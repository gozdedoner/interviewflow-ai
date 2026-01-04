import { useEffect, useState } from "react";

type InterviewSession = {
  id: string;
  question: string;
  answer: string;
  feedback: {
    score: number;
    strengths: string[];
    improvements: string[];
    summary?: string;
  };
  createdAt: string;
};

export default function AnalyticsPage() {
  const [data, setData] = useState<InterviewSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          "http://localhost:4000/api/interview/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch interview history");
        }

        const json = await res.json();
        setData(json.history);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-purple-400">
        Loading analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/50">
        No interview data yet. Start an interview 🚀
      </div>
    );
  }

  const averageScore =
    data.reduce((sum, i) => sum + i.feedback.score, 0) / data.length;

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        Interview Analytics
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Interviews" value={data.length} />
        <StatCard
          title="Average Score"
          value={averageScore.toFixed(1)}
        />
        <StatCard
          title="Latest Score"
          value={data[data.length - 1].feedback.score}
        />
      </div>

      {/* History */}
      <div className="space-y-6">
        {data
          .slice()
          .reverse()
          .map((session) => (
            <div
              key={session.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
            >
              <p className="text-sm text-purple-300 mb-2">
                Score: {session.feedback.score}
              </p>

              <p className="text-white/70 text-sm mb-3">
                {session.question}
              </p>

              <div className="text-sm text-green-400">
                Strengths:
                <ul className="list-disc ml-5 text-white/70">
                  {session.feedback.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-yellow-400 mt-3">
                Improvements:
                <ul className="list-disc ml-5 text-white/70">
                  {session.feedback.improvements.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
      <p className="text-white/50 text-sm">{title}</p>
      <p className="text-3xl font-bold text-purple-400 mt-2">
        {value}
      </p>
    </div>
  );
}

const API_URL = import.meta.env.VITE_API_URL;

export async function submitAnswer(answer: string) {
  const res = await fetch(`${API_URL}/api/interview/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ answer }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Submit failed");
  }

  return res.json();
}

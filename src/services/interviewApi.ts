const API_URL = "http://localhost:4000/api";

export async function submitAnswer(answer: string) {
  const res = await fetch(`${API_URL}/interview/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔥 ASIL OLAY BU
    body: JSON.stringify({ answer }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Submit failed");
  }

  return res.json();
}

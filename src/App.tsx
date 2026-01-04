import { Routes, Route, Navigate } from "react-router-dom";
import InterviewPage from "./pages/InterviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/interview" />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  );
}

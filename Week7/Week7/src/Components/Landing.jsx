import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  );
}

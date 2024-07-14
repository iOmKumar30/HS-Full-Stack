import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={() => navigate("/")}>Go to Landing</button>
    </div>
  );
}

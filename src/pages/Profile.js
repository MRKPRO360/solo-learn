import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogout = async function () {
    try {
      setLoading(true);
      setError("");
      await logout();
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 text-white bg-blue-400 cursor-pointer"
        disabled={loading}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

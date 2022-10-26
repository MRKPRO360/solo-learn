import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogout = async function () {
    try {
      setLoading(true);
      await logout();
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleNavigate = function () {
    navigate("/update-info");
  };

  return (
    <div className="p-4 rounded shadow-md shadow-blue-50">
      {currentUser?.photoURL ? (
        <img
          className="block w-32 h-32 rounded-full shadow shadow-blue-100"
          src={currentUser.photoURL}
          alt="instructor"
        />
      ) : (
        <p>No image found for this account</p>
      )}

      <h1 className="mt-5 mb-3 text-2xl font-semibold text-gray-600">
        {currentUser?.displayName}
      </h1>
      <p>Email: {currentUser?.email}</p>
      <div className="flex gap-3 mt-3 itmes-cente">
        <button
          className="px-3 py-1 font-semibold text-white transition duration-300 bg-blue-500 border-blue-500 rounded cursor-pointer hover:bg-blue-600"
          onClick={handleNavigate}
        >
          Change Profile
        </button>

        <button
          className="px-3 py-1 font-semibold text-blue-500 transition duration-300 border-b-2 border-blue-500 cursor-pointer hover:rounded hover:text-white hover:bg-blue-500"
          disabled={loading}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

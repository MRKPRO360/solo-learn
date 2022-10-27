import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Update() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, updateInfo } = useAuth();
  const navigate = useNavigate();

  const handleUpdate = async function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    console.log(photoURL);

    try {
      setLoading(true);
      setError("");
      await updateInfo(name, photoURL);
      navigate(-1);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="py-8 min-h-[554px] space-y-8 shadow-md rounded-md shadow-blue-100"
        onSubmit={handleUpdate}
      >
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="username"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="username"
            name="name"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="photoUrl"
          >
            Photo Url:
          </label>
          <input
            type="text"
            id="photoUrl"
            name="photoUrl"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="www.photoUrl-link.com"
          />
        </div>
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <p className="text-red-500 font-regular">{error}</p>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <div className="w-40"></div>
          <div className="w-full">
            <button
              disabled={loading}
              type="submit"
              className="w-24 px-4 py-2 mr-auto text-base font-semibold text-white bg-blue-500 rounded"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

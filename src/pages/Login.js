import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async function (e) {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      setError("");
      await login(email, password);
      navigate("/");
      // fixed to remove the login history later
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
        onSubmit={handleLogin}
      >
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="**********"
            required
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
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
          <p>
            Doesn't have an account? &nbsp;
            <Link className="text-blue-500 underline" to="/signup">
              Signup
            </Link>
            &nbsp; instead.
          </p>
        </div>
      </form>
    </div>
  );
}

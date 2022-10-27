import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, passwordReset } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleForgetPassword = async function () {
    if (userEmail.length <= 0) return setError("Email must be provided");
    try {
      setError("");
      await passwordReset(userEmail);
      toast.success("Check your spam folder to reset your password", {
        duration: 3000,
      });
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleLogin = async function (e) {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length <= 0) return setError("Password must be provided");

    try {
      setError("");
      setLoading(true);
      setUserEmail(email);
      await login(email, password);
      navigate(from, { replace: true });
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
            onBlur={(e) => setUserEmail(e.target.value)}
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
          />
        </div>
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <p className="text-red-500 font-regular">{error}</p>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <div className="w-40"></div>
          <div className="flex flex-col items-center w-full gap-5 sm:gap-3 sm:flex-row">
            <button
              disabled={loading}
              type="submit"
              className="w-24 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded"
            >
              Login
            </button>
            <span
              onClick={handleForgetPassword}
              className="inline-block font-bold text-blue-500 underline cursor-pointer w-36"
            >
              Forgot password?
            </span>
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

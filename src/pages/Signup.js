import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { signup, googleLogin, githubLogin } = useAuth();

  const handleGoogleLogin = async function () {
    try {
      setError("");
      await googleLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleGithubLogin = async function () {
    try {
      setError("");
      await githubLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleSignup = async function (e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.photoUrl.value;

    try {
      setLoading(true);
      setError("");
      await signup(email, password, name, url);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="py-8 space-y-8 rounded-md shadow-md shadow-blue-100"
        onSubmit={handleSignup}
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
          <div className="flex items-center w-full gap-2 ">
            <button
              disabled={loading}
              type="submit"
              className="w-24 px-4 py-2 text-base font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
            <span>Or, login with </span>
          </div>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
          <div className="w-40"></div>
          <div className="flex w-full gap-2">
            <div
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-blue-500 transition duration-300 border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <FaGoogle />
              <span>Google</span>
            </div>

            <div
              onClick={handleGithubLogin}
              className="flex items-center gap-2 px-4 py-2 mr-auto text-base font-semibold text-blue-500 transition duration-300 border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <FaGithub />
              <span>Gihub</span>
            </div>
          </div>
        </div>
        <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
          <p>
            Already have an account &nbsp;
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
            &nbsp; instead.
          </p>
        </div>
      </form>
    </div>
  );
}

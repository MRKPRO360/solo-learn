import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import Switch from "react-switch";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
const navItems = [
  {
    path: "/courses",
    text: "Courses",
  },
  {
    path: "/faq",
    text: "Faq",
  },
  {
    path: "/blog",
    text: "Blog",
  },
];

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleSwitch = function () {
    setToggle(!toggle);
  };

  const { currentUser } = useAuth();
  return (
    <div className="items-center justify-between px-3 py-3 mt-5 space-y-6 bg-blue-500 rounded shadow md:px-4 md:space-y-0 md:flex shadow-blue-400">
      <Link to="/">
        <h1 className="text-xl font-semibold text-white sm:text-2xl">
          Solo Learn
        </h1>
      </Link>
      <nav className="ml-auto mr-10 space-x-4 md:space-x-3 text-gray-50 xs:ml-0 xs:space-x-0 xs:mr-0 xs:flex xs:flex-col xs:w-full">
        {navItems.map((el, i) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-base sm:text-lg lg:text-lg bg-white text-blue-500 px-2 py-[6px] rounded font-semibold text-center transition duration-300   w-20 xs:w-full"
                : "text-base sm:text-lg lg:text-lg px-2 py-[6px] rounded font-semibold text-center w-20 transition duration-300 xs:w-full  hover:text-blue-200"
            }
            key={i}
            to={el.path}
          >
            {el.text}
          </NavLink>
        ))}
      </nav>

      {currentUser?.uid ? (
        <Link to="/profile">
          <div className="flex items-center gap-3 ">
            <img
              className="w-10 h-10 rounded-full"
              src={currentUser?.photoURL}
              alt="user"
            />
            <span className="font-medium text-white transition duration-300 hover:text-blue-200 ">
              {currentUser?.displayName}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex items-center gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-base sm:text-lg lg:text-lg bg-white text-blue-500 px-2 py-[6px] rounded font-semibold text-center transition duration-300   w-20 xs:w-full"
                : "text-base text-white sm:text-lg lg:text-lg px-2 py-[6px] rounded font-semibold text-center w-20 transition duration-300 xs:w-full  hover:text-blue-200"
            }
            to="/login"
          >
            Login
          </NavLink>
          <Switch
            onChange={handleSwitch}
            onHandleColor="#fff"
            offHandleColor="#3b82f6"
            checked={toggle}
            offColor="#fff"
            onColor="#60a5fa"
            uncheckedIcon={<HiOutlineSun className="w-full h-full" />}
            checkedIcon={
              <HiOutlineMoon className="w-full h-full text-white font-semibold" />
            }
          />
        </div>
      )}
    </div>
  );
}

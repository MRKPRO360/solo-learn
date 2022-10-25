import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
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
  return (
    <div className="items-center justify-between p-3 mt-5 space-y-6 bg-blue-500 rounded shadow md:space-y-0 md:flex shadow-blue-400">
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
                : "text-base sm:text-lg lg:text-lg px-2 py-[6px] rounded font-semibold text-center w-20 transition duration-300 xs:w-full"
            }
            key={i}
            to={el.path}
          >
            {el.text}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <FaUser className="text-2xl text-gray-50" />
        <span className="font-medium text-white">Habijabi</span>
      </div>
    </div>
  );
}

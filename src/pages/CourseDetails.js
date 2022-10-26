import { FaPrint } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export default function CourseDetails() {
  const course = useLoaderData();
  const { name, img, text, id } = course;
  return (
    <div className="p-4 rounded shadow-md shadow-blue-100 min-h-[200px]">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-semibold tracking-wider text-gray-800 sm:text-3xl">
          {name}
        </h1>

        <FaPrint className="text-3xl cursor-pointer" />
      </div>
      <img
        className="object-cover object-center w-24 mb-4 "
        src={img}
        alt={name}
      />
      <p className="text-base font-medium text-gray-600 sm:text-lg">{text}</p>
      <button className="block p-2 mt-3 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600 print:hidden">
        Checkout
      </button>
    </div>
  );
}

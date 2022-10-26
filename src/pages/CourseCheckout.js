import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export default function CourseCheckout() {
  const courseInfo = useLoaderData();
  const { name, purchase, updated, ratings, author, img } = courseInfo;

  const handleProgress = function () {
    toast.loading("Hang On :) We are working for you", {
      icon: "👏",
      duration: 4000,
    });
  };
  return (
    <div className="p-4 rounded shadow-md shadow-blue-50">
      <img
        className="block w-32 rounded shadow shadow-blue-100"
        src={img}
        alt="instructor"
      />

      <h1 className="mt-5 mb-3 text-2xl font-semibold text-gray-600">
        Course Name: {name}
      </h1>
      <div className="space-y-2">
        <p>Updated on: {updated}</p>
        <p>{author}</p>
        <div className="flex items-center gap-2 ">
          <span>Ratings: {ratings}</span>
          <FaStar className="text-xl text-blue-500" />
        </div>
        <p>Purchase: ${purchase}</p>
      </div>
      <button
        onClick={handleProgress}
        className="inline-block p-2 mt-3 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
      >
        Buy Now
      </button>
    </div>
  );
}

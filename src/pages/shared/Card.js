import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { id, name, img, text } = card;

  return (
    <div className="p-3 rounded shadow-md shadow-blue-100">
      <img
        className="object-cover object-center w-32 h-32"
        src={img}
        alt={name}
      />
      <h3 className="mt-5 text-xl font-semibold text-gray-700 ">{name}</h3>
      <p className="my-5">
        {text.length > 100 && <span>{text.slice(0, 100) + "..."}</span>}
      </p>
      <Link
        to={`/courses/course-details/${id}`}
        className="block px-3 py-2 font-semibold text-gray-100 duration-300 bg-blue-500 rounded transtion hover:bg-blue-600"
      >
        Detalis
      </Link>
    </div>
  );
}

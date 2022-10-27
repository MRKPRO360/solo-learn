import { useRef } from "react";
import { FaPrint } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

export default function CourseDetails() {
  const pdfRef = useRef(null);

  const course = useLoaderData();
  const { name, img, text, id } = course;

  return (
    <div
      ref={pdfRef}
      className="p-4 rounded shadow-md shadow-blue-100 max-w-[500px]"
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-semibold tracking-wider text-gray-800 sm:text-3xl">
          {name}
        </h1>

        <ReactToPdf targetRef={pdfRef} filename="course-detail.pdf">
          {({ toPdf }) => (
            <FaPrint onClick={toPdf} className="text-3xl cursor-pointer" />
          )}
        </ReactToPdf>
      </div>
      <img
        className="object-cover object-center w-24 h-24 mb-4 "
        src={img}
        alt={name}
      />
      <p className="text-base font-medium text-gray-600 sm:text-lg">{text}</p>
      <Link
        to={`/courses/checkout/${id}`}
        className="inline-block p-2 mt-3 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600 print:hidden"
      >
        Get Premium Access
      </Link>
    </div>
  );
}

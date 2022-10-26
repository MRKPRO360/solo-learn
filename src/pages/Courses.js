import { Link, useLoaderData } from "react-router-dom";
import Card from "./shared/Card";

export default function Courses() {
  const courses = useLoaderData();

  return (
    <div className="flex flex-col gap-10 md:gap-4 md:flex-row ">
      <div className="grid flex-1 order-2 gap-4 md:order-1 grid-cols-autoColumn ">
        {courses.map((course, i) => (
          <Card key={i} card={course} />
        ))}
      </div>
      <div className="order-1 w-full shadow-md md:w-56 md:order-2 shadow-blue-100">
        <ul className="px-1 space-y-4">
          {courses.map((course, i) => (
            <li key={i}>
              <Link
                className="block p-2 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
                to={`/courses/course-details/${course.id}`}
              >
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

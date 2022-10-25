import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="mt-64 text-lg font-semibold text-center text-gray-700 sm:text-2xl">
      The page that you are looking for is not currently available. Go instead
      the &nbsp;
      <Link className="text-blue-500 underline " to="/">
        home
      </Link>
      page.
    </div>
  );
}

import Header from "./pages/shared/Header";
import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <div className="w-[80%] 2xl:max-w-screen-2xl mx-auto">
        <Header />
        <div className="my-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import Header from "./pages/shared/Header";
import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

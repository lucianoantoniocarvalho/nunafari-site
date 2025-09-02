import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="main-with-header">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
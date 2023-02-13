import { Outlet } from "react-router-dom";
import "../Layout/layout.scss";

function Layout({}) {
  return (
    <>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackgroundBubbles from "../BackgroundBubbles";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundBubbles />
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <Footer />
      <NavBar />
    </div>
  );
};

export default Layout;

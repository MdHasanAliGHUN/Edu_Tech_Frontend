import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

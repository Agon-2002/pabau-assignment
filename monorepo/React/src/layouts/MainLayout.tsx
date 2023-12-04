import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main className="grow bg-[#eee] flex justify-center p-3 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

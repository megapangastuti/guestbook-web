import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import bgAbstrac from "../../../assets/images/bg-abstract.jpg";
import bgBlur from "../../../assets/images/bg-blur.jpg";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-center flex pr-20" style={{ backgroundImage: `url(${bgBlur})`, backgroundSize: "cover" }}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col md:ml-64">
        <main className="flex-1 overflow-y-auto md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

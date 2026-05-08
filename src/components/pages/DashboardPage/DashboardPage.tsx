import { NavLink } from "react-router-dom";
import { adminMenus } from "../../../types/menu/menu.types";

function DashboardPage() {
  const menus = adminMenus;
  return (
    <div>
      {/* side bar */}
      <div>
        <aside className="fixed top-0 left-0 h-screen bg-linear-to-br from-[#060B26] to-white/84 shadow-lg z-50 transform transition-transform">
          <div className="flex flex-row p-3 gap-2">
            <img src="src/assets/icons-open-book.png" className="w-6 h-6" alt="icon book open" />
            <p className="font-bold">Guest Book</p>
          </div>
          <nav className="space-y-2 px-3">
            {menus.map((menu) => (
              <NavLink key={menu.path} to={menu.path} className="block px-4 py-2 rounded-b-lg transition">
                <div className="flex items-center">
                  <img src={menu.icon} alt={menu.name} className="w-6 h-6 p-1 mr-3 bg-[#0075FF] rounded-lg" />
                  <p className="text-md">{menu.name}</p>
                </div>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default DashboardPage;

import { adminMenus } from "../../../types/menu/menu.types";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

function Sidebar({ isOpen, setIsOpen }: Props) {
  const menus = adminMenus;
  return (
    <div>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
      <aside
        className="fixed top-0 left-0 h-screen bg-linear-to-br
      	bg-white/10
      	backdrop-blur-lg
      	border
      	border-white/20
      	shadow-2xl transform transition-transform w-54 pl-2"
      >
        <div className="flex flex-row p-3 gap-2 px-5 mt-4">
          <img src="src/assets/icons/icons-open-book.png" className="w-4 h-4" alt="icon book open" />
          <p className="font-bold text-2xl text-white">Guest Book</p>
        </div>
        <nav className="space-y-2 px-3 py-4">
          {menus.map((menu) => (
            <NavLink key={menu.path} to={menu.path} className={({ isActive }) => `block px-4 py-2 rounded-lg transition ${isActive ? "bg-blue-950/10 text-white backdrop-blur-lg shadow-2xl transform transition-transform" : ""}`}>
              <div className="flex items-center">
                <img src={menu.icon} alt={menu.name} className="w-6 h-6 p-1 mr-3 bg-white rounded-lg" />
                <p className="text-md text-white">{menu.name}</p>
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;

import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/projects": "Projects",
  "/profile": "My Profile",
  "/settings": "Settings",
  // Add more routes as needed
};

const Navbar = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "TeamDesk";

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-800">{title}</h1>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search here..."
          className="px-3 py-1 border rounded-lg text-sm"
        />
        <div className="relative group cursor-pointer">
          <FaUserCircle size={28} />
          <div className="absolute hidden group-hover:block right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50">
            <ul className="text-sm text-gray-700 divide-y">
              <li className="px-4 py-2 hover:bg-gray-100">Action</li>
              <li className="px-4 py-2 hover:bg-gray-100">Another action</li>
              <li className="px-4 py-2 hover:bg-gray-100">Something else here</li>
              <li className="px-4 py-2 hover:bg-gray-100">Separated link</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

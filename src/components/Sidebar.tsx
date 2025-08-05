import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png'

const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Projects", path: "/projects" },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="w-64 h-screen bg-gradient-to-b from-white to-blue-50 shadow-xl p-6 flex flex-col">
            <div className="mb-10 transition-transform duration-300 transform hover:scale-105">
                <img
                    src={logo}
                    alt="TeamDesk Logo"
                    className="h-[12rem] w-auto"
                />
            </div>

            <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-4">
                    Admin Layout Pages
                </h4>
                <ul className="space-y-2">
                    {navItems.map(({ label, path }) => {
                        const isActive = location.pathname === path;
                        return (
                            <li key={label}>
                                <Link
                                    to={path}
                                    className={`block px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                                        ? "bg-blue-100 text-blue-700 font-semibold"
                                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

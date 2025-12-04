import { useState } from "react";
import { Link, NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import useUserHook from "../../hooks/useUserHook";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logoutUser } = useUserHook();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white  border-b border-gray-400 sticky top-0 z-50">
      <div className="container  mx-auto px-6 py-3 lg:py-4 flex justify-between items-center ">
        {/* Left: Logo */}

        <Link to="/" className="flex items-center gap-2 ">
          <span className="font-extrabold">Ed</span>_Tech
        </Link>
        {/* Center: NavLinks (Desktop) */}
        <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Login Button (Desktop) */}
        <div className="hidden md:block space-x-2">
          {user ? (
            <button onClick={logoutUser} className="px-6 py-1.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition font-playfair cursor-pointer">
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition "
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <div
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross2 /> : <CiMenuFries />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && <MobileNavbar navLinks={navLinks} setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;

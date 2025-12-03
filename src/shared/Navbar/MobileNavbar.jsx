import { Link, NavLink } from "react-router";

const MobileNavbar = ({ navLinks, setOpen }) => {
  return (
    <div className="md:hidden bg-white  py-4 px-6 space-y-3">
      {navLinks.map((link) => (
        <div
          key={link.path}
          className="border-b border-gray-300 pb-2 text-center"
        >
          <NavLink
            to={link.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            {link.name}
          </NavLink>
        </div>
      ))}

      {/* Mobile Login Button */}

      <div className="pt-2">
        <Link
          to="/login"
          onClick={() => setOpen(false)}
          className="block w-full bg-blue-600 text-white py-2 rounded-full text-center hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;

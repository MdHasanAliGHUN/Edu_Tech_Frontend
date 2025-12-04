import { Link, NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const MobileNavbar = ({ navLinks, setOpen }) => {
  const { user, logoutUser } = useUserHook();

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
        {user ? (
          <button
            onClick={logoutUser}
            className="w-full px-6 py-1.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition font-playfair cursor-pointer "
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block w-full bg-blue-600 text-white py-2 rounded-full text-center hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((err) => {
        toast.error("Failed to log out. Please try again.");
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#37f51e] font-bold" : "text-white "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-movies"
        className={({ isActive }) =>
          isActive ? "text-[#37f51e] font-bold" : "text-white"
        }
      >
        All Movies
      </NavLink>
      <NavLink
        to="/add-movie"
        className={({ isActive }) =>
          isActive ? "text-[#37f51e] font-bold" : "text-white"
        }
      >
        Add Movie
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "text-[#37f51e] font-bold" : "text-white"
        }
      >
        My Favorites
      </NavLink>
      <NavLink
        to="/feedback"
        className={({ isActive }) =>
          isActive ? "text-[#37f51e] font-bold" : "text-white"
        }
      >
        Feedback
      </NavLink>
    </>
  );

  return (
    <div className="py-5">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl md:text-2xl font-semibold text-white">
            <span className="text-[#37f51e] text-2xl md:text-3xl">S</span>tar
            <span className="text-[#37f51e] text-2xl md:text-3xl">F</span>
            lix
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
            {links}
          </ul>
        </div>
        <div className="flex gap-4 items-center navbar-end">
          <div>
            <ThemeToggle />
          </div>
          <div>
            {user && user?.email ? (
              <div className="dropdown dropdown-hover  dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={user?.photoURL}
                    className="rounded-full w-10 h-10 border-2 border-[#37f51e]"
                    alt="User Avatar"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="border-2 border-[#37f51e] dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li className="flex justify-between items-center">
                    <span className="font-medium">{user?.displayName}</span>
                  </li>
                  <li>
                    <Link
                      to="/edit-profile"
                      className="btn btn-sm  btn-info text-black"
                    >
                      Edit Profile
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm  btn-error text-black"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#37f51e] border-none text-black rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

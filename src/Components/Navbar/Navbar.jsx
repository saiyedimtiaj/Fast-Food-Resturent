import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logOut,user } = useAuth();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "" : ""
        }
      >
        Home
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-5 px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/logo/logo-3.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-lg font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
       {
        !user ?  <Link
        to="/login"
        className="bg-blue-600 flex items-center gap-1 px-5 py-2 rounded font-medium text-white"
      >
        <p>Sign In</p>{" "}
        <p className="text-xl font-bold">
          <FiLogIn />
        </p>
      </Link> : <button onClick={handleLogout} className="bg-blue-600 flex items-center gap-1 px-5 py-2 rounded font-medium text-white">Log Out</button>
       }
      </div>
    </div>
  );
};

export default Navbar;

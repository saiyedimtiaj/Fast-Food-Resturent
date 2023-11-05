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
        to="/allfood"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "" : ""
        }
      >
        All Food Items
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "" : ""
        }
      >
        Blog
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
            className="menu menu-sm dropdown-content gap-3 mt-3 z-50 px-2 py-4 shadow bg-base-100 rounded-box w-52"
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
        {
          user && <div className="dropdown dropdown-end ml-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL}/>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <p className="justify-between bg-slate-300 uppercase font-bold">
                {user.displayName}
              </p>
            </li>
            <li><Link to='/myaddeditem'>My added item</Link></li>
            <li><Link to='/add-item'>Add a item</Link></li>
            <li><Link to='/myorder'>My ordered item</Link></li>
          </ul>
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;

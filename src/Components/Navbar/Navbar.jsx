import React from "react";
import { FaTasks } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashBoard"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-black"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addTask"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-black"
                  }
                >
                  Add Task
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className=" md:text-xl lg:text-2xl hidden md:flex md:gap-2 lg:gap-3 md:font-medium lg:font-semibold  items-center">
            {" "}
            <FaTasks color=" blue" size={35}></FaTasks> Task Management
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashBoard"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addTask"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
              >
                Add Task
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

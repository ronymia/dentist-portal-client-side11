import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
     const [toggleIsOpned, setToggleIsOpned] = useState(false);

     const menuItems = (
          <>
               <li className="rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink
                         to="/"
                         className={({ isActive }) => (isActive && "text-[#D4D9E3] bg-dark rounded-lg")}
                    >
                         Home
                    </NavLink>
               </li>
               <li className=" rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink to={"/about"}>About</NavLink>
               </li>
               <li className=" rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink to={"/appointment"}>Appointment</NavLink>
               </li>
               <li className=" rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink to={"/reviews"}>Reviews</NavLink>
               </li>
               <li className=" rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink to={"/contact"}>Contact Us</NavLink>
               </li>
               <li className=" rounded-lg hover:bg-dark hover:text-[#D4D9E3] text-black">
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
               </li>
          </>
     );

     return (
          <header className="navbar md:px-[7%] px-2 fixed top-0 bg-white z-50 mb-5">
               <div className="navbar-start pl-2">
                    <Link to="/" className="">
                         <h3 className="text-2xl text-dark font-medium">Dentist portal</h3>
                    </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-1">
                         {menuItems}
                    </ul>
               </div>
               <div className="navbar-end gap-2">
                    <Link
                         to={"/auth/login"}
                         className=" text-dark hover:bg-dark hover:text-white font-semibold md:text-lg text-[14px] border border-dark px-5 py-[10px] rounded-lg"
                    >
                         Login
                    </Link>


                    {/* responsive nav hamburger  */}
                    <button
                         className="btn btn-square btn-ghost md:hidden text-back"
                         onClick={() => setToggleIsOpned(!toggleIsOpned)}
                    >
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block w-7 h-7 stroke-current"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M4 6h16M4 12h16M4 18h16"
                              ></path>
                         </svg>
                    </button>

                    {/* responsive navbar  */}
                    <ul
                         className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52
                absolute -left-[100%] ${!toggleIsOpned ? "top-[52px]" : "left-[50%] top-[52px]"
                              } transition-all duration-300 bg-white items-center md:hidden`}
                    >
                         {menuItems}
                    </ul>
               </div>
          </header>
     );
};

export default Header;

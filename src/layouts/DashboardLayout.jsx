import React from 'react';
import { Header } from '../pages/Shared';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

export default function DashboardLayout() {

     const [isAdmin, isAdminLoading] = useAdmin();

     return (
          <>
               <Header />
               <div className="w-full grid grid-cols-5 h-auto mt-16 bg-white">
                    <div className="col-span-1 pt-10 flex flex-col gap-2">
                         <NavLink to={"/dashboard"}
                              className={({ isActive }) => isActive ? "bg-[#F1F5F9] text-[#383838] h-11  text-lg font-bold w-full flex items-center justify-center" : "bg-white text-[#898989] h-11  text-lg font-bold w-full flex items-center justify-center"}
                         >Dashboard</NavLink>
                         <NavLink to={"/dashboard/myAppointment"}
                              className={({ isActive }) => isActive ? "bg-[#F1F5F9] text-[#383838] h-11  text-lg font-bold w-full flex items-center justify-center" : "bg-white text-[#898989] h-11  text-lg font-bold w-full flex items-center justify-center"}
                         >My Appointments</NavLink>
                         {
                              isAdmin &&
                              <NavLink to={"/dashboard/allUsers"}
                                   className={({ isActive }) => isActive ? "bg-[#F1F5F9] text-[#383838] h-11  text-lg font-bold w-full flex items-center justify-center" : "bg-white text-[#898989] h-11  text-lg font-bold w-full flex items-center justify-center"}
                              >All Users</NavLink>
                         }
                    </div>

                    {/* componet page */}
                    <Outlet />
               </div>
          </>
     )
}

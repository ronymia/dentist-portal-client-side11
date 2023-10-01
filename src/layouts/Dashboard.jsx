import React from 'react';
import { Header } from '../pages/Shared';
import { NavLink, Outlet } from 'react-router-dom';
import MyAppointment from '../pages/Dashoard/MyAppointment/MyAppointment';

export default function Dashboard() {
     return (
          <>
               <Header />
               <div className="w-full grid grid-cols-5 h-auto mt-16 bg-white">
                    <div className="col-span-1 px-6 pt-10">
                         <NavLink
                              className="btn btn-primary text-lg text-white rounded-lg bg-gradient-to-r from-primary to-secondary outline-none border-0"
                         >My Appointments</NavLink>
                    </div>

                    {/* componet page */}
                    <Outlet />
               </div>
          </>
     )
}

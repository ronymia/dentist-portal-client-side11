import React from 'react';

export default function MyAppointment() {
     return (
          <div className="col-span-4 bg-[#F1F5F9] p-14">
               <div className="flex flex-row items-center justify-between ">
                    <h2 className='text-black text-2xl'>My Appointment</h2>
                    <button type="button">click</button>
               </div>

               <table className='w-full mt-5'>
                    <tr className='h-12 bg-[#E6E6E6] uppercase text-sm font-semibold text-black rounded-t-xl'>
                         <th>name</th>
                         <th>service</th>
                         <th>time</th>
                    </tr>
                    <tr className='text-center h-12 bg-white text-black'>
                         <td>John Doe</td>
                         <td>Teeth Orthodontics</td>
                         <td>08.30 AM - 09.00 AM</td>
                    </tr>
               </table>
          </div>
     )
}

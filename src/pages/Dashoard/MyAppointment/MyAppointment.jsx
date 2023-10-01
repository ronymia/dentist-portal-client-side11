import React from 'react';

export default function MyAppointment() {
     return (
          <div className="col-span-4 bg-[#F1F5F9] p-14">
               <div className="flex flex-row items-center justify-between ">
                    <h2 className='text-black text-2xl'>My Appointment</h2>
                    <button type="button">click</button>
               </div>
               <div className="mt-6">
                    <div className="h-12 bg-[#E6E6E6] uppercase flex flex-row w-full items-center justify-center text-sm font-semibold text-black rounded-t-xl">
                         <h4 className='w-[10%]'></h4>
                         <h4 className='w-[30%]'>name</h4>
                         <h4 className='w-[30%]'>service</h4>
                         <h4 className='w-[30%]'>time</h4>
                    </div>
                    <div className="h-12 bg-white uppercase flex flex-row w-full items-center justify-center text-sm font-semibold text-black" >
                         <h4 className='w-[10%] block text-center'>1</h4>
                         <h4 className='w-[30%]'>John Doe</h4>
                         <h4 className='w-[30%]'>Teeth Orthodontics</h4>
                         <h4 className='w-[30%]'>	08.30 AM - 09.00 AM</h4>
                    </div>
                    <div className="h-12 bg-white uppercase flex flex-row w-full items-center justify-center text-sm font-semibold text-black" >
                         <h4 className='w-[10%] block text-center'>2</h4>
                         <h4 className='w-[30%]'>John Doe</h4>
                         <h4 className='w-[30%]'>Teeth Orthodontics</h4>
                         <h4 className='w-[30%]'>	08.30 AM - 09.00 AM</h4>
                    </div>
               </div>
          </div>
     )
}

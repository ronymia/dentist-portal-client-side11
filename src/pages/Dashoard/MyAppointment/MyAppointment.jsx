import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import { format } from 'date-fns';
import useAuth from "../../../hooks/useAuth";

export default function MyAppointment() {
     const { user } = useAuth();

     console.log(user?.email);

     //current date
     const date = format(new Date(), "PP");

     //data fetching
     const { data: bookings = [], isLoading } = useQuery({
          queryKey: ["bookings"],
          queryFn: async () => {
               return await axios.get(`http://localhost:5000/bookings?date=${date}&&email=${user?.email}`)
                    .then(res => {
                         // console.log(res.data)
                         return res.data;
                    }).catch(error => console.log(error))
          }
     });

     if (isLoading) {
          return <Loader />
     }

     console.log(bookings)

     return (
          <div className="col-span-4 bg-[#F1F5F9] p-14">
               <div className="flex flex-row items-center justify-between ">
                    <h2 className='text-black text-2xl'>My Appointment</h2>
                    <button type="button"
                         className='h-11 w-28 border border-black rounded-lg text-black text-sm'
                    >{date}</button>
               </div>

               <table className='w-full mt-5'>
                    <thead>
                         <tr className='h-12 bg-[#E6E6E6] uppercase text-sm font-semibold text-black rounded-t-xl'>
                              <th>name</th>
                              <th>service</th>
                              <th>time</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              bookings &&
                              bookings?.map(booked =>
                                   <tr className='text-center h-12 bg-white text-black'>
                                        {console.log(booked)}
                                        <td>{booked.patient}</td>
                                        <td>{booked.treatment}</td>
                                        <td>{booked.slot}</td>
                                   </tr>
                              )
                         }
                    </tbody>
               </table>
          </div>
     )
}
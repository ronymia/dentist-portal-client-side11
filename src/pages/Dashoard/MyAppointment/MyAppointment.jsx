import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import { format } from 'date-fns';
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

export default function MyAppointment() {
     const { user } = useAuth();
     const [axiosSecure] = useAxiosSecure();

     //current date
     const date = format(new Date(), "PP");

     //data fetching
     const { data: bookings = [], isLoading } = useQuery({
          queryKey: ["bookings", user?.email, date],
          queryFn: async () => {
               const res = await axiosSecure.get(`/bookings?date=${date}&&email=${user?.email}`)
               return res.data;
          }
     });

     if (isLoading) {
          return <Loader />
     }

     // console.log(bookings)

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
                                        {/* {console.log(booked)} */}
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

import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loader from "../../Shared/Loader/Loader";

export default function Allusers() {
     const { data: users = [], isLoading, refetch } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               return await axios.get("/users")
                    .then(res => {
                         return res.data;
                    })
                    .catch(err => { console.log(err) })
          }
     })

     if (isLoading) {
          return <Loader />
     }
     // console.log(users);

     return (
          <div className="col-span-4 bg-[#F1F5F9] p-14">
               <h2 className='text-black text-2xl font-bold'>All Users : {users.length}</h2>

               <table className='w-full mt-5'>
                    <thead>
                         <tr className='h-12 bg-[#E6E6E6] uppercase text-sm font-semibold text-black rounded-t-xl'>
                              <th>name</th>
                              <th>email</th>
                              <th>role</th>
                              <th>action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              users &&
                              users?.map((user) =>
                                   <tr key={user._id}
                                        className='text-center h-12 bg-white text-black'>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role ? "Admin" : "Make Admin"}</td>
                                        <td>{"Remove user"}</td>
                                   </tr>
                              )
                         }
                    </tbody>
               </table>
          </div>
     )
}

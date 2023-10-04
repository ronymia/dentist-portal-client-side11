import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loader from "../../Shared/Loader/Loader";
import toast from 'react-hot-toast';

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

     const isAdmin = true;

     const handleMakeAdmin = async (user) => {
          await axios.patch((`/users/admin/${user._id}`))
               .then(res => {
                    if (res.data.modifiedCount) {
                         refetch();
                         toast.success("make an admin")
                    }
               }).catch(err => console.log(err));
     }

     const handleDelete = async (user) => {
          await axios.delete((`/user/${user._id}`))
               .then(res => {
                    refetch();
                    if (res.data.deletedCount > 0) {
                         toast.success("delete succesfully")
                    }
               }).catch(err => console.log(err));
     }

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
                                        className='text-center h-14 bg-white text-black'>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role ? "Admin" : <button type='button'
                                             onClick={() => handleMakeAdmin(user)}
                                             className='bg-[#383838] text-white font-medium h-10 w-32 rounded-md'
                                        >Make Admin</button>}</td>
                                        <td><button type="button"
                                             onClick={() => handleDelete(user)}
                                             className='bg-[#383838] text-white font-medium h-10 w-32 rounded-md'
                                        >
                                             Remove user</button></td>
                                   </tr>
                              )
                         }
                    </tbody>
               </table>
          </div>
     )
}

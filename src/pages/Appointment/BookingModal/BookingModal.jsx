import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

export default function BookingModal({ treatment, setTreatment, selectedDate, refetch }) {
     const { user } = useContext(AuthContext);

     // treatment is just another name of appointmentOptions with name, slots, _id
     const { name: treatmentName, slots, price } = treatment;
     const date = format(selectedDate, 'PP');

     const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors } } = useForm();

     const handleBooking = (data) => {
          const { slot, phone } = data;
          console.log(data)
     }

     console.log(user);

     return (
          <>
               <input type="checkbox" id="booking-modal" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         {/* modal close  */}
                         <label htmlFor="booking-modal"
                              className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500 hover:bg-red-500 text-white">✕</label>

                         <h3 className="text-lg font-bold">{treatmentName}</h3>
                         <form
                              onSubmit={handleSubmit(handleBooking)}
                              className='grid grid-cols-1 gap-3 mt-10'>
                              <input type="text"
                                   className="input w-full input-bordered "
                                   {...register("date")}
                                   disabled value={date}
                              />
                              <select name="slot"
                                   className="select select-bordered w-full"
                                   {...register("slot")}
                              >
                                   {
                                        slots.map((slot, i) => <option
                                             value={slot}
                                             key={i}
                                        >{slot}</option>)
                                   }
                              </select>
                              <input type="text"
                                   name="name"
                                   defaultValue={user?.displayName}
                                   disabled
                                   placeholder="Your Name"
                                   className="input w-full input-bordered"
                                   {...register("name")}
                              />
                              <input type="email"
                                   name="email"
                                   defaultValue={user?.email}
                                   disabled
                                   placeholder="Email Address"
                                   className="input w-full input-bordered"
                                   {...register("email")}
                              />
                              <input type="text"
                                   name="phone"
                                   placeholder="Phone Number"
                                   className="input w-full input-bordered"
                                   {...register("phone")}
                              />
                              <br />
                              <input
                                   type="submit" value="Submit"
                                   className='btn btn-accent w-full bg-dark border-dark'
                              />
                         </form>
                    </div>
               </div>
          </>
     );
}

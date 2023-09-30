import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function BookingModal({ treatment, setTreatment, selectedDate, refetch }) {
     const { user } = useContext(AuthContext);

     // treatment is just another name of appointmentOptions with name, slots, _id
     const { name: treatmentName, slots, price } = treatment;
     const date = format(selectedDate, 'PP');

     const {
          register,
          handleSubmit,
          formState: { errors } } = useForm(
               {
                    defaultValues: {
                         name: user?.displayName,
                         email: user?.email,
                         date: date
                    }
               }
          );

     const handleBooking = async (data) => {
          const { slot, phone, date, name, email } = data;

          const booking = {
               appointmentDate: date,
               treatment: treatmentName,
               patient: name,
               slot,
               email,
               phone,
               price
          }

          await axios.post("http://localhost:5000/bookings", booking)
               .then(res => {
                    console.log(res.data)
                    if (res.data.acknowledged) {
                         toast.success(`bookings confirm on ${date}`)
                         // ui update
                         refetch();
                    }
                    else {
                         toast.error(res.data.message);
                    }
                    // close modal
                    setTreatment(null);
               })
               .catch(error => console.log(error))
     }

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
                                   disabled
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
                                   disabled
                                   placeholder="Your Name"
                                   className="input w-full input-bordered"
                                   {...register("name")}
                              />
                              <input type="email"
                                   disabled
                                   placeholder="Email Address"
                                   className="input w-full input-bordered"
                                   {...register("email")}
                              />
                              <input type="text"
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

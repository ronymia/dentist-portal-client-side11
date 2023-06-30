import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';


export default function AvailableAppointments({ selectedDate }) {
    // const [appointmentOptions,setAppointmentOptions]=useState([]);
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');

    // data fetching
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <h1>loading</h1>;
    }

    return (
        <section className='my-16 px-4 lg:px-[5%]'>
            <p className='text-center text-secondary font-medium'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                ></AppointmentOption>)}
            </div>

            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                />
            }
        </section>
    );
}

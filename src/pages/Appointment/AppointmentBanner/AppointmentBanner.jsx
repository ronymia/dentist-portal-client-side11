import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bannerBg from '../../../assets/images/bg.png';

export default function AppointmentBanner({ selectedDate, setSelectedDate }) {

    return (
        <header
            style={{
                background: `url(${bannerBg})`,
                objectFit: "cover",
            }}
            className={"my-16 h-[80vh] lg:h-[55vh] object-cover object-center bg-center flex justify-center items-center"}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <img src={chair} alt="dentist chair" className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate} />
                    </div>
                </div>
            </div>
        </header>
    );
}

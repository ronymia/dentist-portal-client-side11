import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div
            style={{
                boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)"
            }}
            className="card rounded-[18px]"
        >
            <div className="card-body text-center text-black text-sm">
                <h2 className="text-xl text-secondary font-semibold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white rounded-lg bg-gradient-to-r from-primary to-secondary outline-none border-0"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
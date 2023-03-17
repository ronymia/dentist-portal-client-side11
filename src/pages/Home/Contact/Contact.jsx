import React from 'react';
import { useForm } from 'react-hook-form';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className='mb-24 flex flex-col justify-center items-center object-cover h-[70vh]'>
            <div className="flex flex-col w-1/2 justify-center items-center p-5">
                <div className="text-center w-full">
                    <h4 className='text-secondary font-medium text-lg'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay Connect With Us</h2>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex gap-y-5 flex-col justify-center items-center w-full pt-5'>
                    <input type="text"
                        className="input w-[360px] md:w-full h-12 max-w-md outline-none border-0 rounded-lg bg-white focus:outline-none px-5 py-4 text-dark capitalize"
                        placeholder="Email Address"
                        {...register("email", { required: true })}
                    />
                    <input type="text"
                        className="input w-[360px] md:w-full h-12 max-w-md outline-none border-0 rounded-lg bg-white focus:outline-none px-5 py-4 text-dark capitalize"
                        placeholder="Subject"
                        {...register("subject", { required: true })}
                    />
                    <textarea
                        className="resize-none textarea textarea-bordered w-[360px] md:w-full max-w-md h-[136px] outline-none border-0 rounded-lg bg-white focus:outline-none px-5 py-4 text-dark capitalize"
                        placeholder="Your Message"
                        {...register("message", { required: true })}
                    ></textarea>
                    <input type="submit"
                        className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary border-0 w-[120px] h-[48px]" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
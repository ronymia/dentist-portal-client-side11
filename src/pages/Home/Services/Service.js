import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div
            style={{
                boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)"
            }}
            className="flex flex-col items-center justify-center rounded-[18px] py-9 px-10">
            <figure className="">
                <img src={img} alt="Services"
                    className="rounded-xl"
                />
            </figure>
            <div className="flex flex-col items-center justify-center gap-2 text-center mt-[34px]">
                <h2 className="text-2xl text-dark font-medium">{name}</h2>
                <p className="text-[15px] text-black">{description}</p>
            </div>
        </div>
    );
};

export default Service;
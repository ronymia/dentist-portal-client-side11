import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`flex flex-row items-center md:justify-center gap-5 text-white pl-6 md:pl-6 pr-5 py-8 shadow-xl ${bgClass} rounded-[14px]`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
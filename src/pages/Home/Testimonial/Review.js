import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div
            style={{
                boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)"
            }}
            className="shadow-xl rounded-[18px] p-7"
        >
            <p className="text-base text-black">{userReview}</p>
            <div className="flex items-center mt-6">
                <div className="avatar mr-6">
                    <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h5 className="text-2xl text-dark font-semibold">{name}</h5>
                    <p className="text-black">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
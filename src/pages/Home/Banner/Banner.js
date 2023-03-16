import React from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';

export default function Banner() {
    return (
        <div style={{
            background: `url(${bannerBg})`,
            objectFit: "cover",
        }} className="hero h-[700px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-dark">Your New Smile Starts Here</h1>
                    <p className="py-6 text-dark text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button type='button'
                        style={{
                            // backgroundImage: "linear-gradient(90deg, #19D3AE - 22.5 %, #0FCFEC 120.83 %)"
                        }}
                        className="btn bg-gradient-to-r from-primary to-secondary text-white rounded-lg border-0"
                    >
                        Get Started</button>
                </div>
            </div>
        </div>
    );
}

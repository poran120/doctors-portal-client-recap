import React from 'react';
import bannerChair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse sm:text-center">
    <img src={bannerChair} className="max-w-sm rounded-lg shadow-2xl fluid" />
    <div>
      <h1 className="text-5xl font-bold text-black">Your New Smile Starts Here!</h1>
      <p className="py-6 text-black">One-stop solution for all your health, automobile, travel & insurance needs. Install Now. Here by HDFC ERGO caters to your Healthcare, Vehicle and Insurance Needs. Install Now. 24/7 Customer Support. Service Driven Operation. Customer First Approach.</p>
      <button className="btn accent-button text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
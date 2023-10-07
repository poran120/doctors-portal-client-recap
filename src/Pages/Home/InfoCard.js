import React from "react";
import clockImg from "../../assets/icons/clock.svg";
import locationImg from "../../assets/icons/marker.svg";
import phoneImg from "../../assets/icons/phone.svg";

const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="card lg:card-side bg-gradient-to-r from-sky-500 to-indigo-500 p-2 text-white shadow-xl">
        <img className="w-[60px]" src={clockImg} alt="" />
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card lg:card-side bg-gradient-to-r from-sky-500 to-indigo-500 p-2 text-white shadow-xl">
        <img className="w-[60px]" src={locationImg} alt="" />
        <div className="card-body">
          <h2 className="card-title">Visit Our Location</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card lg:card-side bg-gradient-to-r from-sky-500 to-indigo-500 p-2 text-white shadow-xl">
        <img className="w-[60px]" src={phoneImg} alt="" />
        <div className="card-body">
          <h2 className="card-title">Contact Us Now</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

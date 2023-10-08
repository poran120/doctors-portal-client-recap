import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {

    const [date, setdate] = useState(new Date());

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-black">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setdate}
          />
        </div>
      </div>
      <p>You have selected: {format(date, 'PP')}</p>
    </div>
  );
};

export default AppointmentBanner;

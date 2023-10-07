import React from "react";
import doctorOne from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section 
    style={{
        background: `url(${appointment})`
    }}
    className="flex justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctorOne} alt=""></img>
      </div>
      <div className="flex-1 text-white">
        <h3 className="font-bold text-xl mb-1">Appointment</h3>
        <h2 className="mb-1 text-2xl">Make an Appointment Today</h2>
        <p className="mb-1">
        The clean design offered by the template can help the visitors or users of this template find the services they need easily. This template even comes with an appointment form so any patient can make an appointment with doctors or other health workers by registering online. And the modern look of this template gives a fresh and professional appearance that can convince the audience more. It also has a simple and friendly user interface that makes it easy to use by any hospital admin.
        </p>
        <div className="card-actions justify-start">
      <button className="btn btn-primary">Get Started</button>
    </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

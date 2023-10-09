import React from 'react';

const AppointmentServices = ({service, setTreatment}) => {
    const {name, slots} = service
    return (
        <div className="card bg-slate-100 text-black text-center p-0">
        <div className="card-body">
          <h2 className="">{name}</h2>
          <p>
            {
                slots.length  ? <span>{slots[0]}</span> : <span>No Slots Available</span>
            }
          </p>
          <p>If a dog chews shoes whose shoes does</p>
          <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        </div>
        <div className="card-actions justify-center pb-5">
      <label 
      htmlFor="booking-modal"
      onClick={() => setTreatment(service)} 
      className="btn text-white" disabled={slots.length === 0}
      >Book Available</label>
      {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}
    </div>
      </div>
    );
};

export default AppointmentServices;
import React from "react";
import { format } from 'date-fns';

const BookingModal = ({ treatment, date}) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal bg-slate-100">
        <div className="modal-box">
          <h3 className="font-bold text-center text-white">
            Congratulations You're Booking For: {name}!
          </h3>
          <form>
            <input
              type="text"
              value={format(date, 'PP')}
              className="input input-bordered input-info w-full max-w-xs text-white"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs text-white"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs text-white"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs text-white"
            />
            <input
              type="submit"
            //   placeholder="Type here"
              className="btn input-bordered input-info w-full max-w-xs text-white"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn text-white">
              Exit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

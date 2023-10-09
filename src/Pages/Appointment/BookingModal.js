// import React from "react";
// import { format } from "date-fns";

// const BookingModal = ({ treatment, date }) => {
//   const { name, slots } = treatment;

// const handleBooking = (event) =>{
// event.preventDefault()
// const slot = event.target.slot.value;
// console.log(slot);
// }

//   return (
//     <div>
//       <input type="checkbox" id="booking-modal" className="modal-toggle" />
//       <div className="modal bg-slate-100">
//         <div className="modal-box">
//           <h3 className="font-bold text-center text-white">
//             Congratulations You're Booking For: {name}!
//           </h3>
//           <form onSubmit={handleBooking}>
//             <input
//               disabled
//               type="text"
//               value={format(date, "PP")}
//               className="input input-bordered input-info w-full max-w-xs text-white mb-2"
//             />
//             <select className="select select-bordered w-full max-w-xs text-white">
//              {
//                 slots.map((slot) => <option value={slot}>{slot}</option>)
//              }
//             </select>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="input input-bordered input-info w-full max-w-xs text-white mb-2"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="input input-bordered input-info w-full max-w-xs text-white mb-2"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               className="input input-bordered input-info w-full max-w-xs text-white mb-2"
//             />
//             <input
//               type="submit"
//               //   placeholder="Type here"
//               className="btn input-bordered input-info w-full max-w-xs text-white"
//             />
//           </form>
//           <div className="modal-action">
//             <label htmlFor="booking-modal" className="btn text-white">
//               Exit
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;



import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment , setTreatment}) => {
    const {_id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(slot);
        console.log(_id, name, slot);
        
        // to close the modal
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
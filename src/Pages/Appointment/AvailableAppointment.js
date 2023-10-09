import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentServices from './AppointmentServices';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {

const [services, setServices] = useState([])
const [treatment, setTreatment] = useState(undefined);

useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
} ,[])

// console.log(services);
    return (
        <div>
            <p className='font-bold text-xl text-center text-black'>Available Appointment on {format(date, 'PP')}</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
        services.map((service) => <AppointmentServices
        key={service._id}
        service= {service}
        setTreatment = {setTreatment}
        ></AppointmentServices>)
    }
    {treatment && <BookingModal date={date} treatment={treatment} setTreatment = {setTreatment}></BookingModal>}
</div>
        </div>
    );
};

export default AvailableAppointment;
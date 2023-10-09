import React, { useState } from 'react';
import Footer from '../Home/Footer'
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setdate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setdate}></AppointmentBanner>
            <AvailableAppointment></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
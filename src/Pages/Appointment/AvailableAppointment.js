import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <p>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;
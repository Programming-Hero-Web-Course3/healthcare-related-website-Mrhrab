import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const {appointmentId} = useParams();
    return (
        <div id="appointment">
            <h1>book:{appointmentId}</h1>
        </div>
    );
};

export default Appointment;
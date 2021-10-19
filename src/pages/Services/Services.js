import React, { useEffect, useState } from 'react';
import Service from './Service/Service';



const Services = () => {
    const [service, setService] =useState([])
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div id="services"> 
            {
                service.map( serve=> <Service
                key={serve.key}
                serve={serve}
                ></Service>)
            }
        </div>
    );
};

export default Services;
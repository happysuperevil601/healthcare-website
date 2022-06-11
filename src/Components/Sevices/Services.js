import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./serviceDetail.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='my-5 '>
            <div className=' mx-auto  px-5 font-md text-3xl text-white  bg-green-200  py-2 '>
                <h2>Our Services</h2>
            </div>
            <div className='flex justify-around items-center'>

                <div className='grid  grid-rows-2 lg:grid-flow-col gap-4 justify-items-center ' >
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctor] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div className='my-5 '>
            <div className='  px-5 font-md text-3xl text-white  bg-green-200  py-2 '>
                <h2>Our Doctors</h2>
            </div>
            <div className='flex  lg:flex-row flex-col justify-around items-center'>

                <div className='grid  lg:grid-cols-3 grid-cols-1 lg:gap-4 space-y-6 justify-items-center ' >
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Doctors;
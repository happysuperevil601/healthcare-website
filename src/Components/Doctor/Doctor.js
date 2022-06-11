import React from 'react';

const Doctor = (props) => {
    const { name, picture, specialities, charge, practicedays } = props.doctor;
    return (
        <div className='mx-auto my-5 ps-5 '>
            <div className=''>
                <div style={{ height: 500, width: 300 }} className=' rounded-xl flex flex-col justify-between items-center border shadow-lg ' >
                    <div>
                        <img className='h-60 w-80 rounded-lg' variant="top" src={picture} alt='' />
                    </div>
                    <div className='px-1'>
                        <h1 className='text-green-600 text-2xl py-3font-bold'> {name}</h1>
                        <p><span className='text-green-600 text-md'>Charge:</span> {charge} BDT</p>
                        <p><span className='text-green-600 text-md'>Speciality:</span> {specialities} </p>
                        <p><span className='text-green-600 text-md'>Practice Days:</span> {practicedays}</p>
                    </div>
                    <div className="box-content w-1/4 border-4 rounded-full bg-green-600 text-white mb-2 px-2">
                        <a href='/services'>Details <i class="fas fa-info-circle"></i>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Doctor;
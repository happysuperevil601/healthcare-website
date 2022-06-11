import React from 'react';

const Service = (props) => {
    const { name, picture, about, cost, consultant } = props.service;
    return (
        <div className='mx-auto my-5 ps-5  '>
            <div className=''>
                <div style={{ height: 550, width: 310 }} className='flex flex-col justify-between items-center border shadow-lg' >
                    <div>
                        <img className='transform hover:scale-110 h-56 w-80' variant="top" src={picture} alt='' />
                    </div>
                    <div className='px-1'>
                        <h1 className='text-green-600 text-2xl py-3font-bold'> {name}</h1>
                        <p><span className='text-green-600 text-md'>Cost:</span> {cost} BDT</p>
                        <p><span className='text-green-600 text-md'>Consultant:</span> {consultant} BDT</p>
                        <p>  {about}  </p>
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

export default Service;
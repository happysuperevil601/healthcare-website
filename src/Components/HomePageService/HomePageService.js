import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePageService = (props) => {
    const { id, name, picture, about } = props.service;
    return (
        <div className='mx-auto my-5 lg:ps-5'>
            <div className='grid grid-cols-3 gap-2 mx-auto'>
                <div style={{ height: 400, width: 400 }} className='flex flex-col  items-center border shadow-lg' >
                    <div className='transform hover:scale-75'><img className='lg:h-72 w-auto' variant="top" src={picture} alt='' /></div>
                    <div className='px-1'>
                        <h1 className='text-green-600 text-2xl py-3font-bold'> {name}</h1>
                        <p className='px-2 truncate w-96'>  {about}  </p>
                    </div>
                    <div className="box-content w-1/4 border-4 rounded-full bg-green-600 text-white mb-2 px-2">
                        <NavLink to={`/detail/${id}`} >Details <i class="fas fa-info-circle"></i>
                        </NavLink >
                    </div>
                </div>

            </div>

        </div >
    );
};


export default HomePageService;
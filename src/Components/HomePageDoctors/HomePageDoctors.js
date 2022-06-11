import React from 'react';

const HomePageDoctors = () => {
    return (
        <div className='mx-auto my-10'>
            <div className=' mx-auto  px-5 font-md text-3xl text-white  bg-green-200  py-2 my-5 '>
                <h2>Our Doctors</h2>
            </div>
            <div className='grid  grid-rows-1 lg:grid-cols-3  lg:gap-4 justify-items-center space-y-6 ' >
                <div className='border-2 px-6 py-4 shadow-lg rounded-lg'><img className='h-64 w-64 rounded-full' src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Dr. Abdul Hannan</h3>
                    <p>Speciality- Haematology</p></div>

                <div className='border-2 px-6 py-4 shadow-lg rounded-lg'><img className='h-64 w-64 rounded-full' src="https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnMlMjBwcmFjdGljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Dr. Saima Mazhar</h3>
                    <p>Speciality- Gynaecology</p></div>
                <div className='border-2 px-6 py-4 shadow-lg rounded-lg'>
                    <img className='h-64 w-64 rounded-full' src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Dr. Kazi Maruf</h3>
                    <p>Speciality- Neuro Surgery</p>
                </div>
            </div>

        </div>
    );
};

export default HomePageDoctors;
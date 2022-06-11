import React from 'react';

const HomePageAbout = () => {
    return (
        <div>
            <h1 className='text-3xl text-green-600 my-3'>Green Life Diagnostic Centre </h1>
            <div className="lg:flex">
                <div className='h-60 m-5 p-5'>
                    <img className='w-full' src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='m-5 p-5 lg:w-1/2 lg:text-justify'>
                    <h1 className='font-md text-3xl text-white  bg-green-200 flex justify-start py-2 px-4 mb-3' >Who We Are</h1>
                    <p><span className='text-green-600 text-xl font-lg'>Green Life </span> Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Green Life Diagnostic Centre Ltd. is one of the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
                    <h3 className='font-lg lg:flex self-start text-2xl text-green-600  py-1 px-1'> Our Office</h3>
                    <p className='font-lg flex self-start my-2 '><span className='text-green-600'><i class="fas fa-map-marker-alt mr-2"></i></span><strong className='mr-2'> Address:</strong>House-88, Road-Gausul Azam, Sector-13,Uttara, Dhaka, Bangladesh</p>
                    <p className='flex self-start my-2 '><span className='text-green-600'><i class="fas fa-phone mr-2"></i></span> <strong className='mr-2'> Cell:</strong> 02-988769, 01715888904 </p>
                    <p className='flex self-start'> <span className='text-xl font-bold '>Business Hours:</span> <span className='px-2 py-1'>7:00 AM - 11:00 PM (Everyday)</span></p>
                </div>
            </div>
        </div>
    );
};

export default HomePageAbout;
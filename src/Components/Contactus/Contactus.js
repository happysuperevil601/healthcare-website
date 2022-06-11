import React from 'react';

const Contactus = () => {
    return (
        <div>
            <div className=' mx-auto  px-5 font-md text-3xl text-white  bg-green-200 flex justify-start py-2 '>
                <h2>Contact Us</h2>
            </div>
            <div className='flex my-3 container mx-auto'>
                <div className="w-1/2">
                    <h3 className='font-lg text-2xl flex self-start ml-6 py-1'><strong className='text-green-600 pr-1'>Contact </strong> Us</h3>
                    <div>
                        <div className="flex ">

                            <div >
                                <p className='flex pl-6 self-start'>Your name*</p>
                                <input className='border-2 px-3 mx-5 mb-5 rounded' type="text" /> </div>
                            <div>
                                <p className='flex pl-6 self-start'>Your email address*</p>
                                <input className='border-2 px-3 mx-5 ml-1 mb-5 rounded' type="email" name="" id="" />
                            </div>
                        </div>
                        <div className="w-full">
                            <p className='flex pl-6 self-start'>Your message*</p>
                            <textarea className='border-2 px-3 mx-5 mb-5 rounded w-full' name="" id="" rows="7"></textarea>
                        </div>
                        <div className='border bg-green-600 text-white py-2 w-32 mx-5 mb-5 rounded-lg'>Submit</div>
                    </div>
                </div>
                <div className='w-1/2 ml-10'>
                    <div className=' text-justify  '>
                        <h3 className='font-lg flex self-start text-2xl flex self-start  py-1'>Get in touch</h3>
                        <p className=' '> <span className='text-green-600 font-bold '>Green Life</span> started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Popular became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.</p>

                    </div>
                    <div className='mt-5'>
                        <hr />
                        <h3 className='font-lg flex self-start text-2xl   py-1'> Our Office</h3>
                        <p className='font-lg flex self-start my-2 '><span className='text-green-600'><i class="fas fa-map-marker-alt mr-2"></i></span><strong className='mr-2'> Address:</strong>House-88, Road-Gausul Azam, Sector-13,Uttara, Dhaka, Bangladesh</p>
                        <p className='flex self-start my-2 '><span className='text-green-600'><i class="fas fa-phone mr-2"></i></span> <strong className='mr-2'> Cell:</strong> 02-988769, 01715888904 </p>
                        <p className='flex self-start my-2 '><span className='text-green-600'><i class="fas fa-envelope mr-2"></i></span> <strong className='mr-2'> Email:</strong> greenlife24@gmail.com </p>
                        <br />
                        <p className='flex self-start'> <span className='text-xl font-bold '>Business Hours:</span> <span className='px-2 py-1'>7:00 AM - 11:00 PM (Everyday)</span></p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Contactus;
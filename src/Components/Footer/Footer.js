import React from 'react';

const Footer = () => {
    return (
        <div className='w-auto py-3  text-white  bg-black bg-opacity-80'>
            <div className="flex justify-center items-center">
                <div className='text-start row ms-3 mt-5'>
                    <p><strong>Adress: </strong> House-88, Road-Gausul Azam, Sector-13,Uttara, Dhaka, Bangladesh</p>
                    <p className="">Cell: 02-988769, 01715888904 or <a href='/greenlife24@gmail.com'> Email Us</a></p>

                </div>

            </div>
            <div className='my-5'>
                <h5 className='text-danger '>Follow us on:</h5>

                <i class="fab fa-youtube mx-3"> </i>
                <i class="fab fa-facebook mx-3 "> </i>
                <i class="fab fa-instagram mx-3 "> </i>
                <i class="fab fa-tiktok mx-3 "> </i>

            </div>
            <div className='px-2'>
                <div className='flex justify-center items-center'>
                    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Thumbnail-scaled.jpg" className="h-12 w-12 rounded-full" alt="" /> <p className='text-lg'> <span className="text-green-600 text-xl"> Green Life</span> Diagnostic Centre &#169;.All rights reserved.</p></div>
            </div>

        </div >
    );
};

export default Footer;
import React from 'react';

const Notfound = () => {
    return (
        <div className='flex justify-center items-center w-full mx-auto'>
            <div><h1 className='text-5xl text-green-300 mt-5'>OOPS! </h1>
                <img src="https://cdn.dribbble.com/users/329098/screenshots/6563414/404-ill.jpg" alt="" />
                <a className='text-3xl text-green-800' href="/home"><i class="fas fa-arrow-circle-left"></i> Go to Homepage</a>
            </div>

        </div>
    );
};

export default Notfound;
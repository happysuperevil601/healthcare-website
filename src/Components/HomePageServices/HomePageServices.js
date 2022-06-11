import React, { useEffect, useState } from 'react';
import HomePageService from '../HomePageService/HomePageService';

const HomePageServices = () => {
    const [homePageServices, setHomepageService] = useState([]);
    useEffect(() => {
        fetch('./serviceDetail.json')
            .then(res => res.json())
            .then(data => setHomepageService(data))
    }, [])
    return (
        <div className='my-5 '>
            <div className=' mx-auto  lg:px-5 font-md text-3xl text-white  bg-green-200  py-2 '>
                <h2>Our Services</h2>
            </div>
            <div className='lg:grid  lg:grid-rows-2 grid-row-1 grid-flow-col lg:gap-4 lg:mx-10' >
                {
                    homePageServices.map(service => <HomePageService key={service.id} service={service}></HomePageService>)
                }

            </div>

        </div>
    );
};


export default HomePageServices;
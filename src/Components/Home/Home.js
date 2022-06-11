import React from 'react';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageDoctors from '../HomePageDoctors/HomePageDoctors';
import HomePageServices from '../HomePageServices/HomePageServices';


const Home = () => {
    return (
        <div>
            <div className='flex justify-center h-3/5 '>
                <img src="https://images.unsplash.com/photo-1582719366768-de4481b828ce" alt="" />
            </div>
            <div>
                <div>
                    <HomePageServices></HomePageServices>
                </div>
                <div>
                    <HomePageDoctors></HomePageDoctors>
                </div>
                <div>
                    <HomePageAbout></HomePageAbout>
                </div>
            </div>
        </div>
    );
}

export default Home;
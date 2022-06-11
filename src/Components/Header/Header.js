import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        document.getElementById('header-toggle').onclick = function () {
            console.log('clicked')
            document.getElementById('header-content').classList.toggle('hidden')
        }

    });
    return (

        <div className=' w-auto py-3 font-bold text-white bg-black bg-opacity-80'>
            <ul id='header-content' className="hidden lg:flex lg:justify-around ">
                <div><img className="h-12 w-12 rounded-full" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Thumbnail-scaled.jpg" alt="" /></div>
                <div>
                    <h2 className='text-lg'><span className="text-green-600 text-4xl">Green Life</span> Diagnostic Centre</h2>
                </div>
                <li className="py-3"> <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/home'>Home</NavLink> </li>
                <li className="py-3"><NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/about'>About Us</NavLink></li>
                <li className="py-3"><NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/services'>Services</NavLink></li>
                <li className="py-3"><NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/doctor'>Find a doctor</NavLink></li>
                <li className="py-3"><NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/gallery'>Gallery</NavLink></li>
                <li className="py-3"><NavLink activeStyle={{
                    fontWeight: "bold",
                    color: 'green'
                }} to='/contacts'>Contact</NavLink></li>
                <li className="py-3 ">
                    <input type="text" placeholder="Search" id="search" className='text-black border border-green-200 rounded px-1 ' />
                    <i class="fas fa-search relative -left-6 text-green-600" ></i>
                </li>

            </ul>
            <div id='header-toggle' className="lg:hidden flex justify-end px-4 "> <i class="fas fa-bars"></i></div>
        </div>
    );
};

export default Header;
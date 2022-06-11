import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';


const Topsection = () => {
    const { user, logOut } = useFirebase();
    return (

        <div className=' mx-auto py-1 px-5 font-medium text-white bg-green-600 flex justify-between'>
            <div>
                <i class="fab fa-facebook-f px-2"></i>
                <i class="fab fa-chrome px-2"></i>
                <i class="fab fa-wikipedia-w px-2"></i>
            </div>
            <div>
                {
                    user.email && <span className='px-3'>{user.displayName}</span>
                }

                {
                    user.email ?
                        <button onClick={logOut}>Logout</button>
                        :
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: 'black'
                        }} to='/login'>Login/Sign In</NavLink>
                }
            </div>
        </div >
    );
};

export default Topsection;
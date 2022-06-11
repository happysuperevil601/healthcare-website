import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL);
            })
    }
    return (
        <div >
            <h2 className='text-3xl p-3 font-bold'>Login</h2>
            <form onSubmit='' className='justify-between'>
                <div>
                    <input className='border-2 mx-2 rounded-lg px-2' type="email" name="" placeholder='Your email' id="" /></div>
                <div><input className='border-2 mx-2 my-1 rounded-lg px-2' type="password" name="" placeholder='Your password' id="" /></div>

                <button onClick={signInUsingGoogle} className='border bg-green-600 text-white mx-2 rounded-lg px-10 m-1 my-2'>Login </button>
            </form>
            <p>new to Green Life? <a className='text-green-600 text-md' href="/register"> Create Account</a></p>
            <div>------------or--------------</div>
            <button onClick={handleGoogleLogin} className='border bg-green-600 text-white mx-2 rounded-lg px-10 m-1 my-2'>Google SignIn </button>
        </div>
    );
};

export default Login;
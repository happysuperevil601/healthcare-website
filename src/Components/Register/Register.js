
import userEvent from '@testing-library/user-event';
import initializeAuthentication from '../../Firebase/firebase.initialize'
import useFirebase from '../hooks/useFirebase';

initializeAuthentication();

const Register = () => {

    const { user, handleRegistration, setPassword, setEmail, error } = useFirebase();
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>

            {user.email ? <div> <h1 className='text-6xl text-green-600 p-8 h-80'> Registration Successful!</h1></div> :
                <div>
                    <h2 className='text-3xl p-5 font-bold'>Register: Create Account</h2>
                    <form onSubmit={handleRegistration} className='justify-between'>
                        <div>
                            <input onBlur={handleEmailChange} className='border-2 mx-2 rounded-lg px-2' type="email" name="" placeholder='Your email' id="" required />
                        </div>
                        <div>
                            <input onChange={handlePasswordChange} className='border-2 mx-2 my-1 rounded-lg px-2' type="password" name="" placeholder='Your password' id="" required />
                        </div>
                        <div>
                            <input className='border-2 mx-2 my-1 rounded-lg px-2' type="password" name="" placeholder='Re-enter password' id="" required />
                        </div>
                        <p>{error}</p>
                        <button type="submit" className='border bg-green-600 text-white mx-2 rounded-lg px-10 m-1 my-2'>Register</button>
                    </form>
                    <p className='py-3'>ALready have an account? <a className='text-green-600 text-md' href="/login"> Login</a></p>


                </div>}

        </div>




    );
};

export default Register;
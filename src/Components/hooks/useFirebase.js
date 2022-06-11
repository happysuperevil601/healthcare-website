import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleSignInProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleSignInProvider)

    }
    const handleRegistration = e => {
        console.log(email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {

                })
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {

                })
        }

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }

        });
        return () => unsubscribed;
    }, [auth])


    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        setPassword,
        setEmail,
        setLogin,
        error
    }
}
export default useFirebase;
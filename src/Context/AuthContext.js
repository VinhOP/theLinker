import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState('')
    console.log(currentUser);

    // const authentication = (email,password) => onAuthStateChanged(auth, async (user) => {
    //     console.log(user);
    //     if(user) {
    //         try {                
    //             const res = await signInWithEmailAndPassword(auth, email, password)
    //             setCurrentUser(res.user)
    //         } catch (err) {
    //             console.log(err);
    //             console.log('wrong email or pw');
    //         }
    //     } else {         
    //         try {                
    //             const res = await createUserWithEmailAndPassword(auth, email, password)
    //             setCurrentUser(res.user)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // })

    const signIn = async (email,password) => {
        try {                
            const res = await signInWithEmailAndPassword(auth, email, password)
            setCurrentUser(res.user)
            setError('')
        } catch (err) {
            console.log(err);
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('invalid email')
                    break;
                case 'auth/internal-error':
                    setError('please enter password')
                    break;
                case 'auth/user-not-found':
                    setError('user does not exist')
                    break;
                case 'auth/wrong-password':
                    setError('wrong email or password')
                    break;
                default:
                    console.log(err.message);
                    break;
            }
        }
    }

    const signUp = async (email,password) => {
        try {                
            const res = await createUserWithEmailAndPassword(auth, email, password)
            setCurrentUser(res.user)
        } catch (err) {
            console.log(err);
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setError('account already exist')
                    console.log('account already exist');
                    break;
                default:
                    console.log(err.message);
                    break;
            }
        }
    }


    const signout = () => {
        setCurrentUser()
    }

    const value = {
        signIn,
        signUp,
        signout,
        error,
        setError,
        currentUser,
    }

    return (
        <AuthContext.Provider value={value} key={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';


export const MyAuthContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const emailCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return (() => {
            unSubscribe();
        })
    })

    const authProperty = {
        user,
        loading,
        emailCreateUser,
        emailLogin,
        googleLogin,
        logOut,
    }

    return (
        <MyAuthContext.Provider value={authProperty}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)     
            if(currentUser){
                const userInfo = {email: currentUser?.email};
                axios.post('https://bistro-boss-restaurant-server-peach-beta.vercel.app/jwt', userInfo)
                .then(res => {
                    // console.log(res.data)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignin,
        logoutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
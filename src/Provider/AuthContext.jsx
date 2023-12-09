/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Config/Firebase.config'
import useAxios from "../Hooks/useAxios";

export const AuthProvider = createContext([])

const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const axios = useAxios()
    const provider = new GoogleAuthProvider

    const register = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const google = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    const signin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscrive = () => {
            onAuthStateChanged(auth,currentUser=>{
                setLoading(false)
                setUser(currentUser)
            })
        }
        return ()=> unSubscrive()
    },[axios])

    console.log(user);

    const userInfo = {
        user,
        loading,
        register,
        signin,
        logOut,
        google
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
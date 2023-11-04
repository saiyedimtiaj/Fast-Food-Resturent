/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Config/Firebase.config'

export const AuthProvider = createContext([])

const AuthContext = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    const register = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const subScribe = () => {
            onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser)
            })
        }
        return ()=>{
            subScribe()
        }
    },[])

    console.log(user);

    const userInfo = {
        user,
        loading,
        register,
        signin,
        logOut
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
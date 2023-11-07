/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Config/Firebase.config'
import useAxios from "../Hooks/useAxios";

export const AuthProvider = createContext([])

const AuthContext = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true);
    const axios = useAxios()
    const googleProvider = new GoogleAuthProvider

    const register = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
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
                setLoading(false)
                const email = currentUser?.email
                if(currentUser?.email){
                    axios.post('/jwt',{email},{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err.message);
                })
                }
                else{
                    axios.post('/logout',{withCredentials:true})
                    .then(res=>{
                        console.log(res.data);
                    })
                    .catch(err=>{
                        console.log(err.message);
                    })
                }
            })
        }
        return ()=>{
            subScribe()
        }
    },[axios])

    console.log(user);

    const userInfo = {
        user,
        loading,
        register,
        signin,
        logOut,
        signinWithGoogle
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
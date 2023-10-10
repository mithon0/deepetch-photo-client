import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [userInfo,setUserInfo]=useState(null);
    const [loading, setLoading] = useState(false);
    const [OrderData, setOrderData] = useState([]);
    const [paymentData, setPaymentData] = useState([]);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:""
        });

    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);})
            return () => {
                return unsubscribe();
            }
    },[])
    useEffect(()=>{
        
        fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserInfo(data))
    },[userInfo]);

    
    useEffect(()=>{
      
            fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/data/${user?.email}`)
                  .then(res=>res.json())
                  .then(data=>setOrderData(data))
                  
    },[user])

    // payment history data 
    useEffect(()=>{
        
        fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/payments`)
                  .then(res=>res.json())
                  .then(data=>setPaymentData(data))
    },[paymentData])

    const authInfo = {
        user,
        signUp,
        updateUserProfile,
        logIn,
        logOut,
        userInfo,
        OrderData,
        paymentData,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
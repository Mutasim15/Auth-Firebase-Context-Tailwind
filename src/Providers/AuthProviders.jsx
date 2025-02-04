import React, { createContext, useState } from 'react';
export const AuthContext =createContext(null)
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth=getAuth(app)


const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null)
    // const userName ={displayName:'Sagor Nodi'}

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const authInfo ={
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
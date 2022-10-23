
import React, { createContext, useEffect, useState } from 'react';
import {getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const[ user,setUser] = useState(null);
  //refress korle j page login page e ase tar jonno ei loading function
  const [loading, setLoading] = useState(true);
 
   //GOOGLE SINGN IN
   const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
   }
   //crete user

   const createUser = (email,password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email,password);
   }

   //SIGNIN
   const signIn = (email,password) => {
    setLoading(true);
     return signInWithEmailAndPassword(auth, email,password)
   }

//UPDATE PROFILE
const updateUserProfile = (profile) => {
  return updateProfile(auth.currentUser, profile)
}

//EMAIL VARIFICATION
const varifyEmail = () => {
  return sendEmailVerification(auth.currentUser)
}

   //logout
   const logOut = () => {
    setLoading(true);
    return signOut(auth);
   }

   //ovserver
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('User state change', currentUser)
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      }
   },[])

   const authInfo = {
    user, 
    loading, 
    setLoading,
    providerLogin, 
    createUser, 
    signIn, 
    updateUserProfile,
    varifyEmail,
    logOut 
  };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
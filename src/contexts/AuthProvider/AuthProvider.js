
import React, { createContext, useEffect, useState } from 'react';
import {getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const[ user,setUser] = useState(null);
 
   //GOOGLE SINGN IN
   const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
   }
   //crete user

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }


   //SIGNIN
   const signIn = (email, password) =>{
     return signInWithEmailAndPassword(auth, email, password)
   }

   //logout

   const logOut = () => {
    return signOut(auth);
   }

   //ovserver
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('User state change', currentUser)
        setUser(currentUser)
      });
      return () => {
        unsubscribe();
      }
   },[])

   const authInfo = {user, providerLogin, logOut, createUser, signIn };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
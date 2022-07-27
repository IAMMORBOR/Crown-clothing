import { createContext, useState } from "react";

export const Usercontext =createContext ({
    currentUser: null,
    setCurrentUser : ()=>null,
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser]=useState (null)
   const value = {currentUser, setCurrentUser};
     return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>;
}
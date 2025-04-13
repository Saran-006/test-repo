import {createContext,useContext,useState} from 'react'

const states=createContext();

export const Stateprovider=({children})=>{
    
    const [Ip,setIp]=useState("127.0.0.1");

    const [Port,setPort]=useState("5000");

    const [loginstate,setloginstate]=useState(false);

return(
    <states.Provider value={{login:{loginstate,setloginstate},addr:{Ip,setIp,Port,setPort}}}>
       
        {children}

    </states.Provider>)
}

export const UseStates=()=>{return(useContext(states))}
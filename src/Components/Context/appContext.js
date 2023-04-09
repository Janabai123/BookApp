import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



const AppContext=createContext(null)

export const useAppContext=()=>{
    const context=useContext(AppContext)
    if(context===undefined){
        throw new Error('AppContext must be within appContextProvider')
    }
    return context;
}


const AppContextProvider=({children})=>{
    const[favorites,setFavorites]=useState([]);

    const addToFavorites=(item)=>{
        const oldFavorites=[...favorites];

        const newFavorites=oldFavorites.concat(item)
        setFavorites(newFavorites);

    }


    const removeFromFavorites=(id)=>{
const oldFavorites=[...favorites]

const newFavorites=oldFavorites.filter((item)=>item.id !== id);
setFavorites(newFavorites);
    }


    return(
        <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
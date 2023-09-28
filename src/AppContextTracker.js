import React, { createContext, useState } from "react"

export const AppContext = createContext();


function AppContextTracker({children}){

    const [currCartItems , setcurrCartItems] = useState(0);


    const value = {
        currCartItems,
        setcurrCartItems
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};


export default AppContextTracker;

import React, { createContext, useState } from "react"

export const AppContext = createContext();


function AppContextTracker({children}){

    const [currCartItemsNumber , setcurrCartItemsNumber] = useState(0);
    const [cartItems , addItemsToCart] = useState([]);
    const [currCartCost , setcurrCartCost] = useState(0);

    const value = {
        currCartItemsNumber,
        setcurrCartItemsNumber,
        cartItems,
        addItemsToCart,
        setcurrCartCost,
        currCartCost
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};


export default AppContextTracker;

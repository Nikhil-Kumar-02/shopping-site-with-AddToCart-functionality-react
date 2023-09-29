import React, { createContext, useState } from "react"

export const AppContext = createContext();


function AppContextTracker({children}){

    let itemAddedToCart = [];
    for(let i=0;i<21;i++){
        itemAddedToCart.push(0);
    }
    const [cartItemsCnt , setcartItemsCnt] = useState(0);
    const [cartItems , setItemsToCart] = useState(itemAddedToCart);
    const [currCartCost , setcurrCartCost] = useState(0);

    const value = {
        cartItemsCnt,
        setcartItemsCnt,
        cartItems,
        setItemsToCart,
        setcurrCartCost,
        currCartCost
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};


export default AppContextTracker;

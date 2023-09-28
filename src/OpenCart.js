import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker";
import CartEachItem from "./CartEachItem";

const OpenCart = () => {
  const {cartItems ,currCartCost , currCartItemsNumber} = useContext(AppContext);

  console.log(cartItems);
  return (
    <div className="cartItemContainer">
      <div>
        {
          cartItems.map((item)=>{
            return (<CartEachItem key={item.id} item={item}></CartEachItem>)
          })
        }
      </div>
      <div>
            <h3>Your Cart</h3>
            <h2>Summary</h2>
            <h4>Total Items : {currCartItemsNumber}</h4>
            <h4>Total Amount : $ {currCartCost}</h4>
            <button>CheckOut Now</button>
        </div>
    </div>
  )
};

export default OpenCart;
import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker";
import CartEachItem from "./CartEachItem";
import {products} from './data';

const OpenCart = () => {
  const {cartItems ,currCartCost , cartItemsCnt} = useContext(AppContext);

  return (
    <div className="cartItemContainer">
      <div>
        {
          products.map((product)=>{
            return (cartItems[product.id]>0 &&
              <CartEachItem key={product.id} item={product}></CartEachItem>)
          })
        }
      </div>
      <div>
            <h3>Your Cart</h3>
            <h2>Summary</h2>
            <h4>Total Items : {cartItemsCnt}</h4>
            <h4>Total Amount : $ {currCartCost.toFixed(2)}</h4>
            <button>CheckOut Now</button>
        </div>
    </div>
  )
};

export default OpenCart;
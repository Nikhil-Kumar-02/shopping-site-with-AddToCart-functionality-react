import React, { useContext } from "react"
import { IoIosAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "./AppContextTracker";

const CartEachItem = (props) => {
    const product = props.item;
    const {setcartItemsCnt , setItemsToCart, cartItems , setcurrCartCost} = useContext(AppContext);

    const totalCost = product.price * cartItems[product.id];
  return (
    <div className="cartEachProduct">
        <div>
            <img src={product.image} alt="product" height={220} width={180}></img>
        </div>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price : {product.price}</p>
            <p>Count : {cartItems[product.id]}</p>
            <p>Cost : {totalCost}</p>
            <div className="cartpriceand-add">
                <IoIosAddCircle onClick={()=>{
                    setcartItemsCnt((prev)=> prev+1);
                    setcurrCartCost((prev)=>prev+product.price);
                    let updatedItemCart = [...cartItems];
                    updatedItemCart[product.id]++;
                    setItemsToCart(updatedItemCart);
                }}></IoIosAddCircle>
            </div>
            <div className="cartpriceand-delete">
                <TiDelete onClick={()=>{
                    setcartItemsCnt((prev)=> prev-1);
                    setcurrCartCost((prev)=>prev-product.price);
                    let updatedItemCart = [...cartItems];
                    updatedItemCart[product.id]--;
                    setItemsToCart(updatedItemCart);
                }}></TiDelete>
            </div>
        </div>
    </div>
  )
};

export default CartEachItem;

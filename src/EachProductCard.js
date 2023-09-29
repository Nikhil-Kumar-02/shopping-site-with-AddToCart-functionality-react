import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker";

const EachProductCard = (props) => {
  const product = props.product;
  const productId = product.id;
  const {cartItems , setcartItemsCnt , setItemsToCart , setcurrCartCost} = useContext(AppContext);
  
  return (
    <div className="eachCardItem">
        <div className="cardDescription">
          <h3>{`${product.title.substring(0,20)} ...`}</h3>
          <p>{`${product.description.substring(0,40)} ...`}</p>
          <img src={product.image} alt="product" height={150} width={120}></img>
        </div>
        <div className="priceAndButton">
            <span>${product.price}</span>
            <div>
              {
                cartItems[productId] > 0 ? (
                  <button onClick={()=>{
                    //reduce the count of items in the cart
                    setcartItemsCnt((prev)=> prev-1)
                    //now this item ocurance has decreased
                    let updatedcartItems = [...cartItems];
                    updatedcartItems[productId]--;
                    setItemsToCart(updatedcartItems);
                    //also add its cost for the cart cost
                    setcurrCartCost((prev)=> prev - product.price)
                  }}>Remove</button>
                ) : (
                  <button onClick={()=>{
                    //increase the count of items in the cart
                    setcartItemsCnt((prev)=> prev+1)
                    //now this item ocurance has increased
                    let updatedcartItems = [...cartItems];
                    updatedcartItems[productId]++;
                    setItemsToCart(updatedcartItems);
                    //also add its cost for the cart cost
                    setcurrCartCost((prev)=> prev + product.price)
                  }}>Add To Cart</button>
                )
              }
            </div>
        </div>
    </div>
  )
};

export default EachProductCard;

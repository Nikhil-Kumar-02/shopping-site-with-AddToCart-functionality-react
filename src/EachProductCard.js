import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker";

const EachProductCard = (props) => {
  const product = props.product;
  const productId = product.id;
  const {setcurrCartItemsNumber , addItemsToCart , setcurrCartCost} = useContext(AppContext);
  return (
    <div className="eachCardItem">
        <div className="cardDescription">
          <h3>{`${product.title.substring(0,20)} ...`}</h3>
          <p>{`${product.description.substring(0,40)} ...`}</p>
          <img src={product.image} alt="product" height={150} width={120}></img>
        </div>
        <div className="priceAndButton">
            <span>${product.price}</span>
            <button onClick={(e)=>{
              if(e.target.innerHTML === "Add To Cart"){
                setcurrCartItemsNumber((prev)=>prev+1);
                e.target.innerHTML = "Remove";
                setcurrCartCost((prev)=> prev+product.price);
                addItemsToCart((prev)=>{
                    console.log(prev);
                    console.log(product);
                  return [...prev,product];
                })
              }
              else{
                setcurrCartItemsNumber((prev)=>prev-1);
                e.target.innerHTML = "Add To Cart";
                setcurrCartCost((prev)=> prev-product.price);
                addItemsToCart((prev)=>{
                  let newdata = prev.filter((data)=>{
                    return data.id !== productId;
                  })
                  return newdata;
                })
              }
            }}>Add To Cart</button>
        </div>
    </div>
  )
};

export default EachProductCard;

import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker";

const EachProductCard = ({description , image , price , title}) => {
  const {setcurrCartItems} = useContext(AppContext);
  return (
    <div className="eachCardItem">
        <div className="cardDescription">
          <h3>{`${title.substring(0,20)} ...`}</h3>
          <p>{`${description.substring(0,40)} ...`}</p>
          <img src={image} alt="product" height={150} width={120}></img>
        </div>
        <div className="priceAndButton">
            <span>${price}</span>
            <button onClick={(e)=>{
              if(e.target.innerHTML === "Add To Cart"){
                setcurrCartItems((prev)=>prev+1);
                e.target.innerHTML = "Remove";
              }
              else{
                setcurrCartItems((prev)=>prev-1);
                e.target.innerHTML = "Add To Cart";
              }
            }}>Add To Cart</button>
        </div>
    </div>
  )
};

export default EachProductCard;

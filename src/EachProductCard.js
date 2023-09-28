import React from "react"

const EachProductCard = ({description , image , price , title}) => {
  return (
    <div className="eachCardItem">
        <div className="cardDescription">
          <h3>{`${title.substring(0,20)} ...`}</h3>
          <p>{`${description.substring(0,40)} ...`}</p>
          <img src={image} alt="product" height={150} width={120}></img>
        </div>
        <div className="priceAndButton">
            <span>${price}</span>
            <button>Add To Cart</button>
        </div>
    </div>
  )
};

export default EachProductCard;

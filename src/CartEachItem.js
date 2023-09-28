import React, { useContext } from "react"
import { AiFillDelete } from 'react-icons/ai';
import { AppContext } from "./AppContextTracker";

const CartEachItem = (props) => {
    const product = props.item;
    const productId = product.id;
    const {setcurrCartItemsNumber , addItemsToCart , setcurrCartCost} = useContext(AppContext);

  return (
    <div className="cartEachProduct">
        <div>
            <img src={product.image} alt="product" height={220} width={180}></img>
        </div>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="cartpriceand-delete">
                <spam>${product.price}</spam>
                <AiFillDelete onClick={()=>{
                    setcurrCartItemsNumber((prev)=> prev-1);
                    setcurrCartCost((prev)=>prev-product.price);
                    addItemsToCart((prev)=>{
                        let newData = prev.filter((pro)=>{
                            return (pro.id != productId)
                        })
                        return newData;
                    })
                }}></AiFillDelete>
            </div>
        </div>
    </div>
  )
};

export default CartEachItem;

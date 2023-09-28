import React from "react"
import {products} from './data';
import EachProductCard from './EachProductCard'

const ItemCollection = (props) => {
  return (
    <div className="itemcollection">
        {
            products.map( (product) => {
                return (
                    <EachProductCard key={product.id} {...product}></EachProductCard>
                )
            })
        }
    </div>
  )
};

export default ItemCollection;

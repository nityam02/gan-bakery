import React from "react";
import "./common.css";

const ItemContainer = ({
thumbnail,
 title,
 id,
 price,
 dispatch,
 qty
}) => {
  return (
      <div className="hero-container">
      <img
        src={thumbnail}
        alt={title}
         className="image-box"
      />
       <div>
        <div className="product-title">{title}</div>
        <div>$ {price}</div>
      </div>
      <button className="cart-btn" onClick={()=>{
        dispatch({
            type: 'ADD_T0_CART',
            payload: {
              id: id,
              title: title,
              thumbnail:thumbnail,
              qty:qty,
              price: price,
            },
          })
      }}>ADD CART</button>
      </div>
  );
};

export default ItemContainer;

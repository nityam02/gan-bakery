import React from "react";

const Cart = ({ state, dispatch }) => {
  const {carts } = state;
  return carts?.map((prod) => (
    <div className="flex flex-col text-center ">
      <img
        src={prod.thumbnail}
        alt={prod.title}
        className="image-box"
      />
        <div>
        <div className="product-title">{prod.title}</div>
        <div>$ {prod.price}</div>
      
      </div>
      <button className="delete-btn" onClick={()=>{
        dispatch({
            type: 'REMOVE_CART',
            payload: {
              id: prod.id,
              title: prod.title,
              thumbnail:prod.thumbnail,
              qty:prod.qty,
              price: prod.price,
            },
          })
      }}>Remove</button>
    </div>
  ));
};

export default Cart;

import React from "react";
import ItemContainer from "../components/ItemContainer";

const Products = ({ state, dispatch }) => {
  const { products } = state;
  return (
    <div className="flex flex-col w-100">
    <div className="heading">New Products</div>
    <div className="product-container">
      {products?.map((product,index) => (
       <ItemContainer {...product} {...{dispatch,state}} key={index}/>
      ))}
    </div>
    </div>
  );
};

export default Products;

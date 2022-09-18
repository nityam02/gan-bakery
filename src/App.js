import "./styles.css";
import React, { useEffect, useReducer } from "react";
import { cartReducers } from "./reducers/cartReducers";
import { API_URL } from "./utlis/constants";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  const [state, dispatch] = useReducer(cartReducers, {
    products: [],
    carts: []
  });

  const fetchProducts = async () => {
    const data = await fetch(API_URL);
    const {
      products
    } = await data.json();

    dispatch({
      type: "ADD_PRODUCTS",
      payload: products
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <Products {...{ state, dispatch }} />
      <div className="flex flex-col">
        <div className="heading mt-50">Cart</div>
      <Cart {...{ state, dispatch }} />
      </div>
    </div>
  );
}
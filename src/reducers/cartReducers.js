export const cartReducers = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_T0_CART":
        return {
          ...state,
          carts: [{ ...action.payload, qty: 1 }, ...state.carts]
        };
        case 'REMOVE_CART':
            return {
              ...state,
              carts: state.carts.filter((cart) => cart.id !== action.payload.id),
            };
      default:
        return { ...state };
    }
  };
  
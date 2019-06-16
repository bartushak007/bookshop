import { FETCH_DATA } from "../actions/type";

const initialState = { products: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.products
      };

    case "DOWNLOAD_PRODUCTSLIST":
      return {
        ...state,
        products: {
          ...state.products,
          [action.field]: {
            ...state.products[action.field],
            products: action.products
          }
        }
      };

    default:
      return state;
  }
};

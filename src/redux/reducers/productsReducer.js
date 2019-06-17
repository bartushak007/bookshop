import { FETCH_DATA, DOWNLOAD_PRODUCTS } from "../actions/type";

const initialState = { categories: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        categories: action.categories
      };

    case DOWNLOAD_PRODUCTS:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.field]: {
            ...state.categories[action.field],
            products: action.products
          }
        }
      };

    default:
      return state;
  }
};

import { FETCH_DATA, DOWNLOAD_PRODUCTS } from "./type";

import { resolvePath } from "../../helpers/index";

export const fetchCategory = () => dispatch => {
  fetch(resolvePath("api/data.json"))
    .then(j => j.json())
    .then(data => {
      return dispatch({ type: FETCH_DATA, categories: data.categories });
    });
};

export const fetchProduct = product => (dispatch, getStore) => {
  const store = getStore();

  if (!store.shop.categories[product].categories) {
    fetch(resolvePath(store.shop.categories[product].api))
      .then(j => j.json())
      .then(data => {
        return dispatch({
          type: DOWNLOAD_PRODUCTS,
          products: data,
          field: product
        });
      });
  }
};

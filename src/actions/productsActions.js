import { FETCH_DATA } from "./type";

import { resolvePath } from "../helpers/index";



export const fetchCategory = () => dispatch => {
  fetch(resolvePath("api/data.json"))
    .then(j => j.json())
    .then(data => {      
      return dispatch({ type: FETCH_DATA, products: data.products });
    });
};

export const fetchProduct = (product) => (dispatch, state) => {
  console.log('good nice');
  fetch(resolvePath(state().shop.products[product].api))
    .then(j => j.json())
    .then(data => {  
      console.log(data);    
      return dispatch({ type: 'DOWNLOAD_PRODUCTSLIST', products: data, field: product });
    });
};

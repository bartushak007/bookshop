import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "./actions/productsActions";

import Aside from './components/layout/aside';
import Template from './components/layout/template';

const App = ({ fetchCategory, products }) => {
  console.log(products);
  useEffect(fetchCategory, []);
  

  return (
    <div >
      <Aside {...{products}}/>
      <Template/>
    </div>
  );
};
const mapStateToProps = state => ({ products: state.shop.products });

export default connect(
  mapStateToProps,
  { fetchCategory }
)(App);

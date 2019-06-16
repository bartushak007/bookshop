import React from "react";
import { connect } from "react-redux";
import {fetchProduct} from '../../../actions/productsActions';
import { Switch, NavLink, Route } from "react-router-dom";

import "./style/template.scss";

import Category from './Category'

const Template = ({ products, fetchProduct }) => {
  
  return (
    <div>
      <h1 >click</h1>
      <Switch>
        {Object.entries(products).map(([key, category]) => {
          return <Route key={key} path={`/category/:name`} component={Category} except/>;
        })}
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({ products: state.shop.products });

export default connect(
  mapStateToProps,
  {fetchProduct}
)(Template);

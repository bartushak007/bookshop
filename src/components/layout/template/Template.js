import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/actions/productsActions";
import { Switch, Route } from "react-router-dom";

import "./style/template.scss";

import Category from "./Category";

import ProductsList from './ProductsList';

const Template = ({ categories, fetchProduct }) => {
  return (
    <div>
      <h1>click</h1>
      {Object.entries(categories).length && (<Switch>        
        <Route  path={`/category/:name`} component={Category} exact/>
        <Route  path={`/category/:name/products/:pr`} component={ProductsList}/>
      </Switch>)}
    </div>
  );
};

const mapStateToProps = state => ({ categories: state.shop.categories });

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Template);

import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/actions/productsActions";
import { Switch, Route } from "react-router-dom";

import "./style/template.scss";

import Category from "./Category";

const X = () => {
  console.log("xxx");
  return <h1>XXXXXXXXXXXXXXXXXX</h1>;
};

const Template = ({ categories, fetchProduct }) => {
  return (
    <div>
      <h1>click</h1>
      <Switch>
        <Route path={`/category/:name/product/4`} component={X} />;
        {Object.entries(categories).map(([key, category]) => {
          return (
            <Route key={key} path={`/category/:name`} component={Category} />
          );
        })}
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({ categories: state.shop.categories });

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Template);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/actions/productsActions";
// import { Switch, NavLink, Route } from "react-router-dom";

import "./style/template.scss";

const Category = ({ match, fetchProduct }) => {
  useEffect(() => fetchProduct(match.params.name), []);
  return (
    <h1 onClick={() => fetchProduct(match.params.name)}>{match.params.name}</h1>
  );
};

const mapStateToProps = state => ({ categories: state.shop.categories });

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Category);

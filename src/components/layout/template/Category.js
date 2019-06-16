import React from "react";
import { connect } from "react-redux";
import {fetchProduct} from '../../../actions/productsActions';
import { Switch, NavLink, Route } from "react-router-dom";

import "./style/template.scss";



const Category = ({ match, fetchProduct }) => {
  
  
  return (<h1 onClick={()=> fetchProduct(match.params.name)}>{match.params.name}</h1>)};

const mapStateToProps = state => ({ products: state.shop.products });

export default connect(
  mapStateToProps,
  {fetchProduct}
)(Category);

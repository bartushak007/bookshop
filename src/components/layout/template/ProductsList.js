import React from "react";
import { connect } from "react-redux";

const ProductsList = ({match, categories}) => {
  
  const category = categories[match.params.name];
  
  return <div>{category && category.products && category.products[match.params.pr].goodsList.map((el,i)=> <h2 key={i}>{el.country}</h2>)}</div>;
};

const mapStateToProps = state => ({ categories: state.shop.categories });

export default connect(
  mapStateToProps,
  
)(ProductsList);

import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/actions/productsActions";

import { NavLink } from "react-router-dom";

import "./style/aside.scss";

const Aside = ({ categories, fetchProduct }) => {
  return (
    <div>
      <ul className="list">
        {Object.entries(categories).map(([key, category]) => {
          return (
            <div key={key}>
              <li>
                <NavLink to={`/category/${key}`}>
                  <h1 onClick={() => fetchProduct(key)}>{category.title}</h1>
                </NavLink>
                {categories[key].products && (
                  <ul className="list">
                    {Object.entries(categories[key].products).map(
                      ([nkey, value]) => (
                        <li key={nkey}>
                          <NavLink to={`/category/${key}/products/${nkey}`}>
                            <span onClick={() => fetchProduct(key)}>
                              {value.title}
                            </span>
                          </NavLink>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ categories: state.shop.categories });
export default connect(
  mapStateToProps,
  { fetchProduct }
)(Aside);

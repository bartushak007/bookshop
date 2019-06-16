import React from "react";
import { connect } from "react-redux";

import { Switch, NavLink } from "react-router-dom";

import "./style/aside.scss";

const Aside = ({ products }) => {
  return (
    <div>
      {Object.entries(products).map(([key, category]) => {
        return <NavLink key={key} to={`/category/${key}`}>{key}  </NavLink>;
      })}
    </div>
  );
};

export default connect()(Aside);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "./redux/actions/productsActions";

import Aside from "./components/layout/aside";
import Template from "./components/layout/template";

const App = ({ fetchCategory, categories }) => {
  useEffect(fetchCategory, []);

  return (
    <div>
      <Aside {...{ categories }} />
      <Template />
    </div>
  );
};
const mapStateToProps = state => ({ categories: state.shop.categories });

export default connect(
  mapStateToProps,
  { fetchCategory }
)(App);

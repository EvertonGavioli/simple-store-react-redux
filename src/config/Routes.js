
import React from "react";
import { GlobalStyle } from "config/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Produto from "pages/Produto";

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Produto} />
        </Switch>
      </Router>
    </>
  );
}
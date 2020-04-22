import React from "react";
import { GlobalStyle } from "config/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Produto from "pages/Produto";
import FinalizarCompra from "pages/FinalizacaoCompra";
import Testes from "pages/Testes";

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={window.isElectronApp ? Testes : Produto}
          />
          <Route path="/finalizar" exact component={FinalizarCompra} />
          <Route path="/testes" exact component={Testes} />
        </Switch>
      </Router>
    </>
  );
}

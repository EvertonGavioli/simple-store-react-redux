
import React from 'react'
import { GlobalStyle } from 'config/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Produto from 'pages/Produto'
import FinalizarCompra from 'pages/FinalizacaoCompra'

export default function Routes () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Produto} />
          <Route path="/finalizar" exact component={FinalizarCompra} />
        </Switch>
      </Router>
    </>
  )
}

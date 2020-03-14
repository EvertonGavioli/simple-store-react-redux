import React from 'react';
import { Provider } from "react-redux";

import store from "config/store";
import Routes from "config/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
import React from "react";
import "./App.css";
//Import route and our components
import { Route } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/price">
        <Price />
      </Route>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact render={() => <VendingMachine />} />
          <Route path="/soda" exact render={() => <Soda />} />
          <Route path="/chips" exact render={() => <Chips />} />
          <Route path="/sardines" exact render={() => <Sardines />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default App;



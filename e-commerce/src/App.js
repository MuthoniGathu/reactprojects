import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductProvider } from "./Context";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </>
        </Router>
      </ProductProvider>
    );
  }
}

export default App;

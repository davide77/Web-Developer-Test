import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import { hot } from "react-hot-loader";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Main from "./Main";
import Footer from "./Footer";

import "../sass/style.scss";

class App extends Component {

  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [
        {
          "sku": "AWDT0001-M",
          "quantity": 1
        },
        {
          "sku": "AWDT0002",
          "quantity": 2
        },
        {
          "sku": "AWDT0003-M",
          "quantity": 1
        },
      ]
    }

    this.state = {
      windowWidth: window.innerWidth,
      total: 0,
      cart: cart,
    }
  }

  updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart: cart });
  }


  handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const currentCart = this.state.cart;
    const isMobile = (this.state.windowWidth < 856);
    //check scss _breakpoints for reference.

    return (
      <Router>
        <NavBar id="top" />
        <main id="main-content" className="main-content">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/cart">
              <Cart cart={currentCart}
                isMobile={isMobile}
                updateCart={(cart) => this.updateCart(cart)}
              />
            </Route>
          </Switch>
        </main>
        <Footer/>
      </Router>
    );
  }
}

export default hot(module)(App);
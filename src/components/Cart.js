import React, { Component } from "react";
import { hot } from "react-hot-loader";
import CartItem from "./CartItem";
import { price } from "../utils/product";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.setItemQuantity = this.setItemQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  getCartTotal() {
    //returns cart total in double to two decimal places
    let total = 0;
    this.props.cart.map(cartItem => {
      total += cartItem.quantity * price(cartItem.sku);
    });
    return total;
  }

  setItemQuantity(item_sku, new_quantity) {
    if (new_quantity >= 0) {
      let cart = this.props.cart.slice();
      var item = cart.find(cartItem => {
        return cartItem.sku === item_sku;
      })
      item.quantity = new_quantity;
      this.props.updateCart(cart)
    }
  }

  removeItem(item_sku) {
    let cart = this.props.cart.slice();
    var item = cart.find(cartItem => {
      return cartItem.sku === item_sku;
    });
    var index = cart.indexOf(item);
    if (index > -1) {
      cart.splice(index, 1);
    }
    this.props.updateCart(cart)
  }
  render() {
    const subtotal = this.getCartTotal();
    const isMobile = this.props.isMobile;
    const checkout = subtotal > 0 ?
    <li className="cta-container"><button className="button primary checkout" aria-label="Proceed to checkout your basket"> Buy Now </button></li> :
    <li className="cta-container"><button className="button primary checkout inactive"> Buy Now </button></li>;
    return (
      <section className="container checkout-section flow">
        <header>
          <h2>Your Basket</h2>
          <p>Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase.</p>
        </header>
        <ul className="cart list-reset">
          <CartLabels isMobile={isMobile} />
          {!isMobile}
          {this.props.cart.map(cartItem => (
            <CartItem isMobile={isMobile} key={cartItem.sku} sku={cartItem.sku} quantity={cartItem.quantity}
              setItemQuantity={this.setItemQuantity}
              removeItem={() => this.removeItem(cartItem.sku)}
            />
          ))}
          <TotalBar subtotal={subtotal} isMobile={isMobile} />
          {checkout}
        </ul>
      </section>
    );
  }
}
function TotalBar(props) {
  const subtotal = parseFloat(props.subtotal);
  const vat = (subtotal * 0.2);
  const total = subtotal + vat;
 
  if (props.isMobile) {
    return (
      <li className="total-container">
        <div className="grid">
          <label className="label">Subtotal:</label>
          <div className="cost">£{subtotal.toFixed(2)}</div>
        </div>
        <div className="grid">
          <label className="label">VAT at 20%:</label>
          <div className="cost">£{vat.toFixed(2)}</div>
        </div>
        <div className="grid">
          <label className="label total">Total:</label>
          <div className="cost total">£{total.toFixed(2)}</div>
        </div>
      </li>
    );
  } else {
    return (
      <li  className="total-container">
        <div className="grid">
          <div className="label">Subtotal:</div>
          <div className="cost">£{subtotal.toFixed(2)}</div>
        </div>
        <div className="grid">
          <div className="label">VAT at 20%:</div>
          <div className="cost">£{vat.toFixed(2)}</div>
        </div>
        <div className="grid">
          <div className="label total">Total:</div>
          <div className="cost total">£{total.toFixed(2)}</div>
        </div>
      </li>
    )
  }
}

function CartLabels(props) {
  if (props.isMobile) {
    return <li />;
  }
  return (
    <li className="grid head">
      <div className="product">Product</div>
      <div className="price">Price</div>
      <div className="quantity">Quantity</div>
      <div className="cost">Cost</div>
    </li>
  )
}
export default hot(module)(Cart);

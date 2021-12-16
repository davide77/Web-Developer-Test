import React from "react";
import { Link } from "react-router-dom";
import cart from '../assets/images/cart.svg';


export default function PrimaryNav() {
    return (
        <ul className="menu primary-nav nav-items flex list-reset" aria-labelledby="menucontrol" >
        <li className="nav-link">
            <Link to="/">Products</Link>
        </li>
        <li className="nav-link">
            <Link to="/">News</Link>
        </li>
        <li className="nav-link">
            <Link to="/">Content</Link>
        </li>
        <li className="nav-link">
            <Link to="/cart" className="cart-icon">
            <img src={cart} alt="cart icon" className="cart-icon" /><span className="footer-only">Your Cart</span></Link>
        </li>
        </ul>
    );
}
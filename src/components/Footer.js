import React  from "react";
import { Link } from "react-router-dom";
import PrimaryNav from "./PrimaryNav";
import logo from '../assets/images/logo.svg';
import google from "../assets/images/google.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter.svg"

export default function footer() {
    return (
        <footer className="footer">
          <div className="container">
              <div className="wrap">

              <div className="nav-brand  col-12 md-col-2">
                  <h2><Link to="/"><img src={logo} alt="logo icon"/><span className="sr-only">Logo</span></Link></h2>
              </div>

              <nav className="nav  col-12 md-col-4">
                <PrimaryNav />
              </nav>  

 
              <nav className="social-nav  col-12 md-col-6">
                  <ul className="list-reset">
                  <li><a href="https://google.com"><img src={google} alt="google" /></a></li>
                <li><a href="https://facebook.com"><img src={facebook} alt="facebook"/></a></li>
                <li><a href="https://instagram.com"><img src={instagram} alt="instagram"/></a></li>
                <li><a href="https://twitter.com"><img src={twitter} alt="twitter"/></a></li>
                  </ul>

                  <p>Privacy Policy<br/>
                  ©2021 Google. All Rights Reserved</p>
              </nav>
                  

            </div>
          </div>
        </footer>
    );
  
}

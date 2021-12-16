import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryNav from "./PrimaryNav";
import logo from '../assets/images/logo.svg'


export default function NavBar() {

  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible((prev) => !prev);
 
    return(
      <header className="header">
        <div className="container">
          <div className="wrap">
          
          <button
            id="menucontrol"
            className="mobile-nav-toggle"
            aria-haspopup="menu"
            aria-controls="nav-items"
            aria-expanded={visible}
            onClick={onClick}
          >
            <span>Menu</span>
          </button>

          <nav className="nav">
            <div className="nav-menu flex-row">
              <div className="nav-brand">
                  <h2><Link to="/"><img src={logo} alt="logo icon"/><span className="sr-only">Logo</span></Link></h2>
              </div>
              <div className="primary-nav-container" aria-expanded={visible}>
                <PrimaryNav />
              </div>
            </div>
          </nav>
          </div>
        </div>
      </header>
    );

} 
 
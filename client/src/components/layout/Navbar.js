import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from'./MindSpaceLogo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <div class = "left">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              MindSpace
            </Link>
            </div > <div class = "right"> <img src = {logo} width = "50"/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

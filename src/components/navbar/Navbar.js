import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            MEME Generator
          </Link>

        </div>
      </nav>
    );
  }
}

export default Navbar;

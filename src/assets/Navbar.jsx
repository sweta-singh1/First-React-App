import React from "react";
import "../../src/App.css";
function Navbar() {
  return (
    <div>
      <nav className="container nav-col">
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navbar;

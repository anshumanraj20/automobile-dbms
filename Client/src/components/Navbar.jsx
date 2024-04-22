import React from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Automobile Sale</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="/landingpage" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" spy={true} smooth={true}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
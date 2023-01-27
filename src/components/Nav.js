import React from "react";
import whiteLogo from "../images/tinder-white.png";
import colorLogo from "../images/tinder-logo.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>

      {!authToken && <button className="nav-button">Log in</button>}
    </nav>
  );
};

export default Nav;

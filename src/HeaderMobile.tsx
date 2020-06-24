import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";

import "./HeaderMobile.css";

interface HeaderMobileProps {
  theme: string;
  toggleTheme: () => void;
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div>
      <div className="mobile-header">
        <ModeToggle toggleTheme={props.toggleTheme} theme={props.theme} />
        <div className="mobile-header-container">
          <div className="mobile-logo">
            <Link to="/">
              <h3>Conor Bailey</h3>
            </Link>
          </div>
          <div>
            <h3 className="menu-tog" onClick={() => handleClick()}>
              Menu
            </h3>
          </div>
        </div>
      </div>
      <nav className={active ? "mobile-nav active" : "mobile-nav"}>
        <h3 onClick={() => handleClick()} className="close-tog">
          CLOSE
        </h3>
        <ul>
          <Link onClick={() => handleClick()} to="/">
            Home
          </Link>
          <Link onClick={() => handleClick()} to="/about">
            About
          </Link>
          <Link onClick={() => handleClick()} to="/projects">
            Projects
          </Link>
          <Link onClick={() => handleClick()} to="/contact">
            Contact
          </Link>
          <Link onClick={() => handleClick()} to="/blog">
            Blog
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;

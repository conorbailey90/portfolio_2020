import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import "./Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = (props: HeaderProps) => {
  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    // Hide navbar on scroll
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      prevScrollpos > currentScrollPos ? setScroll(true) : setScroll(false);
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <div className={`header ${scroll ? "active" : ""}`}>
      <div className="header-container">
        <ModeToggle toggleTheme={props.toggleTheme} theme={props.theme} />
        <div className="logo">
          <h4>Conor Bailey</h4>
        </div>
        <nav>
          <ul>
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/about">
              About
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/projects">
              Projects
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/contact">
              Contact
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/blog">
              Blog
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

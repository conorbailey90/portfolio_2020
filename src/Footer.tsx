import React from "react";
import "./Footer.css";

interface FooterProps {
  className: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={props.className}>
      <p>© Conor Bailey</p>
    </footer>
  );
};

export default Footer;

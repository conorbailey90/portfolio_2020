import React, { useEffect } from "react";
import "./Home.css";

import PDF from "./documents/ConorBaileyCV2020.pdf";

import Footer from "./Footer";
import Canvas2 from "./Canvas2";

import { Link } from "react-router-dom";

const Home = (props: any) => {
  useEffect(() => {
    document.title = "Conor Bailey: Home";
  }, []);

  useEffect(() => {
    let cursorOne = document.querySelector(".inner-circle") as HTMLElement;
    let links = Array.from(document.getElementsByTagName("a"));
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursorOne.classList.add("link-grow");
      });
      link.addEventListener("mouseleave", () => {
        cursorOne.classList.remove("link-grow");
      });
      link.addEventListener("click", () => {
        cursorOne.classList.remove("link-grow");
      });
    });
  });

  return (
    <div>
      <section className="home">
        <div className="welcome">
          <h1>HI! I'M CONOR. </h1>
          <h1>I'M A SOFTWARE DEVELOPER</h1>
        </div>
        <div className="home-links">
          <Link className="projects-btn" to="/projects">
            See My Work
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            href={PDF}
          >
            Resume
          </a>
        </div>
        <Canvas2 />
      </section>
      <Footer className="home-footer" />
    </div>
  );
};

export default Home;

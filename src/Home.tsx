import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import "./Home.css";

import Footer from "./Footer";
import Canvas2 from "./Canvas2";

import PDF from "./documents/ConorBaileyCV2020.pdf";

const Home = (props: any) => {
  // App selects the whole Home section. This section will be hidden at first in order to load all dom content prior to animation.
  let app: any = useRef(null);
  let welcomeText: any = useRef(null);
  let welcomeLinks: any = useRef(null);
  let canvas: any = useRef(null);

  useEffect(() => {
    // new Timeline
    let tl: any = new TimelineLite();
    // Wait for all dom content to load before making page visible to prevent pre flash animations

    const stagger = () => {
      TweenMax.to(app, 0, { css: { visibility: "visible" } });
      // Welcome text vars
      const headerOne = welcomeText.firstElementChild;
      const headerTwo = welcomeText.lastElementChild;
      const links = welcomeLinks;
      console.log(headerOne, headerTwo);

      tl.staggerFrom(
        [headerOne.children, headerTwo.children, links, canvas],
        1,
        {
          y: 60,
          ease: Power3.easeOut,
          delay: 0.8,
          autoAlpha: 0,
        },
        0.2
      );
    };
    stagger();
  }, []);

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
      <section className="home" ref={(el) => (app = el)}>
        <div className="welcome" ref={(el) => (welcomeText = el)}>
          <div className="welcome-line-1">
            <h1 className="welcome-line-1-inner">HI! I'M CONOR. </h1>
          </div>
          <div className="welcome-line-2">
            <h1 className="welcome-line-2-inner">I'M A SOFTWARE DEVELOPER</h1>
          </div>
        </div>
        <div className="home-links" ref={(el) => (welcomeLinks = el)}>
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
        <div className="react-p5-div" ref={(el) => (canvas = el)}>
          <Canvas2 />
        </div>
      </section>
      <Footer className="home-footer" />
    </div>
  );
};

export default Home;

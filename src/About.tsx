import React, { useEffect } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import "./About.css";
import Photo from "./images/imageface.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    document.title = "About";
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
      <section className="about">
        {/* <Header /> */}
        <div className="about-me">
          <div className="seperator">
            <h1 className="about-title">ABOUT CONOR</h1>
          </div>

          <div className="bio-pic">
            <p className="bio">
              I am a Full Stack Developer and graduate of the Udacity Full Stack
              Web Developer and Data Analysis Nanodegree programmes. I have a
              large passion for learning, technology and software development /
              engineering. I am currently documenting my journey on Youtube
              where I regularly post tutorials covering multiple programming
              languages and technologies. In my spare time I'm also interested
              in music production, DJing and generative art. Please don't
              hesitate to contact me if you require further information.
            </p>
            <div className="photo">
              <img src={Photo} alt="" />
            </div>
          </div>

          <div className="skills">
            <div className="seperator">
              <h1>SKILLS</h1>
            </div>
            <div className="skill-list">
              <div>
                <FontAwesomeIcon icon={["fab", "html5"]} />
                <i className="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "css3-alt"]} />
                <p>CSS3</p>
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "js"]} />
                <p>JavaScript</p>
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "react"]} />
                <p>React</p>
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "node"]} />
                <p>Node JS</p>
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "python"]} />
                <p>Python</p>
                <p>(Django, Flask)</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faDatabase} />

                <p>SQL</p>
                <p>(Postgresql, SQL Server)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer className="about-footer" />
    </div>
  );
};

export default About;

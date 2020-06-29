import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import cat from "./images/companyanalysistool.jpg";
import maze from "./images/mazegenerator.jpg";
import itemcat from "./images/itemcat.jpg";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
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
      <section className="projects">
        <div className="projects-container">
          <div className="seperator">
            <h1>PROJECTS</h1>
          </div>
          <div className="project project-one">
            <div className="title-links">
              <div className="title">
                <h2>Company Analysis Tool</h2>
              </div>

              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/conorbailey90/web-scraper-app"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.companyanalysistool.com"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>{" "}
              </div>
            </div>

            <div className="project-details">
              <div className="project-info">
                <h5>
                  Built With: Node JS, Express JS, Postgresql, Puppeteer, HTML,
                  CSS, Vanilla JavaScript
                </h5>
                <p>
                  The Company Analysis Tool was built to assist with AML (Anti
                  Money Laundering) investigations. The app makes use of the
                  Puppeteer web scraping technology as well as multiple third
                  party API's (Open Corporates / DueDil) to gather company
                  information. All gathered company details are then stored in
                  the Postgresql database. The application also implements the
                  News API to retrieve up to date news articles in the financial
                  crime space. Local strategy user authentication has also been
                  implemented with registered user details and secure hashed
                  passwords stored in the Postgresql database.
                </p>
              </div>
              <div className="project-image">
                <img src={cat} alt="" />
              </div>
            </div>
          </div>

          <div className="seperator"></div>

          <div className="project project-two">
            <div className="title-links">
              <div className="title">
                <h2>JavaScript Maze Generator</h2>
              </div>

              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/conorbailey90/Javascript-DFS-Maze"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://conorbailey90.github.io/Javascript-DFS-Maze/"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>{" "}
              </div>
            </div>

            <div className="project-details">
              <div className="project-info">
                <h5>Built With: HTML5, CSS, Vanilla JavaScript</h5>
                <p>
                  The Maze Generator is a fun project I implemented by utilizing
                  the Depth First Search and Recursive Backtracker algorithm's.
                  User's are required to input the maze size, row, and column
                  parameters prior to running the program. Once the dimensions
                  are submitted the maze will be generated. This program uses
                  object orientated programming principles. Once the maze is
                  generated, the user can then play the maze with the aim to
                  reach the goal cell on the canvas.
                </p>
              </div>
              <div className="project-image">
                <img src={maze} alt="" />
              </div>
            </div>
          </div>

          <div className="seperator"></div>
          <div className="project project-four">
            <div className="title-links">
              <div className="title">
                <h2>Item Catalogue</h2>
              </div>

              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/conorbailey90/item-catalogue"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ec2-35-178-196-68.eu-west-2.compute.amazonaws.com/catalogue/"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>{" "}
              </div>
            </div>

            <div className="project-details">
              <div className="project-info">
                <h5>
                  Built With: Python (Flask), SQLite, HTML, CSS, JavaScript
                </h5>
                <p>
                  This project was built as part of the Udacity Full Stack Web
                  Developer Nanodegree Course. This is a CRUD which is used to
                  store music production item details. This web application was
                  built using Python / Flask and an SQL database. Google Oauth 2
                  authentication has been implemented.
                </p>
              </div>
              <div className="project-image">
                <img src={itemcat} alt="" />
              </div>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="project project-three">
            <div className="title-links">
              <div className="title">
                <h2>Blog</h2>
              </div>

              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/conorbailey90/django-rest-api"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>{" "}
                <Link to="/blog">
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
              </div>
            </div>

            <div className="project-details">
              <div className="project-info">
                <h5>
                  Built With: Python (Django), Django Rest Framework, React,
                  JavaScript, Postgresql
                </h5>
                <p>
                  My personal blog was built using Django. Django was used to
                  create database blog 'Post' model and the Django Rest
                  Framework was used to serialize the database entries into JSON
                  format. All blog post entries are stored in a Postgresql
                  database. This website is built with React which interacts
                  with this Django API and serves the stored blog post's in the
                  React front end. The blog posts can be viewed on the Home page
                  of this website and the API JSON end points can be viewed by
                  clicking the link to the right. The API requires user
                  authentication in order to allow POST, PUT and DELETE
                  requests. JSON endpoints are made as read only to
                  unauthenticated users.
                </p>
              </div>
              <div className="project-image"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer className="projects-footer" />
    </div>
  );
};

export default Projects;

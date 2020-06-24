import React, { useEffect } from "react";

import Footer from "./Footer";
import "./Contact.css";

import FSWB from "./documents/FSWB.pdf";
import DACERT from "./documents/DACERT.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
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
      <section className="contact">
        <div className="contact-info">
          <div className="seperator">
            <h1>CONTACT ME</h1>
          </div>
          <div className="contact-details">
            <div>
              <p>
                E-MAIL:{" "}
                <a href="mailto:conbailey90@gmail.com">conbailey90@gmail.com</a>
              </p>
              <p>Mobile: 07540809644</p>
            </div>
            <div className="contact-sm">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/conor-bailey/"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/conorbailey90"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCcNEvbajb34cXufYddZ57og"
              >
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/conorbaileydev/"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </div>
          </div>
          <div className="certificates">
            <div className="contact-btn">
              <a target="_blank" rel="noopener noreferrer" href={FSWB}>
                Full Stack Web Developer NanoDegree Certificate
              </a>
            </div>
            <div className="contact-btn">
              <a target="_blank" rel="noopener noreferrer" href={DACERT}>
                Data Analysis NanoDegree Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer className="contact-footer" />
    </div>
  );
};

export default Contact;

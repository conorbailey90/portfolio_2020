import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Cursor from "./Cursor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.css";
// Add fab icons for Font Awesome
library.add(fab);

function App() {
  const [theme, setTheme] = useState("");

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
  useEffect(() => {
    let theme = localStorage.getItem("theme");

    if (theme === null || undefined) {
      localStorage.setItem("theme", "light");
      return setTheme("light");
    }
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty("--main-color", "#fbf9f9");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#252422"
      );
    } else if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty("--main-color", "#252422");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#fbf9f9"
      );
    }
  }, [theme]);

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="App">
      <Cursor />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HeaderMobile theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:postId" component={BlogPost} />
      </Switch>
    </div>
  );
}

export default App;

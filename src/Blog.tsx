import React, { useEffect, useState } from "react";
// import Header from "./Header";
import BlogTile from "./BlogTile";
import Footer from "./Footer";

import "./Blog.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [pagination, setPagination] = useState(0);
  const [postNum, setPostNum] = useState(0);

  // Set document title
  useEffect(() => {
    document.title = "Blog";
  }, []);

  // Set custom cursor and cursor link hover css
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

  // Retrieve blog posts and set the blog post state
  useEffect(() => {
    let url = "http://localhost:8000/";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPostNum(data.length);
        let posts = [];
        for (let i = pagination; i < pagination + 4; i++) {
          posts.push(data[i]);
        }
        setBlogPosts(posts);
      });
  }, [pagination]);

  function next() {
    // console.log(postNum);
    if (pagination === postNum - 4) return;
    setPagination(pagination + 1);
  }

  function previous() {
    if (pagination === 0) return;
    setPagination(pagination - 1);
  }

  return (
    <div>
      <section className="blog">
        {/* <Header /> */}
        <div className="blog-container">
          <div className="seperator">
            <h1 className="about-title">BLOG</h1>
          </div>

          <div className="posts">
            {blogPosts.map((post) => {
              return (
                <BlogTile
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  summary={post.summary}
                  image_source={post.image_source}
                />
              );
            })}
          </div>
          <div className="pagination-btns">
            <div className="btn" onClick={previous}>
              Previous
            </div>
            <div className="btn" onClick={next}>
              Next
            </div>
          </div>
        </div>
      </section>
      <Footer className="blog-footer" />
    </div>
  );
};

export default Blog;

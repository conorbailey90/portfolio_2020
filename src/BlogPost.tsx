import React, { useEffect, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";

import "./BlogPost.css";

const BlogPost = () => {
  const [post, setPost] = useState<any>([]);

  useEffect(() => {
    let postId = +window.location.pathname.split("/")[2];

    let url = `https://www.conorbaileyapi.xyz/${postId}/`;
    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <div>
      <section className="blog-post">
        <div className="post-container">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div className="video-container">
            <iframe
              className="yt-video"
              title="yt-video"
              src={post.video_embed}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer className="blog-footer" />
    </div>
  );
};

export default BlogPost;

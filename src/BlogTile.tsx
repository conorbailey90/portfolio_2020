import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./BlogTile.css";

interface BlogTileProps {
  id: number;
  title: string;
  summary: string;
  content?: string;
  image_source: any;
}

const BlogTile = (props: BlogTileProps) => {
  return (
    <div className="blog-tile">
      <Link to={`/blog/${props.id}`}>
        <h3 className="blog-title">{props.title}</h3>
      </Link>

      <h5>{props.summary}</h5>
      <FontAwesomeIcon icon={props.image_source.split(",")} />
    </div>
  );
};

export default BlogTile;

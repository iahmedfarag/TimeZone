import React from "react";
import links from "./../utils/links";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <ul>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;

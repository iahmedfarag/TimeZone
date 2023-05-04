import React, { useRef, useState } from "react";
import links from "./../utils/links";

const Links = () => {
  return (
    <div className="links">
      <ul>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;

// Links.js
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default Links;

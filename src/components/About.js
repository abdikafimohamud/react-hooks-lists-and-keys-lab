// About.js
import React from "react";
import Links from "./Links";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate frontend developer who loves building beautiful UIs and interactive web apps.</p>
      <Links github="https://github.com/yourusername" linkedin="https://linkedin.com/in/yourusername" />
    </div>
  );
}

export default About;

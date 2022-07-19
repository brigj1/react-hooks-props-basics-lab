import React from "react";
//import Links from "./Links";

      //<button id="exbut">Ex me</button>
      //<a href={props.links.github}>{props.links.github}</a>
      //<a href={props.links.linkedin}>{props.links.linkedin}</a>
function Links({linkedin, github}) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;

import React from "react";
import MainImg from "../images/mainimg.png";
export default function Main() {
  return (
    <section>
    <div className="Main--content">
      <img src={MainImg} className = "main--image" alt="Main"></img>
      <h1 className="main--heading">Other Experiences</h1>
      <span className="main--text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi autem
        vero quam aliquid. Quo aperiam excepturi fugiat eaque. Delectus,
        quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.
      </span>
    </div>
    </section>
  );
}

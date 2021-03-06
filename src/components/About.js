import React from "react";
import "../css/About.css";
import imgAbout from "../images/about.png";

function About() {
  return (
    <div>
      <div className="containerAbout">
        <div className="about_us">
          <h1 className="about_header">
            <b>ABOUT SCHOOL SITE</b>
          </h1>
          <div>
            <img src={imgAbout} alt="" className="img1" />
          </div>
          <h4 className="about_h4">
            <b>Educational Background</b>
          </h4>
          <br />
          <h5 className="about_h5">
            DLTU was founded with one purpose - to build a space for all
            students to grow, learn and create with each passing day. Through a
            unique teaching approach and a truly passionate staff, we help
            students develop academically and personally to the highest level.
          </h5>
          <br />
          <h5 className="about_h5">
            We invite you to explore our site and discover the academics and
            community School site provides to each and every student. Get in
            touch with us today to schedule and learn more about enrollment, or
            ask any other questions.
          </h5>
          <br />
          <button className="learnMore btn btn-warning">Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default About;

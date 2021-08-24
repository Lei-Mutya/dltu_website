import React from "react";
import "../css/Course.css";
import courses1 from "../images/course1.jpg";
import courses2 from "../images/course2.jpg";
import courses3 from "../images/course3.jpg";
import courses4 from "../images/course4.jpg";

function Coursesoff() {
  return (
    <div>
      <h1 className="courses">
        <b>COURSES OFFERED</b>
      </h1>
      <div className="main_course">
        <div className="container_courses">
          <div className="cards">
            <div>
              <img src={courses1} alt="" className="course1" />
            </div>
          </div>
          <div className="bio">
            <h3>Bachelor of Science in Nursing</h3>
          </div>
        </div>
        <div className="container_courses">
          <div className="cards">
            <div>
              <img src={courses2} alt="" className="course1" />
            </div>
          </div>
          <div className="bio">
            <h3>Bachelor of Science in Pharmacy</h3>
          </div>
        </div>
        <div className="container_courses">
          <div className="cards">
            <div>
              <img src={courses3} alt="" className="course1" />
            </div>
          </div>
          <div className="bio">
            <h3>Bachelor of Science in Psychology</h3>
          </div>
        </div>
        <div className="container_courses">
          <div className="cards">
            <div>
              <img src={courses4} alt="" className="course1" />
            </div>
          </div>
          <div className="bio">
            <h3>Bachelor of Science in Biology</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Coursesoff;

import React from "react";
import "../App.css";

function Visionmission() {
  return (
    <div className="container2">
      <div>
        <img src="../images/mission.jpg" alt="" className="img2" />
      </div>
      <div className="mission-vision">
        <div className="mission">
          <h3 style={{ textAlign: "center" }}>
            <b>MISSION</b>
          </h3>
          <h5>
            The mission of TRES University is to create a place where students
            feel safe to tackle obstacles and accomplish all of their goals. We
            strive to better our students through educational experiences both
            in and out of the classroom.
          </h5>
        </div>
      </div>
      <div className="mission-vision">
        <div className="vision">
          <h3 style={{ textAlign: "center" }}>
            <b>VISION</b>
          </h3>
          <h5>
            Our vision is to offer a variety of opportunities to help students
            be the best version of themselves, while having some fun along the
            way.
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Visionmission;

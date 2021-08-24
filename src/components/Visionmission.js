import React from "react";
import "../css/Mission.css";
import missionvision from "../images/mission.jpg";

function Visionmission() {
  return (
    <div className="container2">
      <div>
        <img src={missionvision} alt="" className="img2" />
      </div>
      <div className="mission-vision">
        <div className="mission">
          <h2 style={{ textAlign: "center", marginBottom: "2vh" }}>
            <b>MISSION</b>
          </h2>
          <h5>
            The mission of DR. J.L TAMARGO University is to create a place where
            students feel safe to tackle obstacles and accomplish all of their
            goals. We strive to better our students through educational
            experiences both in and out of the classroom.
          </h5>
        </div>
      </div>
      <div className="mission-vision">
        <div className="vision">
          <h2 style={{ textAlign: "center", marginBottom: "2vh" }}>
            <b>VISION</b>
          </h2>
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

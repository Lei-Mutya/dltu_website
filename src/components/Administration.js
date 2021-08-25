import React from "react";
import "../css/Admin.css";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";

function Administration() {
  return (
    <div>
      <h1 className="administration">
        <b>SCHOOL ADMINISTRATION</b>
      </h1>
      <div className="container_team">
        <div className="cardz">
          <div>
            <img src={team1} alt="team1" className="imgBx" />
          </div>
          <div className="contentBx">
            <h3>
              <b>DR. JL TAMARGO</b>
            </h3>
          </div>
          <br />
          <h5 className="contentBx1">FOUNDER</h5>
        </div>
      </div>

      <div className="container_team1">
        <div className="cardz">
          <div className="content">
            <div>
              <img src={team2} alt="team3" class="imgBx" />
            </div>
            <div className="contentBx">
              <h3>
                <b>SOLEIL MUTYA</b>
              </h3>
            </div>
            <br />
            <h5 className="contentBx1">Dean, College of Nursing</h5>
          </div>
        </div>
        <div className="cardz">
          <div className="content">
            <div>
              <img src={team3} alt="team3" class="imgBx" />
            </div>
            <div className="contentBx">
              <h3>
                <b>JAIME FERRER</b>
              </h3>
            </div>
            <br />
            <h5 className="contentBx1">Area Chairperson, BS Nursing</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Administration;

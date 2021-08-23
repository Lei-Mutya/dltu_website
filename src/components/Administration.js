import React from "react";

function Administration() {
  return (
    <div>
      <h1 className="administration">
        <b>SCHOOL ADMINISTRATION</b>
      </h1>
      <div className="container_team">
        <div className="card">
          <div>
            <img src="../images/team1.png" alt="team1" className="imgBx" />
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
        <div className="card">
          <div className="content">
            <div>
              <img src="../images/team2.png" alt="team3" class="imgBx" />
            </div>
            <div className="contentBx">
              <h3>
                <b>SOLEIL MUTYA</b>
              </h3>
            </div>
            <br />
            <h5 className="contentBx1">Teaching Coordinator</h5>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div>
              <img src="../images/team3.png" alt="team3" class="imgBx" />
            </div>
            <div className="contentBx">
              <h3>
                <b>JAIME FERRER</b>
              </h3>
            </div>
            <br />
            <h5 className="contentBx1">Assistant Coordinator</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Administration;

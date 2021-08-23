import React from "react";
import { Grid } from "@material-ui/core";
import "../App.css";

function Coursesoff() {
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <h1 className="courses">
            <b>COURSES OFFERED</b>
          </h1>
        </Grid>
        <hr />
        <div className="container_courses">
          <div className="bs_nursing">
            <Grid item xs={6} md={3}>
              <img src="../images/course1.jpg" alt="" className="course1" />
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="bio1">
                <h3 className="bs1">Bachelor of Science in Nursing</h3>
              </div>
            </Grid>
          </div>
          <div className="bs_pharmacy">
            <Grid item xs={6} md={3}>
              <img src="../images/course2.jpg" alt="" className="course2" />
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="bio2">
                <h3 className="bs1">Bachelor of Science in Pharmacy</h3>
              </div>
            </Grid>
          </div>
          <Grid item xs={3}>
            <div className="bio3">
              <h3 className="bs2">Bachelor of Science in Psychology</h3>
            </div>
          </Grid>
          <div className="bs_biology">
            <Grid item xs={6} md={3}>
              <img src="../images/course3.jpg" alt="" className="course3" />
            </Grid>
          </div>

          <Grid item xs={6}>
            <div className="bio">
              <h3 className="bs3">Bachelor of Science in Biology</h3>
            </div>
          </Grid>
          <div className="bs_psychology">
            <Grid item xs={6} md={3}>
              <img src="../images/course4.jpg" alt="" className="course4" />
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
}
export default Coursesoff;

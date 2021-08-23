import React from "react";
import { Grid } from "@material-ui/core";

function Coursesoff() {
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <h1>COURSES OFFERED</h1>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="../images/course1.jpg" alt="" className="course1" />
        </Grid>
        <Grid>
          <h2>Bachelor of Science in Nursing</h2>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="../images/course2.jpg" alt="" className="course2" />
        </Grid>
        <Grid>
          <h2>Bachelor of Science in Pharmacy</h2>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="../images/course3.jpg" alt="" className="course3" />
        </Grid>
        <Grid>
          <h2>Bachelor of Science in Biology</h2>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="../images/course4.jpg" alt="" className="course4" />
        </Grid>
        <Grid>
          <h2>Bachelor of Science in Psychology</h2>
        </Grid>
      </Grid>
    </div>
  );
}
export default Coursesoff;

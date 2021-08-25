import React from "react";
import "../css/Contact.css";
import dltulogo from "../images/dltuLogo.png";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

function Contact() {
  return (
    <div className="containerContact">
      <Grid>
        <Grid item sm={12}>
          <h1 className="contact1">
            <b>CONTACT US</b>
          </h1>

          <div className="info">
            <h5 className="info1">Makati, Metro Manila</h5>
            <h5 className="info2">dltu@gmail.com</h5>
            <h5 className="info3">123-456-7890</h5>
            <div className="logo_banner">
              <img src={dltulogo} alt="" className="loGo" />
            </div>
          </div>
        </Grid>
        <div className="sample">
          <Grid item sm={12}>
            <TextField
              required
              color="primary"
              id="name"
              label="Name"
              fullWidth
              style={{ margin: 8 }}
              placeholder="Enter your name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              style={{ margin: 8 }}
              placeholder="Enter your email"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              fullWidth
              id="phone"
              label="Phone"
              style={{ margin: 8 }}
              placeholder="Enter your phone number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              fullWidth
              id="address"
              label="Address"
              style={{ margin: 8 }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter your address"
            />
            <TextField
              id="subject"
              label="Subject"
              style={{ margin: 8 }}
              placeholder="Type the subject"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="message"
              label="Message"
              style={{ margin: 8 }}
              placeholder="Type your message here..."
              fullWidth
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <button
              className="send btn btn-block btn-warning"
              style={{ width: "99%", margin: "40px 0px 8px 8px" }}
            >
              Submit
            </button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
export default Contact;

import React, {useState} from "react";
import "../css/Contact.css";
import dltulogo from "../images/dltuLogo.png";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import {db} from '../firebase';

function Contact() {


  const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [address, setAddress]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');

    const handleConSubmit=(e)=>{
        e.preventDefault();
        db.collection('contacts').add({
           	name: name,
email: email,
		phone: phone,
		address: address,
		subject: subject,
		message: message
        })
        .then(()=>{
            alert("Your inquiry has been sent!");
        })
        .catch((error)=>{
            alert(error.message);
        });
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setSubject('');
        setMessage('');
    }

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
          <form onSubmit={handleConSubmit}>

          <Grid item sm={12}>
            <TextField
              required
              color="primary"
              id="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
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
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
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
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
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
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
              label="Address"
              style={{ margin: 8 }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter your address"
            />
            <TextField
              id="subject"
              value={subject}
              onChange={(e)=> setSubject(e.target.value)}
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
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
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
              type="submit"
              className="send btn btn-block btn-warning"
              style={{ width: "99%", margin: "40px 0px 8px 8px" }}
            >
              Submit
            </button>
          </Grid>
          </form>
        </div>
      </Grid>
    </div>
  );
}
export default Contact;

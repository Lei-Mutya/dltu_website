import React, { useState } from "react";
import { db } from "../firebase";

function AppForm() {
  const [applicantId, setApplicantId] = useState(
    Math.floor(Math.random() * 1000)
  );
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [result, setResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("applicants")
      .add({
        applicantId: applicantId,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        address: address,
        contactNo: contactNo,
        emailAdd: emailAdd,
        result: result,
      })
      .then(() => {
        alert("Application has been submitted!");
      })
      .catch((error) => {
        alert(error.message);
      });
    setApplicantId("");
    setFirstname("");
    setMiddlename("");
    setLastname("");
    setAddress("");
    setContactNo("");
    setEmailAdd("");
    setResult("");
  };

  return (
    <div> 
      <h1 className="text-center pt-5">ONLINE APPLICATION FORM</h1>

      <section className="container">
        <form onSubmit={handleSubmit} className="py-5">
          <div className="row mb-3">
            <div className="col">
              <p>
                Applicant ID
                <input
                  type="text"
                  name="applicantId"
                  value={applicantId}
                  onChange={(e) => setApplicantId(e.target.value)}
                readOnly />
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <p>
                Firstname:
                <input type="text" className="form-control" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Middlename:
                <input type="text" className="form-control" name="middlename" value={middlename} onChange={(e) => setMiddlename(e.target.value)}/>
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Lastname:
                <input type="text" className="form-control" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
            <p>
              Address:
              <textarea className="form-control" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <p>
                Contact No:
                <input type="text" className="form-control" name="contactNo" value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Email Address:
                <input type="text" className="form-control" name="emailAdd" value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)}/>
              </p>
            </div>
          </div>
          <div className="row mb-3 visually-hidden">
            <div className="col-md-1">
              <p>
                Result:
                <input type="text" className="form-control" name="result" value={result} onChange={(e) => setResult(e.target.value)} disabled/>
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-5 col-md-3">
            <button className="btn rounded btn-warning" type="submit">Submit Application</button>
            </div>
          </div>

        </form>
      </section>
    </div>
  );
}
export default AppForm;

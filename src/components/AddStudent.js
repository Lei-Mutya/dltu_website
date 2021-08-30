import { MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { db } from '../firebase';

const status = [
  {
    value: 'Passed',
    label: 'Passed',
  },
  {
    value: 'Failed',
    label: 'Failed',
  },
];

const year = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];

const courses = [
  {
    value: 'Bachelor of Science in Nursing',
    label: 'BS Nursing',
  },
  {
    value: 'Bachelor of Science in Pharmacy',
    label: 'BS Pharmacy',
  },
  {
    value: 'Bachelor of Science in Biology',
    label: 'BS Biology',
  },
  {
    value: 'Bachelor of Science in Psychology',
    label: 'BS Psychology',
  },
];

function AddStudent() {
  const [StudentId, setStudentId] = useState('');
  const [appId, setAppId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [course, setCourse] = useState('');
  const [appStatus, setAppstatus] = useState('');
  const [yearLevel, setYearlevel] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('students')
      .add({
        StudentId: StudentId,
        appId: appId,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        course: course,
        yearLevel: yearLevel,
        appStatus: appStatus,
      })
      .then(() => {
        alert('Student has been added!');
      })
      .catch(error => {
        alert(error.message);
      });
    setStudentId('');
    setAppId('');
    setFirstname('');
    setMiddlename('');
    setLastname('');
    setCourse('');
    setAppstatus('');
    setYearlevel('');
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p className="fw-bold mb-4 mt-3" style={{ fontSize: '30px' }}>
            Add Student
          </p>
          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">Student ID</p>
                <input
                  type="text"
                  className="form-control"
                  name="StudentId"
                  value={StudentId}
                  onChange={e => setStudentId(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Applicant ID
                  <input
                    type="text"
                    className="form-control"
                    name="appId"
                    value={appId}
                    onChange={e => setAppId(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Firstname:
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Middlename:
                  <input
                    type="text"
                    className="form-control"
                    name="middlename"
                    value={middlename}
                    onChange={e => setMiddlename(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Lastname:
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Year Level:
                  <TextField
                    id="filled-select-course"
                    className="form-control"
                    variant="filled"
                    select
                    label="Select Year"
                    value={yearLevel}
                    onChange={e => setYearlevel(e.target.value)}
                  >
                    {year.map(option3 => (
                      <MenuItem key={option3.value} value={option3.value}>
                        {option3.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="bold">
                  Course:
                  <TextField
                    id="filled-select-course"
                    className="form-control"
                    variant="filled"
                    select
                    label="Select Course"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                  >
                    {courses.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <p className="fw-bold">
                  Application Status
                  <TextField
                    id="filled-select-course"
                    className="form-control"
                    variant="filled"
                    select
                    label="Select Status"
                    value={appStatus}
                    onChange={e => setAppstatus(e.target.value)}
                  >
                    {status.map(option1 => (
                      <MenuItem key={option1.value} value={option1.value}>
                        {option1.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6 col-md-12 d-flex justify-content-end">
              <div className="form-group">
                <button className="btn btn-lg btn-secondary" type="submit">
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddStudent;

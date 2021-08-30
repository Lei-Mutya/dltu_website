import React from 'react';
import { Link } from 'react-router-dom';

function Sis() {
  return (
    <div className="py-5 my-3">
      <h1 className="text-center my-2 py-2">STUDENT INFORMATION SYSTEM</h1>

      <div className="row justify-content-center py-3">
        <div className="col-11">
          <h3 className="text-light py-2">
            What is a Student Information System?
          </h3>

          <p>
            {' '}
            A Student Information System, or SIS, is a web-based platform that
            helps schools and colleges take data online for easier management
            and better clarity. That's at its most basic. The SIS system is able
            to collect school-wide data online so that it can be easily accessed
            by teachers, parents, students, and administrators.
          </p>

          <div className="row justify-content-center py-5">
            <div className="col col-md-2 me-5">
              <Link
                className="text-decoration-none fw-bold text-dark"
                to="/studentlog"
              >
                <button>
                  <img
                    src="https://www.pngitem.com/pimgs/m/573-5730618_green-person-icon-transparent-png-green-person-icon.png"
                    width="200"
                    height="200"
                    alt="student"
                  />
                  STUDENT'S LOG-IN
                </button>
              </Link>
            </div>
            <div className="col col-md-2 ms-5">
              <Link
                className="text-decoration-none fw-bold text-dark"
                to="/adminlog"
              >
                <button>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSqQpa0CpYQbVzqYnhvD9xQUmid_qcoaJHpmbcJYnHvlDWEKvhkcQmgcNhfh_0Dv4sQI&usqp=CAU"
                    width="200"
                    height="200"
                    alt="admin"
                  />
                  ADMIN LOG-IN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sis;

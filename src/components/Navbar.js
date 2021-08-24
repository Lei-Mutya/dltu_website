import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4">
      <div className="container">
        <Link to="/" className="navbar-brand text-light mx-4">
          DLTU
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*navbar*/}
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            {/*HOME*/}
            <li className="nav-item active ms-5">
              <Link to="/" className="nav-link text-light mx-4">
                HOME
              </Link>
            </li>

            {/*ABOUT US*/}
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle text-light mx-4"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
              >
                ABOUT US
              </Link>
              <div className="dropdown-menu dropdown-menu-dark">
                <Link to="/visionmission" className="dropdown-item">
                  Vision - Mission Statement
                </Link>
                <Link to="/administration" className="dropdown-item">
                  Administration
                </Link>
              </div>
            </li>

            {/*ADMISSION*/}
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle text-light mx-4"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
              >
                ADMISSION
              </Link>
              <div className="dropdown-menu dropdown-menu-dark">
                <Link to="/admissreq" className="dropdown-item">
                  Admission Requirements
                </Link>
                <Link to="/appform" className="dropdown-item">
                  Online Application Form
                </Link>
                <Link to="/appresult" className="dropdown-item">
                  Application Result
                </Link>
              </div>
            </li>
            {/*COURSES OFFERED*/}
            <li className="nav-item">
              <Link to="/coursesoff" className="nav-link text-light mx-4">
                COURSES OFFERED
              </Link>
            </li>

            {/*CONTACT US*/}
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light mx-4">
                CONTACT US
              </Link>
            </li>

            {/*STUDENT INFORMATION SYSTEM*/}
            <li className="nav-item">
              <Link to="/sis" className="nav-link text-light mx-4">
                SIS
              </Link>
            </li>
          </ul>
        </div>
        {/*EOF NAVBAR*/}
      </div>
    </nav>
  );
}
export default Navbar;

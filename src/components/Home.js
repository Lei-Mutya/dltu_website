import React from "react";
import News from "./News";
import '../css/StudentMod.css'

function Home() {
  return (
    <div>
      <h1
        style={{ color: "#fec00f", marginTop: "100px", marginBottom: "50px" }}
      >
        HOME
      </h1>
      {/*SLIDER - 700x300 size image*/}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://image.shutterstock.com/image-photo/healthcare-people-group-professional-doctor-260nw-1241582959.jpg"
              className="d-block w-100 carouIMG"
              alt="Theme"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruPL30aj6w_9qlRgQ8kvc0YiEOTdRjfa_Bw&usqp=CAU"
              className="d-block w-100 carouIMG"
              alt="Eagle"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://image.shutterstock.com/image-photo/happy-students-diplomas-near-campus-260nw-1765367492.jpg"
              className="d-block w-100 carouIMG"
              alt="Students Life"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-5">
        <News />
      </div>
    </div>
  );
}
export default Home;

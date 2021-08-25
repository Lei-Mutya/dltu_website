import React from 'react'
import {Link} from 'react-router-dom'
import '../css/StudentMod.css'

const StudentMod = () => {

    return(
        <>
        <h1 className="text-center">STUDENT INFORMATION SYSTEM</h1>

        <div className="row py-3">
            <div className="col">
                <h4 className="text-warning">Welcome!</h4>
            </div>
            <div className="col text-end">
                <p><Link to='/studentlog'>LOG-OUT</Link></p>
            </div>
        </div>
        <div className="row pb-3">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                        src="https://image.shutterstock.com/image-vector/colorful-welcome-sign-over-dark-260nw-302914769.jpg"
                        className="d-block w-100 carouIMG"
                        alt="Theme"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                        src="http://mediaocu.com/wp-content/uploads/2015/10/fall-break-5-trees-banner.jpg"
                        className="d-block w-100 carouIMG"
                        alt="Eagle"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                        src="https://media.istockphoto.com/vectors/vector-of-students-standing-in-line-to-enter-university-vector-id1262645363?k=6&m=1262645363&s=612x612&w=0&h=mt8kOcFQvsJRhCfsv9JYolsEeLg8qnFvctSpYN7ruaA="
                        className="d-block w-100 carouIMG"
                        alt="Students Life"
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="row pb-3">
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Messages</button>
            </div>
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Profile</button>
            </div>
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Grades</button>
            </div>
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Billing Statements</button>    
            </div>
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Document Requests</button>    
            </div>
            <div className="col d-flex justify-content-center">
                <button className="btn btn-warning">Support</button>    
            </div>
        </div>
        
        
        
        </>
    )
}
export default StudentMod
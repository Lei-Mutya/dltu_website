import React from 'react'
import News from './News'

function Home() {
    return(
        <div>
            <h1>HOME PAGE</h1>
            
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-intro-bridgewater-state.jpg?epGhm7BhvbLMGQpdmVxXg4BcPkM5JyqJ&itok=bylWIi9J" className="d-block w-100" alt="Theme"/>
                </div>
                <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruPL30aj6w_9qlRgQ8kvc0YiEOTdRjfa_Bw&usqp=CAU" className="d-block w-100" alt="Eagle"/>
                </div>
                <div class="carousel-item">
                <img src="https://image.shutterstock.com/image-photo/happy-students-diplomas-near-campus-260nw-1765367492.jpg" className="d-block w-100" alt="Students Life"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            <div className="mt-5">
                <News />
            </div>

        </div>
    )
}
export default Home
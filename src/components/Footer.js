import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
       <div>
           <footer className="bg-dark text-center text-light">
            <div className="container p-4">
                {/*SOCIAL MEDIA*/}
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </section>
                {/*NEWSLETTER*/}
                <section>
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" className="form-control"/>
                                    <label className="form-label">Email Address</label>
                                </div>
                            </div>

                            <div class="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="mb-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.</p>
                </section>

                <section>
                <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </section>
            </div>
        <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}> © 2020 Copyright: 
    <Link to="/" className="text-white ms-2">Tres Creative Studio</Link>
  </div>


           </footer>
       </div>
    )

}
export default Footer

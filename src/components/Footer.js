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
                                        <input type="email" className="form-control" placeholder="Email Address"/>
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
                        <p>
                        “Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.” – Malcolm X
                        </p>
                    </section>

                    </div>

                    <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright: 
                    <Link to="/" className="text-white ms-2">Tres Creative Studio</Link>
                    </div>
           </footer>
           
       </div>
    )

}
export default Footer

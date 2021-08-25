import React from 'react'

function AdmissReq(){
    return(
        <div>
            <h1 className="text-center my-1 py-3">Admission Requirements</h1>
            <div className="row justify-content-center my-1 py-3">
                <div className="col-11">
                    <section>
                        <h4 className="pt-3 text-light">DLTU Ability and Career Interest Examination</h4>
                        <p>This is the official entrance exam for DLTU. It measures the mental and emotional ability of the aspiring DLTU students. 
                            The exam is also composed of 4 major categories such as Math, English, Science, and Logic questionnaires. The applicant 
                            is only allowed to take one DLTU Ability and Career Interest Examination, if he/she fails the exam he/she can no longer
                            allowed to take another exam. This exam also evaluates the aspiring DLTU student regarding his/her interest of selected course.
                        </p>

                    </section>
                </div>
            </div>

            <div className="row justify-content-center my-1 py-3">
                <div className="col-9">
                    <section className="pt-3 text-light">
                        <h4>List of Requirements:</h4>
                        <ul>
                            <li>Accomplished Application Form</li>
                            <li>Two (2) copies of the applicant's latest 2"x2" photo</li>
                            <li>Any one (1) of the following: Grade 12 School ID or Photocopy of Grade 12 Card or Certificate of Enrollment</li>
                            <li>Proof of Payment for the DLTU Exam</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="row justify-content-center my-1 py-3">
                <div className="col-11">
                    <section className="pt-3 text-light">
                    <h3>DLTU Exam Schedule:</h3>
                        <p>MONDAYS-FRIDAYS</p>
                        <p>9:00 AM and 2:00 PM</p>
                    </section>
                </div>
            </div>
           
            
        </div>
    )
}
export default AdmissReq
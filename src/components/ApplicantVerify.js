import React from 'react'
import {useState} from 'react'

import {useHistory} from 'react-router-dom'


const ApplicantVerify=()=>{
    let history=useHistory();

const [password, setPassword]=useState('');

const handleLog=(e)=>{
    
    e.preventDefault();

    if(password==="123456"){
        alert("The student number was sent to your email address");
        history.push("/studentlog");
    }
    else{
        alert("We cannot verify your account this time, kindly check the password provided");
    }
}

    return(
        <>
        <div className="container py-5">
        <h1 classname="text-center">Applicant Verification</h1>
        <form onSubmit={handleLog}>
        <div className="row justify-content-center pt-4 text-center">
            <div className="col-12">
            <p>
                <label>Enter the password sent to your email after the examination:</label>
            </p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-6">
                <p>
                <input type="password" name="password"  className="col-md-12" onChange={(e)=> setPassword(e.target.value)}/>
                </p>
            </div>
        </div>
             
        <div className="row justify-content-end">
            <div className="col-4">
                <button className="btn btn-secondary" type="submit">VERIFY</button>
            </div>
        </div>
            
        </form>
        </div>
        
        </>
    )
}
export default ApplicantVerify
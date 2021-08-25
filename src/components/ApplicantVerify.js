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
        <h1>Applicant Verification</h1>
        <form onSubmit={handleLog}>
           
            <p>
                <label>Enter the password sent to your email after the examination:</label>
                <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)}/>
            </p>
            <button type="submit">VERIFY</button>
            
        </form>
        </>
    )
}
export default ApplicantVerify
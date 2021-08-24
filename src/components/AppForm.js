import React, {useState} from 'react'
import {db} from '../firebase'

function AppForm(){

    const [applicantId, setApplicantId]=useState(Math.floor(Math.random()*1000));
    const [firstname, setFirstname]=useState('');
    const [middlename, setMiddlename]=useState('');
    const [lastname, setLastname]=useState('');
    const [address, setAddress]=useState('');
    const [contactNo, setContactNo]=useState('');
    const [emailAdd, setEmailAdd]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection('applicants').add({
            applicantId: applicantId,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            address: address,
            contactNo: contactNo,
            emailAdd: emailAdd
        })
        .then(()=>{
            alert("Application has been submitted!");
        })
        .catch((error)=>{
            alert(error.message);
        });
        setApplicantId('');
        setFirstname('');
        setMiddlename('');
        setLastname('');
        setAddress('');
        setContactNo('');
        setEmailAdd('');
    }

    return(
        <div>
            <h1>ONLINE APPLICATION FORM</h1>

            <section>
                <form onSubmit={handleSubmit}>
                <p>Applicant ID
                    <input
                        type="text"
                        name="applicantId"
                        value={applicantId}
                        onChange={(e)=> setApplicantId(e.target.value)}
                    />
                </p>

                <p>Firstname:   
                    <input 
                        type="text" 
                        name="firstname" 
                        value={firstname}
                        onChange={(e)=> setFirstname(e.target.value)}
                    />
                </p>

                <p>Middlename:   
                    <input 
                        type="text" 
                        name="middlename"
                        value={middlename}
                        onChange={(e)=> setMiddlename(e.target.value)}    
                    />
                </p>

                <p>Lastname:   
                    <input 
                        type="text" 
                        name="lastname"
                        value={lastname}
                        onChange={(e)=> setLastname(e.target.value)}   
                    />
                </p>


                <p>Address:   
                    <input 
                        type="text" 
                        name="address"
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)} 
                />
                </p>


                <p>Contact No:   
                    <input 
                        type="text" 
                        name="contactNo"
                        value={contactNo}
                        onChange={(e)=> setContactNo(e.target.value)} 
                    />
                </p>

                <p>Email Address:   
                    <input 
                        type="text" 
                        name="emailAdd"
                        value={emailAdd}
                        onChange={(e)=> setEmailAdd(e.target.value)} 
                    />
                </p>


                <button type="submit">Submit Application</button>
                </form>
            </section>
        </div>
    )
}
export default AppForm
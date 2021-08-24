import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
=======
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
>>>>>>> bc1b9a155d63e2f51b594e6a1d914a941953613a

function AppForm(){
    const classes = useStyles();
    
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
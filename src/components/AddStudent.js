import {MenuItem, TextField} from '@material-ui/core'
import React, { useState } from 'react'
import {db} from '../firebase'

const status=[
    {
        value:'Passed',
        label:'Passed'
    },
    {
        value:'Failed',
        label:'Failed'
    }
];

const year=[
    {
        value:'1',
        label:'1'
    },
    {
        value:'2',
        label:'3'
    },
    {
        value:'3',
        label:'3'
    },
    {
        value:'4',
        label:'4'
    }
];


const courses=[
    {
        value:'Bachelor of Science in Nursing',
        label:'BS Nursing'
    },
    {
        value:'Bachelor of Science in Pharmacy',
        label:'BS Pharmacy'
    },
    {
        value:'Bachelor of Science in Biology',
        label:'BS Biology'
    },
    {
        value:'Bachelor of Science in Psychology',
        label:'BS Psychology'
    }
];



function AddStudent()
{
    const [StudentId, setStudentId]=useState('');
    const [appId, setAppId]=useState('');
    const [firstname, setFirstname]=useState('');
    const [middlename, setMiddlename]=useState('');
    const [lastname, setLastname]=useState('');
    const [course, setCourse]=useState('');
    const [appStatus, setAppstatus]=useState('');
    const [yearLevel, setYearlevel]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection('students').add({
            StudentId: StudentId,
            appId: appId,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            course: course,
            yearLevel: yearLevel,
            appStatus: appStatus
        })
        .then(()=>{
            alert("Student has been added!");
        })
        .catch((error)=>{
            alert(error.message);
        });
        setStudentId('');
        setAppId('');
        setFirstname('');
        setMiddlename('');
        setLastname('');
        setCourse('');
        setAppstatus('');
        setYearlevel('');
    }

    return(
        <>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
        <p>Student ID
                <input
                    type="text"
                    name="StudentId"
                    value={StudentId}
                    onChange={(e)=> setStudentId(e.target.value)}
                />
            </p>
            <p>Applicant ID
                <input
                    type="text"
                    name="appId"
                    value={appId}
                    onChange={(e)=> setAppId(e.target.value)}
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

            <p>Year Level: 
            <TextField
                    id="filled-select-course" 
                    variant="filled"
                    select
                    label="Select Year"
                    value={yearLevel}
                    onChange={(e)=>setYearlevel(e.target.value)}
                >

                {year.map((option3)=>(
                    <MenuItem key={option3.value} value={option3.value}>
                        {option3.label}
                    </MenuItem>
                ))}
            </TextField>
            </p>

            <p>Course: 
            <TextField
                    id="filled-select-course" 
                    variant="filled"
                    select
                    label="Select Course"
                    value={course}
                    onChange={(e)=>setCourse(e.target.value)}
                >

                {courses.map((option)=>(
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </p>
            <p>Application Status
            <TextField
                    id="filled-select-course" 
                    variant="filled"
                    select
                    label="Select Status"
                    value={appStatus}
                    onChange={(e)=>setAppstatus(e.target.value)}
                >

                {status.map((option1)=>(
                    <MenuItem key={option1.value} value={option1.value}>
                        {option1.label}
                    </MenuItem>
                ))}
            </TextField>
            </p>

            <button type="submit">Add Student</button>
           
        </form>
        </>
    )
}
export default AddStudent

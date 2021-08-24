import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const StudentLog=()=>{
    let history=useHistory();

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleLog=(e)=>{
    
        e.preventDefault();

        if(username==="2021-0983" && password==="student"){
            alert("Welcome Soliel!");
            history.push("/studentmod");
        
        }
        else{
            alert("username and/or password is incorrect");
        }
}


    return(
        <>
        <h1>STUDENT LOG-IN</h1>

        <form onSubmit={handleLog}>
            <p>
                <label>Username:</label>
                <input type="text" name="username"  onChange={(e)=> setUsername(e.target.value)} />
            </p>
            <p>
                <label>Password:</label>
                <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)}/>
            </p>
            <button type="submit">LOG-IN</button>
            
        </form>
        </>
    )
}
export default StudentLog
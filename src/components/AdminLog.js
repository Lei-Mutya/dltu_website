import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

function AdminLog(){
    let history=useHistory();

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    
    const handleLog=(e)=>{
        
            e.preventDefault();
    
            if(username==="admin" && password==="pass"){
                alert("Welcome Admin!");
                history.push("/adminmod");
            
            }
            else{
                alert("username and/or password is incorrect");
            }
        }
    return(
        <>
        <h1>ADMIN MODULE LOG-IN</h1>
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
export default AdminLog
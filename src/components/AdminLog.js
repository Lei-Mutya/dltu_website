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
                alert("Your username and/or password is incorrect");
            }
        }
    return(
        <div className="container py-5">
            <h1 className="text-center">ADMIN MODULE LOG-IN</h1>
            <form onSubmit={handleLog} className="my-4">
                <div className="row justify-content-center pb-3">
                    <div className="col-5">
                        <p>
                            <label className="form-label" for="username">Username:</label>
                            <input type="text" name="username" className="form-control"  onChange={(e)=> setUsername(e.target.value)} />
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-5">
                        <p>                       
                            <label className="form-label" for="password">Password:</label>
                            <input type="password" name="password" className="form-control"  onChange={(e)=> setPassword(e.target.value)}/>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    <div className="col-1">
                        <button type="submit" className="btn rounded btn-warning">LOG-IN</button>
                    </div>
                </div>
                
                
            </form>
        </div>
    )
}
export default AdminLog
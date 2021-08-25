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
        <div className="container py-5">
            <h1 className="text-center">STUDENT LOG-IN</h1>
            <form onSubmit={handleLog} className="my-4">
                <div className="row justify-content-center pb-3">
                    <div className="col-5">
                        <p>
                            <label className="form-label" for="username">Student Number:</label>
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
export default StudentLog
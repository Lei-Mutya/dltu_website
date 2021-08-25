import React from 'react'
import "../css/AppResult.css"
import {db} from '../firebase'
import {Link} from 'react-router-dom'

class AppResult extends React.Component
{
    state={
        students:null
    }
    componentDidMount(){
        console.log("Mounted");
        db.collection('students')
        .get()
        .then(snapshot=>{
            const students=[];
            snapshot.forEach(doc =>{
                const data=doc.data()
                students.push(data);
            })
            this.setState({students: students})
           // console.log(snapshot);
        })
        .catch(error=> console.log(error))
      }
    
    render(){
        
        return(
            
        <div>
        <h1 className="text-center">List of Passed Applicants</h1>
        {this.state.students && this.state.students.map(student => 
            {
                return(
                        <div className="container">
                                <div className="row justify-content-center">
                                        <div className="col-7">
                                            <p className="fw-bold">APPLICANT ID : <Link to='/ApplicantVerify'>{student.appId}</Link></p>
                                            <p className="fw-bold ">APPLICATION STATUS :{student.appStatus}</p>
                                            <hr/>
                                        </div>
                                </div>
                        </div>        
                    )
            })
        } 
        </div>  
    )
 }
}
export default AppResult
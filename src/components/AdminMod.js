import React from 'react'
import {db} from '../firebase'
import {Link} from 'react-router-dom'

class AdminMod extends React.Component
{

    state={
        applicants:null
    }
    componentDidMount(){
        console.log("Mounted");
        db.collection('applicants')
        .get()
        .then(snapshot=>{
            const applicants=[];
            snapshot.forEach(doc =>{
                const data=doc.data()
                applicants.push(data);
            })
            this.setState({applicants: applicants})
           // console.log(snapshot);
        })
        .catch(error=> console.log(error))
      }

    render(){
        return(
            <>

          

        <h1 className="text-center py-5">Applicants</h1>
          {/*ADD STUDENT*/}
          <button className="btn btn-warning"><Link to='/addstudent' className="text-decoration-none text-dark fw-bold">Add Student</Link></button>
        
        <div className="row justify-content-center py-5">
            <div className="col-11 d-flex justify-content-center text-warning">
                    <table className="table table-dark table-hover">
                                <tr>
                                    <th>Applicant ID</th>
                                    <th>Firstname</th>
                                    <th>Middlename</th>
                                    <th>Lastname</th>
                                    <th>Address</th>
                                    <th>Contact #</th>
                                    <th>Email Address</th>
                                </tr>
                            {this.state.applicants && this.state.applicants.map(applicant => 
                                {
                                    return(
                                        
                                            <tr>
                                                <td>{applicant.applicantId}</td>
                                                <td>{applicant.firstname}</td>
                                                <td>{applicant.middlename}</td>
                                                <td>{applicant.lastname}</td>
                                                <td>{applicant.address}</td>
                                                <td>{applicant.contactNo}</td>
                                                <td>{applicant.emailAdd}</td>
                                            </tr>
                                        )
                                })
                            } 
                </table>
            </div>
        </div>
        
       
            </>
        )
    }
}
export default AdminMod
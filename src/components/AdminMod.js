import React from 'react'
import {db} from '../firebase'

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
        
        <h1>Applicants</h1>
        <table>
                        <tr>
                            <th>Applicant ID</th>
                            <th>Firstname</th>
                            <th>Middlename</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Contact #</th>
                            <th>Email Address</th>
                            <th>Result</th>
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
                            <td>{String(applicant.result)}</td>
                        </tr>
                 
        )
            })
        } 
           </table>
       
            </>
        )
    }
}
export default AdminMod
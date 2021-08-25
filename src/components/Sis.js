import React from 'react' 
import {Link} from 'react-router-dom'

function Sis(){
    return(
        <div>
            <h1>STUDENT INFORMATION SYSTEM</h1>

            <h3>What is a Student Information System?</h3>

            <p> A Student Information System, or SIS, is a web-based platform that helps schools and colleges take data online for easier management and better clarity. That's at its most basic. 
                The SIS system is able to collect school-wide data online so that it can be easily accessed by teachers, parents, students, and administrators. 
            </p>
            <Link to='/studentlog'>Student's Log-In</Link>
            <br/>
            <br/>
            <Link to='/adminlog'>Admin Log-In</Link>
        </div>
    )
}
export default Sis
import React from 'react' 
import {Link} from 'react-router-dom'

function Sis(){
    return(
        <div>
            <h1>STUDENT INFORMATION SYSTEM</h1>
            <Link to='/'>Student Log-In</Link>
            <br/>
            <br/>
            <h1>Admin</h1>
            <Link to='/adminlog'>Admin Log-In</Link>
        </div>
    )
}
export default Sis
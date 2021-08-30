import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Visionmission from './components/Visionmission';
import Administration from './components/Administration';
import AdmissReq from './components/AdmissReq';
import AppForm from './components/AppForm';
import AppResult from './components/AppResult';
import Coursesoff from './components/Coursesoff';
import Sis from './components/Sis';
import AdminLog from './components/AdminLog';
import AdminMod from './components/AdminMod';
import AddStudent from './components/AddStudent';
import ApplicantVerify from './components/ApplicantVerify';
import StudentLog from './components/StudentLog';
import StudentMod from './components/StudentMod';

function App() {
  return (
    <Router>
      <div>
        <div className="header_jl"></div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/test2" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/visionmission" component={Visionmission} />
            <Route path="/administration" component={Administration} />
            <Route path="/test2/admissreq" component={AdmissReq} />
            <Route path="/test2/appform" component={AppForm} />
            <Route path="/test2/appresult" component={AppResult} />
            <Route path="/test2/coursesoff" component={Coursesoff} />
            <Route path="/test2/contact" component={Contact} />
            <Route path="/test2/sis" component={Sis} />
            <Route path="/test2/adminlog" component={AdminLog} />
            <Route path="/test2/adminmod" component={AdminMod} />
            <Route path="/test2/addstudent" component={AddStudent} />
            <Route path="/test2/applicantverify" component={ApplicantVerify} />
            <Route path="/test2/studentlog" component={StudentLog} />
            <Route path="/test2/studentmod" component={StudentMod} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

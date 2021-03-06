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
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/visionmission" component={Visionmission} />
            <Route path="/administration" component={Administration} />
            <Route path="/admissreq" component={AdmissReq} />
            <Route path="/appform" component={AppForm} />
            <Route path="/appresult" component={AppResult} />
            <Route path="/coursesoff" component={Coursesoff} />
            <Route path="/contact" component={Contact} />
            <Route path="/sis" component={Sis} />
            <Route path="/adminlog" component={AdminLog} />
            <Route path="/adminmod" component={AdminMod} />
            <Route path="/addstudent" component={AddStudent} />
            <Route path="/applicantverify" component={ApplicantVerify} />
            <Route path="/studentlog" component={StudentLog} />
            <Route path="/studentmod" component={StudentMod} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

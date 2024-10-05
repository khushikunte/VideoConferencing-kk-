import React from 'react';
import { BiSolidVideoRecording } from "react-icons/bi";
import { GoPersonFill } from "react-icons/go";
import './Navbar.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Add Link import
import Sidebar from './Sidebar';
import Home from './Home';
import Upcoming from './Upcoming';
import Previous from './Previous';
import Recording from './Recording';
import PersonalRoom from './PersonalRoom';
import Signup from './Signup';
import Login from './Login';

const Navbar = () => {
  return (
    
    <Router> {/* Move Router to wrap the entire component */}
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <a>
              <BiSolidVideoRecording style={{ fontSize: '3rem', color: 'white' }} />
            </a>
            <a className="navbar-brand " href="#" style={{color:'white', fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`, fontSize:'5vh'}}>
              Video Conferencing
            </a>
            {/* Wrap the icon in a Link */}
            <Link to="/signup"> 
              <GoPersonFill style={{fontSize:'2rem', color:'white'}} />
            </Link>
          </div>
        </nav>

        {/* Sidebar and Routes */}
        <div style={{ display: 'flex', marginTop: '4vh' }}> 
          <Sidebar />
          <div style={{ marginLeft: '10vw', padding: '20px', width: '100%' }}> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Upcoming" element={<Upcoming />} />
              <Route path="/Previous" element={<Previous />} />
              <Route path="/Recording" element={<Recording />} />
              <Route path="/PersonalRoom" element={<PersonalRoom />} />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/login" element={<Login />} />  
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;

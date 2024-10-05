import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar my-5" style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white' }}>
        <div className="position-sticky" style={{ backgroundColor: 'rgb(65, 65, 122)' }}>
          <div className="list-group list-group-flush" style={{ backgroundColor: 'rgb(65, 65, 122)' }}>
            <Link style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white' }} to="/" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Home</span>
            </Link>
            <Link 
              style={{
                backgroundColor: 'rgb(65, 65, 122)', 
                color: 'white', 
                fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`
              }} 
              to="/Upcoming" 
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-area fa-fw me-3"></i><span>UpComing</span>
            </Link>
            <Link style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white',fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif` }} to="/Previous" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fas fa-lock fa-fw me-3"></i><span>Previous</span>
            </Link>
            <Link style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white',fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif` }} to="/Recording" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fas fa-chart-line fa-fw me-3"></i><span>Recording</span>
            </Link>
            <Link style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white' ,fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`}} to="/PersonalRoom" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fas fa-chart-pie fa-fw me-3"></i><span>PersonalRoom</span>
            </Link> 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

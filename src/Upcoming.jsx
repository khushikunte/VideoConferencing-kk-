import { IoCopy } from "react-icons/io5";

import React from 'react';
import './Upcoming.css'
const Upcoming = () => {
  return (
    <div className="container my-5">
      <h2>UpComing Meetings</h2>
    <div >
      <div  class="card my-4">
        <div class="card-body">
          <h5 class="card-title">Client Presentation</h5>
          <p class="card-text">Showcase New features</p>
          <a href="#" style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}} class="btn btn">Start</a>
          <a href="#" style={{borderColor:' black '}} class="btn btn mx-3"><span> <IoCopy style={{fontSize:'1rem',color:'black'}}/>
          </span>
            Copy Invitation</a>
        </div>
      </div>

      <div class="card my-4">
        <div class="card-body">
          <h5 class="card-title">Innovation Hub</h5>
          <p class="card-text">Tech Talk Session</p>
          <a href="#" style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}}class="btn btn">Start</a>
          <a href="#" style={{borderColor:' black '}} class="btn btn mx-3"><span> <IoCopy style={{fontSize:'1rem',color:'black'}}/>
          </span>
            Copy Invitation</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Upcoming;
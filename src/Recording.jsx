import React from 'react';
import { FaRegShareSquare } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa'; 

const Recording = () => {
  return (
    <div className='container my-5'>
      <h2>Recording</h2>

      <div className="card my-4">
        <div className="card-body">
          <img style={{ height: "3vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmzR-L7w1H-F-oCSDIVj3lo130BU5iynNEQ&s' alt="Recording icon" />
          <h6 className="card-title">#4y59jfh</h6>
          <p>Start Time <span>End Time</span></p>
          <a style={{fontSize:'2vh' ,backgroundColor:'rgb(65, 65, 122)',color:'white'}} href="#" className="btn btn">
          <FaPlay style={{ fontSize: '1rem', color: 'white' }} />
            Play
          </a>
          <a style={{fontSize:'2vh',backgroundColor:'rgb(65, 65, 122)',color:'white'}} href="#" className="btn btn mx-3">
          <FaRegShareSquare style={{ fontSize: '1rem', color: 'white' }} />
            Share
          </a>
        </div>
      </div>

      <div className="card my-4">
        <div className="card-body">
          <img style={{ height: "3vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmzR-L7w1H-F-oCSDIVj3lo130BU5iynNEQ&s' alt="Recording icon" />
          <h6 className="card-title">#hut349ji</h6>
          <p>Start Time <span>End Time</span></p>
          <a style={{fontSize:'2vh',backgroundColor:'rgb(65, 65, 122)',color:'white'}} href="#" className="btn btn">
            <FaPlay style={{ fontSize: '1rem', color: 'white' }} />
            Play
          </a>
          <a style={{fontSize:'2vh',backgroundColor:'rgb(65, 65, 122)',color:'white'}} href="#" className="btn btn mx-3">
          <FaRegShareSquare style={{ fontSize: '1rem', color: 'white' }} />
            Share
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recording;

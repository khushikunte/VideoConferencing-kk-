import { IoMdAdd } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { BiSolidVideoRecording } from "react-icons/bi";
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentDate, setCurrentDate] = useState({
    year: '',
    month: '',
    day: '',
    time: '',
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const year = now.getFullYear();
      const month = now.toLocaleString('default', { month: 'long' });
      const day = now.toLocaleString('default', { weekday: 'long' });
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setCurrentDate({ year, month, day, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div  className="card-container my-5">
        <div className="card0" style={{ width: '62rem', height: '15rem', borderBlockColor: 'black' }}>
          <div className="card-body0">
            <img className='meet' style={{ borderRadius: '5px' }} src='https://images.theengineeringprojects.com/image/main/2023/01/top-technologies-for-a-successful-virtual-meeting-or-event-2.png' alt="Add Icon" />
            <h5 style={{ textDecoration: 'underline' }} className="card-title">Upcoming Meet
              <span><h6> At time</h6></span>
            </h5>
            <div style={{ border: 'black solid 1px', padding: '8px', borderRadius: '10px' }} className='datetime'>
              <div className="date-time mt-3">
                <p>{currentDate.time}</p>
                <p>{`${currentDate.day}, ${currentDate.month} ${currentDate.year}`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 13rem)', gap: '50px', marginTop: '20px' }}>
          <div className="card" style={{ height: '10rem', borderBlockColor: 'black' }}>
            <div className="card-body">
              <IoMdAdd style={{ fontSize: '2rem', color: 'black' }} />
              <h5 style={{marginTop:'5vh'}}className="card-title">New Meeting</h5>
              <p className="card-subtitle mb-2 text-body-secondary">Set Up a New Recording</p>
            </div>
          </div>

          <div className="card" style={{ height: '10rem', borderBlockColor: 'black' }}>
            <div className="card-body">
              <MdPersonAddAlt1  style={{ fontSize: '2rem', color: 'black' }} />
              <h5 style={{marginTop:'5vh'}} className="card-title">Join Meeting</h5>
              <p className="card-subtitle mb-2 text-body-secondary">via Invitation Link</p>
            </div>
          </div>

          <div className="card" style={{ height: '10rem', borderBlockColor: 'black' }}>
            <div className="card-body">
              <RiCalendarScheduleFill style={{ fontSize: '2rem', color: 'black' }} />
              <h5 style={{marginTop:'5vh'}}className="card-title">Schedule Meeting</h5>
              <p className="card-subtitle mb-2 text-body-secondary">Plan your Meeting</p>
            </div>
          </div>

          <div className="card" style={{ height: '10rem', borderBlockColor: 'black' }}>
            <div className="card-body">
              <BiSolidVideoRecording style={{ fontSize: '2rem', color: 'black' }} />
              <h5 style={{marginTop:'5vh'}}className="card-title">View Recordings</h5>
              <p className="card-subtitle mb-2 text-body-secondary">Meeting Recordings</p>
            </div>
          </div>
        </div>
      </div>

      <div className='upmeeting'>
        <h4 className='upmeet'>Today's Upcoming Meetings</h4>
        <h5 style={{ color: 'red' }}>Not Yet...</h5>
      </div>
    </>
  );
};

export default Home;

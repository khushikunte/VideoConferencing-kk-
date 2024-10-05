import React from 'react'
import { MdAdd } from "react-icons/md";

const PersonalRoom = () => {
  return (
    <div className='container my-5'>
      <h5>Personal Meeting Room  </h5>
      <p>Meeting ID : </p>
      <p>Passcode : </p>
      <p>Invitation Link : </p>
      <button style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}}className="btn btn mx-2">Start The Meeting </button>
      <button style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}}className="btn btn">Copy Invitation</button>
      <button style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}}className="btn btn mx-2">Edit</button>
      <button style={{backgroundColor:'rgb(65, 65, 122)',color:'white'}}className="btn btn">Delete</button>
      <div >
      <button style={{borderColor:'black'}} className="btn btn mx-2 my-3">
      <MdAdd style={{ fontSize: '2rem', color: 'black' }} />
        Create a new room</button>
      </div>
    </div>
  )
}

export default PersonalRoom;

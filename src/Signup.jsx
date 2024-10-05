import React from 'react';
import { Link } from 'react-router-dom';
import './style1.css';

const Signup = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100'>
     
      <div style={{ ackgroundColor: 'rgb(65, 65, 122)', padding: '20px', borderRadius: '10px' }}>
        
        
        <div className='form-container p-5 rounded' >
          
          <form>
            <h3 className='text-center'>Sign Up</h3>
            
            <div className='mb-2'>
              <label htmlFor='fname'>First name</label> 
              <input type="text" placeholder='Enter First name' className='form-control'/>
            </div>
            
            <div className='mb-2'>
              <label htmlFor='lname'>Last name</label> 
              <input type="text" placeholder='Enter Last name' className='form-control'/>
            </div>
            
            <div className='mb-2'>
              <label htmlFor='email'>Email</label> 
              <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            
            <div className='mb-2'>
              <label htmlFor='password'>Password</label> 
              <input type="password" placeholder='Enter password' className='form-control'/>
            </div>
            
            <div className='d-grid mt-2'>
              <button 
                style={{ backgroundColor: 'rgb(65, 65, 122)', color: 'white' }} 
                className='btn btn'
              >
                Sign Up
              </button>  
            </div>
            
            <p className='text-end mt-2'>
              Already Registered? | <Link to="/login" className='ms-2'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

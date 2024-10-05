import React from 'react';
import { Link } from 'react-router-dom';
import './style1.css'


const Login = () => {  
  return (
    <div style={{marginLeft:'1vw'}} className='login template d-flex justify-content-center align-items-center  vh-100 '>
        <div className='form-container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Login In</h3>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label> 
                <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label> 
                <input type="password" placeholder='Enter password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                <label htmlFor="check" className='custom-input-label  ms-2'>Remember me</label>
            </div>
            <div className='d-grid'>
                <button style={{backgroundColor: 'rgb(65, 65, 122)',color:'white'}} className='btn btn'>Login In</button>  
            </div>
            <p className='text-end mt-2'>
                Forgot <a href="#">Password? </a> | <Link to="/Signup" className='ms-2'>Sign up</Link>
            </p>
        </form>
        </div>
    </div>
  );
}

export default Login;
import React from 'react';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />,
        
      </div>
    </>
  );
};

export default App;
